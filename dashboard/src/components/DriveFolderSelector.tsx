import React, { useState, useEffect } from 'react';
import { Folder, CheckCircle2, Loader2, AlertCircle, RefreshCw } from 'lucide-react';

interface DriveFolder {
  id: string;
  name: string;
}

const DriveFolderSelector: React.FC = () => {
  const [folders, setFolders] = useState<DriveFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchConfigAndFolders();
  }, []);

  const fetchConfigAndFolders = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Obtener la config actual para ver si ya hay una carpeta seleccionada
      const configRes = await fetch('/api/agent/config');
      if (configRes.ok) {
        const configData = await configRes.json();
        if (configData.drive_folder_id) {
          setSelectedFolder(configData.drive_folder_id);
        }
      }

      // 2. Obtener las carpetas del usuario de Google Drive
      const foldersRes = await fetch('/api/files/folders');
      if (foldersRes.ok) {
        const foldersData = await foldersRes.json();
        if (foldersData.success && foldersData.folders) {
          setFolders(foldersData.folders);
        } else {
          setError(foldersData.error || 'No se pudieron cargar las carpetas.');
        }
      } else {
        if (foldersRes.status === 401) {
          setError('Sesión expirada o no autenticado con Google. Por favor, vuelve a iniciar sesión.');
        } else {
          setError('Error al cargar carpetas de Drive.');
        }
      }
    } catch (err) {
      console.error(err);
      setError('Error de conexión al cargar carpetas.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectFolder = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const folderId = e.target.value;
    setSelectedFolder(folderId);
    
    if (!folderId) return;

    setSaving(true);
    setSuccess(false);
    setError(null);
    try {
      const res = await fetch('/api/agent/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ drive_folder_id: folderId })
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError('Error al guardar la configuración.');
      }
    } catch (err) {
      setError('Error de conexión al guardar.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-3 p-4 bg-[var(--background)]/50 border border-[var(--border)] rounded-xl">
        <Loader2 className="w-5 h-5 animate-spin text-[var(--color-accent-base)]" />
        <span className="text-sm text-[var(--muted-foreground)]">Cargando carpetas de Google Drive...</span>
      </div>
    );
  }

  return (
    <div className="p-5 bg-[var(--background)]/50 backdrop-blur-md border border-[var(--border)] rounded-2xl shadow-sm mb-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Folder className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Carpeta de Sincronización (Google Drive)</h4>
            <p className="text-sm text-[var(--muted-foreground)]">Selecciona dónde se guardarán los documentos vectorizados.</p>
          </div>
        </div>
        <button 
          onClick={fetchConfigAndFolders}
          className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors text-[var(--muted-foreground)]"
          title="Recargar carpetas"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 text-sm text-destructive bg-destructive/10 rounded-lg border border-destructive/20">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <select
            value={selectedFolder}
            onChange={handleSelectFolder}
            disabled={saving || folders.length === 0}
            className="w-full appearance-none bg-[var(--card)] border border-[var(--border)] rounded-xl py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-base)]/50 transition-all disabled:opacity-50"
          >
            <option value="">Selecciona una carpeta...</option>
            {folders.map(folder => (
              <option key={folder.id} value={folder.id}>{folder.name}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[var(--muted-foreground)]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
        
        {saving && <Loader2 className="w-5 h-5 animate-spin text-[var(--color-accent-base)]" />}
        {success && <CheckCircle2 className="w-5 h-5 text-emerald-500 animate-in fade-in" />}
      </div>
    </div>
  );
};

export default DriveFolderSelector;
