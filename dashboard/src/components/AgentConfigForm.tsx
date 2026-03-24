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
  BookOpen
} from 'lucide-react';

/**
 * AgentConfigForm - Prototipo Funcional de NR Labs
 * Refactorizado para simplificar la configuración del "Cerebro del Agente".
 * Se eliminaron integraciones externas y acciones técnicas.
 */
const AgentConfigForm: React.FC = () => {
  const [agentData, setAgentData] = useState({
    name: '',
    company_name: '',
    agent_role: '',
    tone: 'formal-rioplatense',
    format_rules: '',
    company_info: '',
    branches_info: '',
    verification_protocol: '',
    general_rules: ''
  });

  const [status, setStatus] = useState<'idle' | 'saving' | 'success'>('idle');

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
        
        {/* IDENTIDAD */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 relative overflow-hidden transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Identidad</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Nombre del Agente</label>
              <input 
                type="text" 
                placeholder="Ej: Accesa"
                value={agentData.name}
                onChange={(e) => setAgentData({...agentData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all shadow-sm"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Empresa</label>
              <input 
                type="text" 
                placeholder="Ej: Accesaniga"
                value={agentData.company_name}
                onChange={(e) => setAgentData({...agentData, company_name: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all shadow-sm"
                required
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Rol / Especialidad</label>
            <textarea 
              rows={2}
              placeholder='Ej: "Especializada en griferías, sanitarios..."'
              value={agentData.agent_role}
              onChange={(e) => setAgentData({...agentData, agent_role: e.target.value})}
              className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
              required
            />
          </div>
        </div>

        {/* ESTILO DE COMUNICACIÓN */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 relative overflow-hidden transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquareText className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Estilo de Comunicación</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Tono</label>
              <div className="relative">
                <select 
                  value={agentData.tone}
                  onChange={(e) => setAgentData({...agentData, tone: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none appearance-none transition-all shadow-sm cursor-pointer"
                >
                  <option value="formal-rioplatense">Formal Rioplatense</option>
                  <option value="amigable">Amigable y Cercano</option>
                  <option value="direct">Directo y Resolutivo</option>
                  <option value="professional">Profesional y Corporativo</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Reglas de formato</label>
              <textarea 
                rows={2}
                placeholder='Ej: "Respondé siempre en texto plano, sin markdown. Un solo párrafo."'
                value={agentData.format_rules}
                onChange={(e) => setAgentData({...agentData, format_rules: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* INFORMACIÓN DE LA EMPRESA (MEMORIA) */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Memoria del Agente</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Descripción, Rubros, Web y Emails</label>
              <textarea 
                rows={5}
                placeholder="Ingresa la información general sobre la empresa..."
                value={agentData.company_info}
                onChange={(e) => setAgentData({...agentData, company_info: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Sucursales y Horarios</label>
              <textarea 
                rows={3}
                placeholder="Direcciones, horarios de atención..."
                value={agentData.branches_info}
                onChange={(e) => setAgentData({...agentData, branches_info: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* PROTOCOLOS ESPECÍFICOS */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Protocolos Específicos</h3>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Protocolo de Verificación de Identidad</label>
            <textarea 
              rows={3}
              placeholder='Ej: "Antes de dar tracking, pedir email y cruzarlo con get_orders..."'
              value={agentData.verification_protocol}
              onChange={(e) => setAgentData({...agentData, verification_protocol: e.target.value})}
              className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
            />
          </div>
        </div>

        {/* REGLAS GENERALES */}
        <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-8 transition-all hover:shadow-indigo-500/5">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Reglas Generales</h3>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-4">
              <Info className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
              <p className="text-xs text-indigo-600/80 font-bold leading-relaxed">
                Define aquí reglas de comportamiento específicas, frases prohibidas o instrucciones adicionales.
              </p>
            </div>
            
            <textarea 
              rows={6}
              placeholder='Ej: "Siempre saludá primero, no inventes precios..."'
              value={agentData.general_rules}
              onChange={(e) => setAgentData({...agentData, general_rules: e.target.value})}
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
