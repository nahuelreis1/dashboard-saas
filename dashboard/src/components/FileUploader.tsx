import React, { useState, useCallback } from 'react';
import { Upload, FileText, X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  size: string;
  type: string;
  status: 'uploading' | 'completed' | 'error';
  errorMsg?: string;
}

const FileUploader: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([
    { id: '1', name: 'manual-procedimientos.pdf', size: '2.4 MB', type: 'application/pdf', status: 'completed' },
    { id: '2', name: 'lista-precios-q1.csv', size: '1.1 MB', type: 'text/csv', status: 'completed' }
  ]);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, []);

  const handleFiles = (newFiles: File[]) => {
    newFiles.forEach(file => {
      const id = Math.random().toString(36).substr(2, 9);
      const newFileItem: FileItem = {
        id,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
        type: file.type,
        status: 'uploading'
      };

      setFiles(prev => [...prev, newFileItem]);
      uploadFile(file, id);
    });
  };

  const uploadFile = async (file: File, id: string) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/files/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'completed' } : f));
      } else {
        setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'error', errorMsg: data.error || 'Error al subir' } : f));
      }
    } catch (error) {
      console.error('Error de red al subir archivo:', error);
      setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'error', errorMsg: 'Error de conexión' } : f));
    }
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="space-y-6">
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`
          relative border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all duration-300
          ${isDragging 
            ? 'border-[var(--color-accent-base)] bg-[var(--color-accent-base)]/5 scale-[0.99] shadow-inner' 
            : 'border-muted-foreground/20 hover:border-[var(--color-accent-base)]/50 hover:bg-[var(--muted)]/50'}
        `}
      >
        <div className={`p-4 rounded-full mb-4 transition-colors ${isDragging ? 'bg-[var(--color-accent-base)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>
          <Upload className={`w-8 h-8 ${isDragging ? 'animate-bounce' : ''}`} />
        </div>
        <div>
          <p className="text-lg font-semibold">Arrastra tus archivos aquí</p>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Soporta PDF, DOCX, CSV y TXT (Max 50MB)
          </p>
        </div>
        <input 
          type="file" 
          multiple 
          className="absolute inset-0 opacity-0 cursor-pointer" 
          onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
        />
      </div>

      {files.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
            Archivos Cargados ({files.length})
          </h4>
          <div className="grid gap-3">
            {files.map((file) => (
              <div 
                key={file.id} 
                className="group flex items-center gap-4 p-4 bg-[var(--background)]/50 border border-[var(--border)] rounded-xl hover:shadow-md transition-all animate-in fade-in slide-in-from-left-2"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                  ${file.status === 'error' ? 'bg-destructive/10 text-destructive' : 'bg-[var(--color-accent-base)]/10 text-[var(--color-accent-base)] group-hover:bg-[var(--color-accent-base)] group-hover:text-white'}
                `}>
                  <FileText className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-[var(--muted-foreground)]">{file.size}</p>
                    {file.status === 'completed' && <span className="text-xs text-[var(--muted-foreground)]">• Vectorizado</span>}
                    {file.status === 'error' && (
                      <span className="text-xs text-destructive flex items-center gap-1">
                        • {file.errorMsg}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                   {file.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                   {file.status === 'uploading' && <Loader2 className="w-5 h-5 animate-spin text-[var(--color-accent-base)]" />}
                   {file.status === 'error' && <AlertCircle className="w-5 h-5 text-destructive" />}
                   
                   <button 
                     onClick={() => removeFile(file.id)}
                     className="ml-2 p-2 text-[var(--muted-foreground)] hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                   >
                     <X className="w-4 h-4" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
