import React, { useState } from 'react';
import { 
  Brain, 
  Truck, 
  ShoppingCart, 
  MessageSquare, 
  Copy, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Briefcase, 
  ChevronDown,
  ShieldCheck,
  Globe,
  Zap,
  ExternalLink,
  MessageCircle,
  Loader2,
  Check
} from 'lucide-react';
import { SiShopify, SiWoocommerce, SiWhatsapp } from '@icons-pack/react-simple-icons';

// --- Sub-components for better organization ---

const FeedbackMessage = ({ type, message }: { type: 'success' | 'pending', message: string }) => (
  <div className={`mt-4 p-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-1 duration-300 ${
    type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-500' : 'bg-amber-500/10 border border-amber-500/20 text-amber-500'
  }`}>
    {type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
    <span className="text-sm font-medium">{message}</span>
  </div>
);

const AgentConfigForm: React.FC = () => {
  // --- Module 1: Brain State ---
  const [brainData, setBrainData] = useState({
    name: '',
    company: '',
    tone: 'professional',
    description: ''
  });
  const [brainStatus, setBrainStatus] = useState<'idle' | 'saving' | 'success'>('idle');

  const handleBrainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBrainStatus('saving');
    setTimeout(() => {
      setBrainStatus('success');
      setTimeout(() => setBrainStatus('idle'), 3000);
    }, 1000);
  };

  // --- Module 2: Logistics State ---
  const [logisticsData, setLogisticsData] = useState({
    carrier: 'none',
    user: '',
    pass: ''
  });
  const [logisticsStatus, setLogisticsStatus] = useState<'idle' | 'saving' | 'success'>('idle');

  const handleLogisticsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLogisticsStatus('saving');
    setTimeout(() => {
      setLogisticsStatus('success');
      setTimeout(() => setLogisticsStatus('idle'), 3000);
    }, 1000);
  };

  // --- Module 3: E-commerce State ---
  const [ecomData, setEcomData] = useState({
    platform: 'none',
    url: '',
    token: ''
  });
  const [ecomStatus, setEcomStatus] = useState<'idle' | 'saving' | 'pending'>('idle');

  const handleEcomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEcomStatus('saving');
    setTimeout(() => {
      setEcomStatus('pending');
      // We keep pending as per requirement (Demora 24hs)
    }, 1500);
  };

  // --- Module 4: Channels State ---
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const generateWebhook = () => {
    setWebhookUrl(`https://api.nrlabs.com/webhook/tenant-${Math.floor(Math.random() * 10000)}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(webhookUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Módulo: Cerebro y Personalidad (⚡ Instantáneo) */}
      <section className="glass-card bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-[var(--color-accent-base)]/10">
            <Brain className="w-5 h-5 text-[var(--color-accent-base)]" />
          </div>
          <div>
            <h3 className="font-bold text-[var(--foreground)]">Cerebro y Personalidad</h3>
            <p className="text-xs text-[var(--muted-foreground)]">⚡ Configuración en tiempo real</p>
          </div>
        </div>

        <form onSubmit={handleBrainSubmit} className="space-y-4 flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Nombre</label>
              <input 
                type="text" 
                placeholder="Sofia"
                value={brainData.name}
                onChange={(e) => setBrainData({...brainData, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Empresa</label>
              <input 
                type="text" 
                placeholder="NR Labs"
                value={brainData.company}
                onChange={(e) => setBrainData({...brainData, company: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Tono de Voz</label>
            <div className="relative">
              <select 
                value={brainData.tone}
                onChange={(e) => setBrainData({...brainData, tone: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none appearance-none transition-all"
              >
                <option value="professional">Profesional y Ejecutivo</option>
                <option value="friendly">Amigable y Cercano</option>
                <option value="direct">Directo y Conciso</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Descripción</label>
            <textarea 
              rows={3}
              placeholder="¿Qué hace tu empresa?"
              value={brainData.description}
              onChange={(e) => setBrainData({...brainData, description: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none transition-all resize-none"
            />
          </div>

          <button 
            type="submit"
            disabled={brainStatus === 'saving'}
            className="w-full py-2.5 bg-[var(--color-accent-base)] text-white text-sm font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            {brainStatus === 'saving' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
            Actualizar Cerebro
          </button>
        </form>

        {brainStatus === 'success' && (
          <FeedbackMessage type="success" message="✅ Personalidad actualizada en tiempo real." />
        )}
      </section>

      {/* 2. Módulo: Logística y Cotizadores (⚡ Instantáneo) */}
      <section className="glass-card bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <Truck className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <h3 className="font-bold text-[var(--foreground)]">Logística y Cotizadores</h3>
            <p className="text-xs text-[var(--muted-foreground)]">⚡ Conexión directa APIs</p>
          </div>
        </div>

        <form onSubmit={handleLogisticsSubmit} className="space-y-6 flex-1">
          <div className="grid grid-cols-2 gap-3">
            <button 
              type="button"
              onClick={() => setLogisticsData({...logisticsData, carrier: 'andreani'})}
              className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                logisticsData.carrier === 'andreani' ? 'border-[#E3000F] bg-[#E3000F]/5' : 'border-[var(--border)] bg-[var(--background)]'
              }`}
            >
              <img src="https://ps.w.org/andreani-shipping/assets/icon-128x128.png?rev=3429256" alt="Andreani" className="h-6 object-contain" />
              <span className="text-[10px] font-bold">ANDREANI</span>
            </button>
            <button 
              type="button"
              onClick={() => setLogisticsData({...logisticsData, carrier: 'oca'})}
              className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                logisticsData.carrier === 'oca' ? 'border-[#71277E] bg-[#71277E]/5' : 'border-[var(--border)] bg-[var(--background)]'
              }`}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_OCA_25.png" alt="OCA" className="h-6 object-contain" />
              <span className="text-[10px] font-bold">OCA</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Usuario / CUIT</label>
              <input 
                type="text" 
                placeholder="Ingresar credencial..."
                value={logisticsData.user}
                onChange={(e) => setLogisticsData({...logisticsData, user: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Contraseña</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={logisticsData.pass}
                onChange={(e) => setLogisticsData({...logisticsData, pass: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={logisticsStatus === 'saving'}
            className="w-full py-2.5 bg-[var(--color-accent-base)] text-white text-sm font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-auto"
          >
            {logisticsStatus === 'saving' ? <Loader2 className="w-4 h-4 animate-spin" /> : <ExternalLink className="w-4 h-4" />}
            Conectar APIs
          </button>
        </form>

        {logisticsStatus === 'success' && (
          <FeedbackMessage type="success" message="✅ Cotización en tiempo real activa." />
        )}
      </section>

      {/* 3. Módulo: Integraciones E-commerce (⏳ Aprovisionamiento B2B) */}
      <section className="glass-card bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <ShoppingCart className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-bold text-[var(--foreground)]">Integraciones E-commerce</h3>
            <p className="text-xs text-[var(--muted-foreground)]">⏳ Aprovisionamiento B2B</p>
          </div>
        </div>

        <div className="mb-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-blue-700 dark:text-blue-300 leading-tight">
            <span className="font-bold">Aprovisionamiento Seguro</span> - La conexión requiere una instancia aislada. El proceso demora un máximo de 24hs.
          </p>
        </div>

        <form onSubmit={handleEcomSubmit} className="space-y-4 flex-1">
          <div className="flex gap-4 mb-4">
            <button 
              type="button"
              onClick={() => setEcomData({...ecomData, platform: 'shopify'})}
              className={`flex-1 p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                ecomData.platform === 'shopify' ? 'border-[#95BF47] bg-[#95BF47]/5' : 'border-[var(--border)] bg-[var(--background)]'
              }`}
            >
              <SiShopify className={`w-5 h-5 ${ecomData.platform === 'shopify' ? 'text-[#95BF47]' : 'text-[var(--muted-foreground)]'}`} />
              <span className="text-xs font-bold">Shopify</span>
            </button>
            <button 
              type="button"
              onClick={() => setEcomData({...ecomData, platform: 'woocommerce'})}
              className={`flex-1 p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                ecomData.platform === 'woocommerce' ? 'border-[#96588A] bg-[#96588A]/5' : 'border-[var(--border)] bg-[var(--background)]'
              }`}
            >
              <SiWoocommerce className={`w-8 h-8 ${ecomData.platform === 'woocommerce' ? 'text-[#96588A]' : 'text-[var(--muted-foreground)]'}`} />
            </button>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Store URL</label>
              <input 
                type="text" 
                placeholder="https://tienda.com"
                value={ecomData.url}
                onChange={(e) => setEcomData({...ecomData, url: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Admin Token / Key</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={ecomData.token}
                onChange={(e) => setEcomData({...ecomData, token: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={ecomStatus === 'saving' || ecomStatus === 'pending'}
            className="w-full py-2.5 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-sm font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-auto"
          >
            {ecomStatus === 'saving' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Clock className="w-4 h-4" />}
            Solicitar Conexión Segura
          </button>
        </form>

        {ecomStatus === 'pending' && (
          <FeedbackMessage type="pending" message="⏳ Credenciales recibidas. Equipo de ingeniería asignado." />
        )}
      </section>

      {/* 4. Módulo: Canales de Despliegue (🔗 Setup Técnico) */}
      <section className="glass-card bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-600/10">
            <Globe className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-[var(--foreground)]">Canales de Despliegue</h3>
            <p className="text-xs text-[var(--muted-foreground)]">🔗 Configuración Técnica</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] flex flex-col items-center gap-2 opacity-60">
            <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
            <span className="text-[10px] font-bold">WHATSAPP</span>
          </div>
          <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] flex flex-col items-center gap-2 opacity-60">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            <span className="text-[10px] font-bold">ZENVIA</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
            Genera un endpoint de conexión para integrar NR Labs en tus flujos de Zenvia o WhatsApp Cloud API.
          </p>

          {!webhookUrl ? (
            <button 
              onClick={generateWebhook}
              className="w-full py-3 border-2 border-dashed border-[var(--border)] rounded-xl text-xs font-bold text-[var(--muted-foreground)] hover:border-[var(--color-accent-base)] hover:text-[var(--color-accent-base)] transition-all flex flex-col items-center gap-2 group"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Generar Credenciales de Conexión
            </button>
          ) : (
            <div className="space-y-3 animate-in zoom-in-95 duration-300">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-bold text-[var(--muted-foreground)] ml-1">Webhook URL</label>
                <div className="flex gap-2">
                  <div className="flex-1 px-3 py-2 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-[11px] font-mono text-[var(--foreground)] truncate">
                    {webhookUrl}
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className={`p-2 rounded-lg border transition-all ${
                      isCopied ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-[var(--background)] border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)]'
                    }`}
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-amber-500 bg-amber-500/10 p-2 rounded-md border border-amber-500/20">
                ⚠️ Copia este Webhook a tu consola de Zenvia para activar el agente.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
          <span className="text-[10px] text-[var(--muted-foreground)]">Seguridad: TLS 1.3 Active</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold text-emerald-500">READY</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AgentConfigForm;
