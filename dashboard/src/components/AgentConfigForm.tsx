import React, { useState } from 'react';
import { Save, User, MessageSquare, Bot } from 'lucide-react';

export default function AgentConfigForm() {
  const [formData, setFormData] = useState({
    name: 'Asistente de Ventas',
    role: 'Asesor comercial experto en productos tech',
    prompt: 'Eres un asistente cordial que ayuda a cerrar ventas...',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Guardando configuración...', formData);
    alert('Configuración guardada (Simulación)');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 space-y-6 max-w-2xl">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">Configuración del Agente</h3>
        <p className="text-sm text-slate-500">Define la personalidad y el comportamiento base de tu agente IA.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4" /> Nombre del Agente
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            placeholder="Ej. Soporte Cliente"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
            <Bot className="w-4 h-4" /> Rol/Especialidad
          </label>
          <input
            type="text"
            id="role"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            placeholder="Ej. Experto en Backend Node.js"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Prompt de Sistema (Instrucciones)
          </label>
          <textarea
            id="prompt"
            rows={5}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none"
            placeholder="Instrucciones detalladas de cómo debe actuar..."
            value={formData.prompt}
            onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
          />
          <p className="mt-2 text-xs text-slate-500 italic">Este prompt define los límites y el tono del agente.</p>
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium inline-flex items-center gap-2 transition-colors active:scale-95"
        >
          <Save className="w-4 h-4" /> Guardar Cambios
        </button>
      </div>
    </form>
  );
}
