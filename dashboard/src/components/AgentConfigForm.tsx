import React, { useState } from 'react';
import { 
  Brain, 
  Truck, 
  ShoppingCart, 
  Globe,
  Zap,
  ChevronDown,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Save
} from 'lucide-react';
import { SiShopify, SiWoocommerce, SiWhatsapp } from '@icons-pack/react-simple-icons';

// --- MercadoLibre SVG Logo ---
const MercadoLibreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-11v2H9v-2h2zm4 0v2h-2v-2h2zm-4 4v2H9v-2h2zm4 0v2h-2v-2h2z" opacity=".2"/>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-1.5c-4.694 0-8.5-3.806-8.5-8.5S7.306 3.5 12 3.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z" fill="#FFE600"/>
    <path d="M15.5 10.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" fill="#333"/>
    <path d="M12 16c-2.5 0-4.5-1.5-4.5-1.5s.5-1 1-1 3.5 1.5 3.5 1.5 2.5-1.5 3-1.5 1 1 1 1-2 1.5-4.5 1.5z" fill="#333"/>
  </svg>
);

const AgentConfigForm: React.FC = () => {
  const [formData, setFormData] = useState({
    // Brain
    name: '',
    company: '',
    tone: 'professional',
    description: '',
    // Logistics
    carrier: 'none',
    logisticsUser: '',
    logisticsPass: '',
    // E-commerce
    platform: 'none',
    ecomUrl: '',
    ecomToken: '',
    mlSellerId: '',
    mlClientId: '',
    mlClientSecret: '',
  });

  const [status, setStatus] = useState<'idle' | 'saving' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('saving');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <form onSubmit={handleSubmit} className="space-y-8 pb-12">
        
        {/* --- SECCIÓN 1: Comportamiento del Agente --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-accent-base)]/10">
              <Brain className="w-5 h-5 text-[var(--color-accent-base)]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] tracking-tight">Comportamiento del Agente</h2>
              <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-widest font-semibold">⚡ Configuración Instantánea</p>
            </div>
          </div>

          <div className="glass-card bg-[var(--card)] border border-[var(--border)] p-6 rounded-2xl shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase ml-1">Nombre del Agente</label>
                <input 
                  type="text" 
                  placeholder="Ej: Sofía"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase ml-1">Nombre de la Empresa</label>
                <input 
                  type="text" 
                  placeholder="Ej: NR Labs"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase ml-1">Tono de Voz</label>
              <div className="relative">
                <select 
                  value={formData.tone}
                  onChange={(e) => setFormData({...formData, tone: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none appearance-none transition-all"
                >
                  <option value="professional">Profesional y Ejecutivo</option>
                  <option value="friendly">Amigable y Cercano</option>
                  <option value="direct">Directo y Conciso</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase ml-1">Descripción de la Empresa</label>
              <textarea 
                rows={3}
                placeholder="Describe brevemente qué hace tu empresa para que el agente tenga contexto..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none transition-all resize-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] opacity-50 my-8" />

        {/* --- SECCIÓN 2: Conexiones de Sistemas --- */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Zap className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] tracking-tight">Conexiones de Sistemas</h2>
              <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-widest font-semibold">⏳ Aprovisionamiento B2B (Hasta 24hs)</p>
            </div>
          </div>

          <div className="mb-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
              <span className="font-bold">Protocolo de Seguridad:</span> Las conexiones de E-commerce y Logística se ejecutan en instancias aisladas para garantizar la privacidad de tus datos. El proceso de aprovisionamiento puede demorar hasta 24 horas hábiles.
            </p>
          </div>

          {/* E-commerce Sub-section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 ml-1">
              <ShoppingCart className="w-4 h-4 text-emerald-500" />
              <h3 className="text-sm font-bold text-[var(--foreground)]">Plataforma de E-commerce</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                type="button"
                onClick={() => setFormData({...formData, platform: 'shopify'})}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${
                  formData.platform === 'shopify' ? 'border-[#95BF47] bg-[#95BF47]/5 shadow-sm' : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]'
                }`}
              >
                <SiShopify className={`w-8 h-8 transition-transform group-hover:scale-110 ${formData.platform === 'shopify' ? 'text-[#95BF47]' : 'text-[var(--muted-foreground)]'}`} />
                <span className="text-xs font-bold uppercase tracking-wider">Shopify</span>
              </button>
              
              <button 
                type="button"
                onClick={() => setFormData({...formData, platform: 'woocommerce'})}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${
                  formData.platform === 'woocommerce' ? 'border-[#96588A] bg-[#96588A]/5 shadow-sm' : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]'
                }`}
              >
                <SiWoocommerce className={`w-10 h-10 transition-transform group-hover:scale-110 ${formData.platform === 'woocommerce' ? 'text-[#96588A]' : 'text-[var(--muted-foreground)]'}`} />
                <span className="text-xs font-bold uppercase tracking-wider">WooCommerce</span>
              </button>

              <button 
                type="button"
                onClick={() => setFormData({...formData, platform: 'mercadolibre'})}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${
                  formData.platform === 'mercadolibre' ? 'border-[#FFE600] bg-[#FFE600]/5 shadow-sm' : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]'
                }`}
              >
                <MercadoLibreIcon className="w-10 h-10 transition-transform group-hover:scale-110" />
                <span className="text-xs font-bold uppercase tracking-wider">MercadoLibre</span>
              </button>
            </div>

            {/* Dynamic E-commerce Fields */}
            {formData.platform !== 'none' && (
              <div className="mt-4 p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)] animate-in fade-in zoom-in-95 duration-300">
                {formData.platform === 'mercadolibre' ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase">Seller ID</label>
                      <input 
                        type="text" 
                        placeholder="12345678"
                        value={formData.mlSellerId}
                        onChange={(e) => setFormData({...formData, mlSellerId: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase">Client ID</label>
                      <input 
                        type="text" 
                        placeholder="APP_USR-..."
                        value={formData.mlClientId}
                        onChange={(e) => setFormData({...formData, mlClientId: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase">Client Secret</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        value={formData.mlClientSecret}
                        onChange={(e) => setFormData({...formData, mlClientSecret: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase">Store URL</label>
                      <input 
                        type="text" 
                        placeholder="https://mitienda.com"
                        value={formData.ecomUrl}
                        onChange={(e) => setFormData({...formData, ecomUrl: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase">API Token / Key</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        value={formData.ecomToken}
                        onChange={(e) => setFormData({...formData, ecomToken: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Logistics Sub-section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 ml-1">
              <Truck className="w-4 h-4 text-orange-500" />
              <h3 className="text-sm font-bold text-[var(--foreground)]">Operador Logístico</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => setFormData({...formData, carrier: 'andreani'})}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${
                  formData.carrier === 'andreani' ? 'border-[#E3000F] bg-[#E3000F]/5 shadow-sm' : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]'
                }`}
              >
                <img src="https://ps.w.org/andreani-shipping/assets/icon-128x128.png?rev=3429256" alt="Andreani" className="h-10 object-contain transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-bold uppercase tracking-wider">ANDREANI</span>
              </button>
              
              <button 
                type="button"
                onClick={() => setFormData({...formData, carrier: 'oca'})}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${
                  formData.carrier === 'oca' ? 'border-[#71277E] bg-[#71277E]/5 shadow-sm' : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]'
                }`}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_OCA_25.png" alt="OCA" className="h-10 object-contain transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-bold uppercase tracking-wider">OCA</span>
              </button>
            </div>

            {formData.carrier !== 'none' && (
              <div className="mt-4 p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)] grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase">Usuario / CUIT</label>
                  <input 
                    type="text" 
                    placeholder="Credencial de acceso..."
                    value={formData.logisticsUser}
                    onChange={(e) => setFormData({...formData, logisticsUser: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase">Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    value={formData.logisticsPass}
                    onChange={(e) => setFormData({...formData, logisticsPass: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm focus:ring-2 focus:ring-[var(--color-accent-base)]/20 outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Channels Sub-section (Informational Cards) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 ml-1">
              <Globe className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-[var(--foreground)]">Canales Disponibles</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex items-center gap-4 group opacity-80 hover:opacity-100 transition-all">
                <div className="p-3 rounded-xl bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                  <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">WhatsApp Business</h4>
                  <p className="text-[10px] text-[var(--muted-foreground)] leading-tight mt-1">Requiere aprobación de plantilla y Meta API.</p>
                </div>
              </div>
              
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex items-center gap-4 group opacity-80 hover:opacity-100 transition-all">
                <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">Zenvia Platform</h4>
                  <p className="text-[10px] text-[var(--muted-foreground)] leading-tight mt-1">Conexión vía Webhook seguro y cifrado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- GLOBAL SUBMIT BUTTON --- */}
        <div className="sticky bottom-6 mt-12 px-6 py-4 bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)] rounded-2xl shadow-xl flex items-center justify-between gap-6 z-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-[var(--foreground)]">Configuración del Agente</p>
            <p className="text-[10px] text-[var(--muted-foreground)]">Se guardarán todos los cambios realizados.</p>
          </div>
          
          <button 
            type="submit"
            disabled={status === 'saving'}
            className="flex-1 sm:flex-none px-12 py-3 bg-[var(--color-accent-base)] text-white text-sm font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100"
          >
            {status === 'saving' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Guardando...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Guardar Configuración
              </>
            )}
          </button>
        </div>

        {/* Success Message Overlay */}
        {status === 'success' && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="bg-emerald-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              Configuración guardada correctamente
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AgentConfigForm;
