import React, { useState } from 'react';
import { Save, Sparkles, MessageSquare, Briefcase, ChevronDown } from 'lucide-react';

const AgentConfigForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    tone: 'professional',
    objective: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving config...', formData);
    // Logic to save
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2 text-foreground/80">
            <Sparkles className="w-4 h-4 text-[var(--color-accent-base)]" />
            Nombre del Agente
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej: Sofia de Soporte"
            className="w-full px-4 py-2.5 rounded-xl border border-input bg-background/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all placeholder:text-muted-foreground/50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2 text-foreground/80">
            <Briefcase className="w-4 h-4 text-[var(--color-accent-base)]" />
            Empresa
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Ej: NR Labs Tech"
            className="w-full px-4 py-2.5 rounded-xl border border-input bg-background/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all placeholder:text-muted-foreground/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2 text-foreground/80">
          <MessageSquare className="w-4 h-4 text-[var(--color-accent-base)]" />
          Tono de Voz
        </label>
        <div className="relative">
          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-input bg-background/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none appearance-none transition-all"
          >
            <option value="professional">Profesional y Ejecutivo</option>
            <option value="friendly">Amigable y Cercano</option>
            <option value="humorous">Humorístico (TikTok Style)</option>
            <option value="technical">Técnico y Preciso</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">
          Rol y Objetivo Principal
        </label>
        <textarea
          name="objective"
          value={formData.objective}
          onChange={handleChange}
          rows={4}
          placeholder="Describe detalladamente qué debe hacer el agente, cómo debe saludar y cuáles son sus límites..."
          className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all resize-none placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="flex items-center gap-2 px-8 py-3 bg-[var(--color-accent-base)] text-white font-semibold rounded-xl hover:opacity-90 shadow-lg shadow-[var(--color-accent-base)]/25 active:scale-[0.98] transition-all"
        >
          <Save className="w-5 h-5" />
          Guardar Configuración
        </button>
      </div>
    </form>
  );
};

export default AgentConfigForm;
