import React, { useState } from 'react';
import { 
  MessageSquare, 
  ShoppingCart, 
  Truck, 
  Copy, 
  Check, 
  Globe,
  Info,
  Smartphone,
  ShieldCheck,
  Zap,
  User,
  Lock
} from 'lucide-react';

const IntegrationsManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'channels' | 'ecommerce' | 'logistics'>('channels');
  const [copied, setCopied] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<'zenvia' | 'whatsapp' | null>(null);

  const webhookUrl = "https://n8n.tu-server.com/webhook/xxxx";
  const tenantId = "NRL-7742-ZNV-2026";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'channels', label: 'Canales de Despliegue', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'logistics', label: 'Logística', icon: <Truck className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-2 md:p-6 space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Integraciones</h1>
        <p className="text-slate-500 dark:text-slate-400">Gestiona las conexiones estratégicas de tu ecosistema de IA.</p>
      </header>

      {/* Tabs Navigation */}
      <div className="flex p-1 space-x-1 bg-slate-100 dark:bg-slate-900/50 backdrop-blur-xl rounded-xl border border-slate-200 dark:border-white/10 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id 
                ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm dark:shadow-lg border border-slate-200 dark:border-white/10' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {activeTab === 'channels' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Zenvia Card */}
                <div 
                  onClick={() => setSelectedChannel('zenvia')}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group ${
                    selectedChannel === 'zenvia' 
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-500/10' 
                      : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-blue-400/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl transition-colors ${selectedChannel === 'zenvia' ? 'bg-blue-500 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'}`}>
                      <Globe className="w-8 h-8" />
                    </div>
                    {selectedChannel === 'zenvia' && <Check className="w-6 h-6 text-blue-500 animate-in zoom-in" />}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Zenvia Enterprise</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    Infraestructura robusta para despliegues masivos multi-canal (WhatsApp, SMS, Email).
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    <ShieldCheck className="w-4 h-4" />
                    SLA Garantizado 99.9%
                  </div>
                </div>

                {/* WhatsApp Nativo Card */}
                <div 
                  onClick={() => setSelectedChannel('whatsapp')}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group ${
                    selectedChannel === 'whatsapp' 
                      ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-500/10' 
                      : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-emerald-400/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl transition-colors ${selectedChannel === 'whatsapp' ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'}`}>
                      <Smartphone className="w-8 h-8" />
                    </div>
                    {selectedChannel === 'whatsapp' && <Check className="w-6 h-6 text-emerald-500 animate-in zoom-in" />}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">WhatsApp Cloud API</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    Conexión directa con Meta para una experiencia nativa y de alta velocidad.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    <Zap className="w-4 h-4" />
                    Baja Latencia
                  </div>
                </div>
             </div>

             {/* B2B Copy / Selection Details */}
             <div className="animate-in fade-in slide-in-from-top-2 duration-500">
               {selectedChannel === 'zenvia' && (
                 <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 space-y-4">
                   <div className="flex items-start gap-4">
                     <div className="p-2 bg-blue-500 rounded-lg text-white">
                       <Info className="w-5 h-5" />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100">Instrucciones de Aprovisionamiento</h4>
                       <p className="text-blue-800/80 dark:text-blue-300/80 text-sm mt-1">
                         Tu infraestructura LLM está lista. Envía este Tenant ID a tu ejecutivo de cuenta de NR Labs para que completemos el aprovisionamiento en tu instancia de Zenvia (SLA: 24hs).
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex flex-col md:flex-row gap-3 mt-4">
                     <div className="flex-1 relative group">
                        <label className="absolute -top-2 left-3 px-1 bg-blue-50 dark:bg-[#1a202c] text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Tenant ID</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={tenantId}
                          className="w-full bg-white dark:bg-black/40 border border-blue-300 dark:border-blue-800/50 rounded-xl px-4 py-4 text-blue-900 dark:text-white font-mono text-sm outline-none shadow-inner"
                        />
                        <button 
                          onClick={() => copyToClipboard(tenantId)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-blue-100 dark:hover:bg-blue-800/50 rounded-lg transition-colors text-blue-600 dark:text-blue-400"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                     </div>
                     <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                       Contactar Ejecutivo
                     </button>
                   </div>
                 </div>
               )}

               {selectedChannel === 'whatsapp' && (
                 <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-500 rounded-lg text-white">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">Onboarding Técnico en Proceso</h4>
                        <p className="text-emerald-800/80 dark:text-emerald-300/80 text-sm mt-1 leading-relaxed">
                          Nuestro equipo de onboarding técnico se pondrá en contacto para verificar tu Meta Business Manager y configurar el Webhook en tu línea oficial. 
                          <br />
                          <span className="font-semibold mt-2 block italic text-emerald-700 dark:text-emerald-400 underline decoration-emerald-500/30">
                            Asegúrate de tener acceso de administrador a tu Business Manager de Facebook.
                          </span>
                        </p>
                      </div>
                    </div>
                 </div>
               )}

               {!selectedChannel && (
                 <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-3xl text-slate-400">
                    <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                    <p className="text-sm font-medium">Selecciona un canal para ver los detalles de conexión</p>
                 </div>
               )}
             </div>

             {/* Webhook Section */}
             <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-inner">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Webhook Endpoint (n8n)</label>
                    <p className="text-xs text-slate-400 italic">Usa esta URL para conectar tus flujos de automatización externos.</p>
                  </div>
                  <div className="flex-1 flex gap-2 max-w-xl">
                    <input 
                      type="text" 
                      readOnly 
                      value={webhookUrl}
                      className="flex-1 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-700 dark:text-slate-300 text-sm font-mono focus:outline-none"
                    />
                    <button 
                      onClick={() => copyToClipboard(webhookUrl)}
                      className="px-4 py-3 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl transition-all flex items-center space-x-2 text-slate-700 dark:text-white"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      <span className="text-xs font-bold">{copied ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'ecommerce' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* WooCommerce */}
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-[#96588a]/10 hover:border-[#96588a]/50 hover:shadow-xl hover:shadow-[#96588a]/10 transition-all duration-500 group">
                <div className="mb-6 flex justify-between items-center">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#96588a]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.147 16.892c-.108.318-.423.518-.75.518-.08 0-.161-.012-.24-.038-1.554-.51-3.235-.77-4.996-.77-1.42 0-2.793.17-4.08.5-.327.085-.664-.11-.752-.437-.087-.327.11-.664.437-.752 1.417-.363 2.923-.55 4.475-.55 1.636 0 3.195.207 4.634.615.318.087.514.423.422.762zM21.24 12c0 5.105-4.136 9.24-9.24 9.24S2.76 17.105 2.76 12 6.895 2.76 12 2.76 21.24 6.895 21.24 12zM12 4.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm.038 12.02c-1.353 0-2.65-.216-3.855-.634-.316-.11-.482-.457-.372-.773s.456-.484.773-.373c1.076.375 2.235.567 3.454.567s2.378-.192 3.454-.567c.316-.112.663.056.773.373.11.316-.056.663-.372.773-1.206.418-2.502.634-3.855.634zm4.462-5.52c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zm-6.924 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z"/>
                  </svg>
                  <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/20"></span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">WooCommerce</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Sincroniza pedidos, inventario y clientes de tu tienda WordPress.</p>
                <button className="w-full py-3 bg-[#96588a] text-white font-bold rounded-xl transition-transform active:scale-95">Vincular Tienda</button>
              </div>

              {/* Shopify */}
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-[#95bf47]/10 hover:border-[#95bf47]/50 hover:shadow-xl hover:shadow-[#95bf47]/10 transition-all duration-500 group">
                <div className="mb-6 flex justify-between items-center">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#95bf47]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.56 1.16L17.8 2.8l2.5 13.91s-.08.13-.1.17c-.45.91-1.37 1.54-2.43 1.54a2.8 2.8 0 01-2.73-2.13l-1.04-5.22h-3.9l-1.04 5.22a2.8 2.8 0 01-2.73 2.13c-1.06 0-1.98-.63-2.43-1.54l-.1-.17L6.2 2.8l5.24-1.64h1.12zM9.54 11.02h4.92l-.58-2.9h-3.76l-.58 2.9zm5.51-5.18h-6.1l.36 1.8h5.38l.36-1.8zm3.08-1l-3.23-1H9.1l-3.23 1 1.62 8.08c.11.52.56.9 1.1.9h6.82c.54 0 .99-.38 1.1-.9l1.62-8.08zm-6.13 13.62c2.4 0 4.36 1.96 4.36 4.36 0 2.4-1.96 4.36-4.36 4.36-2.4 0-4.36-1.96-4.36-4.36 0-2.4 1.96-4.36 4.36-4.36z"/>
                  </svg>
                  <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/20"></span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Shopify</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Integración completa con Shopify para gestión de ventas automáticas.</p>
                <button className="w-full py-3 bg-[#95bf47] text-white font-bold rounded-xl transition-transform active:scale-95">Vincular Tienda</button>
              </div>

              {/* MercadoLibre */}
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-[#fff159]/20 hover:border-[#fff159] hover:shadow-xl hover:shadow-[#fff159]/10 transition-all duration-500 group">
                <div className="mb-6 flex justify-between items-center">
                  <div className="w-12 h-12 bg-[#fff159] rounded-xl flex items-center justify-center p-1 shadow-sm">
                    <svg viewBox="0 0 48 48" className="w-full h-full fill-[#2d3277]" xmlns="http://www.w3.org/2000/svg">
                       <path d="M41.4 13.5l-6.7-6.7c-1.2-1.2-3.2-1.2-4.4 0l-12 12c-1.2 1.2-1.2 3.2 0 4.4l6.7 6.7c.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9l12-12c1.2-1.2 1.2-3.2 0-4.4z"/>
                       <path d="M12.6 34.5l-6.7-6.7c-1.2-1.2-1.2-3.2 0-4.4l12-12c1.2-1.2 3.2-1.2 4.4 0l6.7 6.7c.6.6.9 1.4.9 2.2s-.3 1.6-.9 2.2l-12 12c-1.2 1.2-3.2 1.2-4.4 0z"/>
                    </svg>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/20"></span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">MercadoLibre</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Conecta tus publicaciones y ventas de Meli con el ecosistema IA.</p>
                <button className="w-full py-3 bg-[#fff159] text-[#2d3277] font-bold rounded-xl transition-transform active:scale-95">Vincular Cuenta</button>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
               <div className="relative z-10 space-y-4 flex-1">
                 <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs">
                   <ShieldCheck className="w-4 h-4" />
                   Aprovisionamiento B2B NR Labs
                 </div>
                 <h4 className="text-2xl font-bold">Inteligencia en tu Cadena de Suministro</h4>
                 <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                   Configura reglas de stock crítico y reabastecimiento directo con proveedores integrados para mantener tu operación siempre activa sin intervención manual.
                 </p>
               </div>
               <div className="relative z-10 grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                   <div className="text-xl font-bold text-blue-400">0%</div>
                   <div className="text-[10px] text-slate-500 uppercase font-bold mt-1">Quiebre Stock</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                   <div className="text-xl font-bold text-emerald-400">24/7</div>
                   <div className="text-[10px] text-slate-500 uppercase font-bold mt-1">Automatizado</div>
                 </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'logistics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-300">
            {/* Andreani */}
            <div className="p-10 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 hover:bg-white dark:hover:bg-blue-500/5 transition-all duration-500 group">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-[#004b93] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#004b93]/30 group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl font-bold italic tracking-tighter">A</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#004b93] dark:text-blue-400 leading-none">Andreani</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Logística Estratégica</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Usuario Empresa
                  </label>
                  <input 
                    type="text" 
                    placeholder="empresa_admin"
                    className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white text-sm focus:ring-2 ring-blue-500/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5" /> Password
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white text-sm focus:ring-2 ring-blue-500/20 outline-none transition-all"
                  />
                </div>
                <button className="w-full mt-6 py-4 bg-[#004b93] hover:bg-[#003d7a] text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                  <Check className="w-5 h-5" /> Autenticar Andreani
                </button>
              </div>
            </div>

            {/* OCA */}
            <div className="p-10 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 hover:bg-white dark:hover:bg-orange-500/5 transition-all duration-500 group">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-[#f6891f] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#f6891f]/30 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-black italic">OCA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#f6891f] leading-none">OCA</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Envíos Corporativos</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Nro Cliente OCA
                  </label>
                  <input 
                    type="text" 
                    placeholder="C-10294-X"
                    className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white text-sm focus:ring-2 ring-orange-500/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5" /> Token API
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••••••••••"
                    className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white text-sm focus:ring-2 ring-orange-500/20 outline-none transition-all"
                  />
                </div>
                <button className="w-full mt-6 py-4 bg-[#f6891f] hover:bg-[#e67a15] text-white font-bold rounded-xl transition-all shadow-xl shadow-orange-900/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                  <Check className="w-5 h-5" /> Vincular OCA
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationsManager;
