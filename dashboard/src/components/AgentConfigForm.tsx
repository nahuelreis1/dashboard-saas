import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles,
  ChevronDown,
  Loader2,
  CheckCircle2,
  Info,
  ShieldCheck,
  MessageSquareText,
  Building2,
  MousePointerClick
} from 'lucide-react';

/**
 * AgentConfigForm - Prototipo Funcional de NR Labs
 * Refactorizado para simplificar la configuración del "Cerebro del Agente".
 * Se eliminaron integraciones externas (movidas a Integraciones).
 */
const AgentConfigForm: React.FC = () => {
  const [agentData, setAgentData] = useState({
    name: '',
    tone: 'professional',
    company_name: '',
    company_description: '',
    company_info: '', // Sucursales, horarios, contactos
    actions: [] as string[], // Array de acciones permitidas
    custom_prompt: ''
  });

  const [status, setStatus] = useState<'idle' | 'saving' | 'success'>('idle');

  const actionOptions = [
    { id: 'continue', label: 'Continuar Conversación' },
    { id: 'escalate', label: 'Derivar a Humano' },
    { id: 'end', label: 'Finalizar Conversación' },
    { id: 'survey', label: 'Encuesta de Satisfacción' },
    { id: 'quote', label: 'Cotizar Presupuesto' },
  ];

  const handleActionToggle = (actionId: string) => {
    setAgentData(prev => ({
      ...prev,
      actions: prev.actions.includes(actionId)
        ? prev.actions.filter(id => id !== actionId)
        : [...prev.actions, actionId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('saving');
    
    // Simulación de actualización de cerebro
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto pb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      <div className="flex items-center gap-5 mb-10 ml-2">
        <div className="p-4 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/20 ring-4 ring-indigo-500/10">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-black text-[var(--foreground)] tracking-tight">Cerebro del Agente</h1>
          <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-[0.3em] font-black opacity-60">Configuración Central de Inteligencia</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* IDENTIDAD Y TONO */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 relative overflow-hidden transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Identidad & Tono</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Nombre del Agente</label>
              <input 
                type="text" 
                placeholder="Ej: Sofía"
                value={agentData.name}
                onChange={(e) => setAgentData({...agentData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all shadow-sm"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Tono de Comunicación</label>
              <div className="relative">
                <select 
                  value={agentData.tone}
                  onChange={(e) => setAgentData({...agentData, tone: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none appearance-none transition-all shadow-sm cursor-pointer"
                >
                  <option value="professional">Profesional y Corporativo</option>
                  <option value="friendly">Cercano y Entusiasta</option>
                  <option value="direct">Directo y Resolutivo</option>
                  <option value="luxury">Sofisticado y Premium</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* DATOS DE LA EMPRESA */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Datos de la Empresa</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Nombre de la Empresa</label>
              <input 
                type="text" 
                placeholder="Ej: NR Labs AI"
                value={agentData.company_name}
                onChange={(e) => setAgentData({...agentData, company_name: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all shadow-sm"
                required
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Descripción del Negocio</label>
              <textarea 
                rows={3}
                placeholder="Describe qué hace la empresa, productos principales..."
                value={agentData.company_description}
                onChange={(e) => setAgentData({...agentData, company_description: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
                required
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider">Información Estructurada</label>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 rounded-full">
                  <Info className="w-3 h-3 text-amber-600" />
                  <span className="text-[10px] font-black text-amber-600 uppercase">Recomendado</span>
                </div>
              </div>
              <textarea 
                rows={4}
                placeholder="Sucursales, horarios de atención, teléfonos de contacto, redes sociales..."
                value={agentData.company_info}
                onChange={(e) => setAgentData({...agentData, company_info: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* ACCIONES PERMITIDAS */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <MousePointerClick className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Acciones Permitidas</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {actionOptions.map((action) => (
              <label 
                key={action.id}
                className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  agentData.actions.includes(action.id)
                    ? 'border-indigo-500 bg-indigo-500/5 shadow-md'
                    : 'border-[var(--border)] bg-[var(--background)] hover:border-indigo-500/30'
                }`}
              >
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                  agentData.actions.includes(action.id) ? 'bg-indigo-500 border-indigo-500' : 'border-[var(--muted-foreground)]/30'
                }`}>
                  {agentData.actions.includes(action.id) && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={agentData.actions.includes(action.id)}
                  onChange={() => handleActionToggle(action.id)}
                />
                <span className={`text-sm font-bold ${agentData.actions.includes(action.id) ? 'text-indigo-600' : 'text-[var(--muted-foreground)]'}`}>
                  {action.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* INSTRUCCIONES ADICIONALES (PROMPT) */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquareText className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Instrucciones Adicionales</h3>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
              <p className="text-xs text-indigo-600/80 font-bold leading-relaxed">
                Este es el "Custom Prompt" maestro. Define aquí reglas de comportamiento específicas, frases prohibidas o flujos lógicos complejos que el agente debe seguir obligatoriamente.
              </p>
            </div>
            
            <textarea 
              rows={10}
              placeholder="Escribe aquí las instrucciones avanzadas para el cerebro de la IA..."
              value={agentData.custom_prompt}
              onChange={(e) => setAgentData({...agentData, custom_prompt: e.target.value})}
              className="w-full px-8 py-6 rounded-[2rem] bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm font-mono"
            />
          </div>
        </div>

        {/* BOTÓN ACTUALIZAR */}
        <div className="flex justify-center pt-8">
          <button 
            type="submit"
            disabled={status === 'saving'}
            className="group relative px-20 py-6 bg-indigo-600 text-white text-base font-black rounded-2xl hover:bg-indigo-700 active:scale-[0.97] transition-all flex items-center gap-5 shadow-2xl shadow-indigo-600/40 disabled:opacity-50 overflow-hidden"
          >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
            
            {status === 'saving' ? (
              <Loader2 className="w-7 h-7 animate-spin" />
            ) : (
              <Brain className="w-7 h-7 group-hover:scale-110 transition-transform" />
            )}
            
            <span className="relative z-10">
              {status === 'saving' ? 'PROCESANDO CEREBRO...' : 'ACTUALIZAR CEREBRO'}
            </span>

            {status === 'success' && (
              <div className="absolute inset-0 bg-emerald-500 flex items-center justify-center animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="w-8 h-8 mr-3" />
                <span>CEREBRO ACTUALIZADO</span>
              </div>
            )}
          </button>
        </div>
      </form>

      {/* ESTILOS ADICIONALES PARA EL SHIMMER */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default AgentConfigForm;
