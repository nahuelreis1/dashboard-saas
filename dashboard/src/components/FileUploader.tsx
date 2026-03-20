import React, { useState } from 'react';
import { Upload, FileText, X, CheckCircle } from 'lucide-react';

export default function FileUploader() {
  const [files, setFiles] = useState<{ name: string; size: string; status: 'ready' | 'uploading' | 'done' }[]>([
    { name: 'documentacion_api.pdf', size: '2.4 MB', status: 'done' },
    { name: 'guia_estilo.docx', size: '1.1 MB', status: 'ready' }
  ]);

  const addSimulatedFile = () => {
    setFiles([...files, { name: 'nuevo_archivo.txt', size: '150 KB', status: 'ready' }]);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div 
          className="border-2 border-dashed border-slate-300 rounded-xl p-12 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-colors cursor-pointer group"
          onClick={addSimulatedFile}
        >
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">Sube tus archivos de conocimiento</h3>
          <p className="text-sm text-slate-500 max-w-sm">
            PDF, DOCX, TXT. El agente usará esta información para responder con contexto real.
          </p>
          <button className="mt-6 text-sm font-semibold text-blue-600">O arrastra y suelta aquí</button>
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Archivos Subidos</h4>
        <ul className="space-y-2">
          {files.map((file, idx) => (
            <li key={idx} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors group">
              <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-500">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{file.name}</p>
                <p className="text-xs text-slate-500">{file.size} • {file.status === 'done' ? 'Procesado' : 'Listo para procesar'}</p>
              </div>
              <div className="flex items-center gap-2">
                {file.status === 'done' && <CheckCircle className="w-4 h-4 text-green-500" />}
                <button className="p-1 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
