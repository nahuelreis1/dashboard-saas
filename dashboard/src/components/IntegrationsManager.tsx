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
import { SiWoocommerce, SiShopify, SiWhatsapp } from '@icons-pack/react-simple-icons';

const PendingCard = () => (
  <div className="p-8 rounded-3xl bg-amber-500/10 border-2 border-amber-500 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500 shadow-lg shadow-amber-500/10">
    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center animate-pulse">
      <span className="text-3xl">⏳</span>
    </div>
    <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400">Aprovisionamiento en curso</h3>
    <p className="text-amber-700/90 dark:text-amber-300/90 max-w-md font-medium">
      Aprovisionamiento en curso por nuestro equipo de ingeniería. SLA: 24hs
    </p>
  </div>
);

const ActiveCard = ({ children }: { children: React.ReactNode }) => (
  <div className="p-8 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500 backdrop-blur-xl space-y-6 animate-in fade-in zoom-in duration-500 shadow-lg shadow-emerald-500/10">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
        <span className="text-3xl">🟢</span>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Conexión Activa y Sincronizada</h3>
        <p className="text-emerald-700/90 dark:text-emerald-300/90 font-medium">
          Tu integración está operando correctamente en producción.
        </p>
      </div>
    </div>
    <div className="p-6 bg-[var(--background)]/80 backdrop-blur-sm rounded-2xl border border-[var(--border)] grid gap-4 text-sm shadow-inner">
       {children}
    </div>
  </div>
);

const IntegrationsManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'channels' | 'ecommerce' | 'logistics'>('channels');
  const [copied, setCopied] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<'zenvia' | 'whatsapp' | null>(null);
  
  // Status states for each tab
  const [channelStatus, setChannelStatus] = useState<'unconfigured' | 'pending' | 'active'>('unconfigured');
  const [ecomStatus, setEcomStatus] = useState<'unconfigured' | 'pending' | 'active'>('unconfigured');
  const [logisticsStatus, setLogisticsStatus] = useState<'unconfigured' | 'pending' | 'active'>('unconfigured');
  
  // E-commerce state as checkboxes
  const [ecommerce, setEcommerce] = useState({
    has_woo: false,
    has_shopify: false,
    has_meli: false
  });

  const webhookUrl = "https://n8n.tu-server.com/webhook/xxxx";
  const tenantId = "NRL-7742-ZNV-2026";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleEcommerce = (key: keyof typeof ecommerce) => {
    setEcommerce(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = [
    { id: 'channels', label: 'Canales de Despliegue', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'logistics', label: 'Logística', icon: <Truck className="w-4 h-4" /> },
  ];

  const DevToggle = ({ status, setStatus, label }: { status: string, setStatus: (s: any) => void, label: string }) => (
    <div className="flex items-center gap-1 bg-[var(--card)] p-1 rounded-lg border border-[var(--border)] text-xs opacity-50 hover:opacity-100 transition-opacity">
      <span className="px-2 font-mono text-[10px] text-[var(--muted-foreground)] hidden sm:inline">{label}:</span>
      {(['unconfigured', 'pending', 'active'] as const).map(s => (
        <button 
          key={s}
          onClick={() => setStatus(s)}
          className={`px-2 py-1 rounded-md capitalize ${status === s ? 'bg-[var(--foreground)] text-[var(--background)] font-bold' : 'hover:bg-[var(--muted)]'}`}
        >
          {s.slice(0, 3)}
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-2 md:p-6 space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 space-y-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">Integraciones</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Gestiona las conexiones estratégicas de tu ecosistema de IA.</p>
        </div>
        <div className="flex items-center gap-2">
          {activeTab === 'channels' && <DevToggle status={channelStatus} setStatus={setChannelStatus} label="Channels" />}
          {activeTab === 'ecommerce' && <DevToggle status={ecomStatus} setStatus={setEcomStatus} label="E-commerce" />}
          {activeTab === 'logistics' && <DevToggle status={logisticsStatus} setStatus={setLogisticsStatus} label="Logistics" />}
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="flex p-1 space-x-1 bg-[var(--muted)] backdrop-blur-xl rounded-xl border border-[var(--border)] w-fit overflow-x-auto max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-[var(--card)] text-[var(--foreground)] shadow-sm border border-[var(--border)]' 
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)]/50'
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
            {channelStatus === 'pending' && <PendingCard />}
            
            {channelStatus === 'active' && (
              <ActiveCard>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Canal Activo</span>
                    <span className="font-bold text-[var(--foreground)]">
                      {selectedChannel === 'whatsapp' ? 'WhatsApp Cloud API' : 'Zenvia Enterprise'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Tenant ID</span>
                    <span className="font-mono text-[var(--foreground)]">{tenantId}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Webhook Registrado</span>
                    <span className="font-mono text-[var(--foreground)]">{webhookUrl}</span>
                  </div>
                </div>
              </ActiveCard>
            )}

            {channelStatus === 'unconfigured' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Zenvia Card */}
                  <div 
                    onClick={() => setSelectedChannel('zenvia')}
                    className={`relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group ${
                      selectedChannel === 'zenvia' 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-[var(--border)] bg-[var(--card)] hover:border-blue-400/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-1 rounded-2xl transition-colors ${selectedChannel === 'zenvia' ? 'bg-blue-500' : 'bg-[var(--muted)]'}`}>
                        <img 
                          src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50" 
                          alt="Zenvia"
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      {selectedChannel === 'zenvia' && <Check className="w-6 h-6 text-blue-500 animate-in zoom-in" />}
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Zenvia Enterprise</h3>
                    <p className="text-[var(--muted-foreground)] text-sm mb-4 leading-relaxed">
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
                        ? 'border-emerald-500 bg-emerald-500/10' 
                        : 'border-[var(--border)] bg-[var(--card)] hover:border-emerald-400/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl transition-colors ${selectedChannel === 'whatsapp' ? 'bg-emerald-500 text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>
                        <SiWhatsapp size={32} />
                      </div>
                      {selectedChannel === 'whatsapp' && <Check className="w-6 h-6 text-emerald-500 animate-in zoom-in" />}
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">WhatsApp Cloud API</h3>
                    <p className="text-[var(--muted-foreground)] text-sm mb-4 leading-relaxed">
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
                        <button 
                          onClick={() => setChannelStatus('pending')}
                          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                        >
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
                          <button 
                            onClick={() => setChannelStatus('pending')} 
                            className="mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
                          >
                            Solicitar Aprovisionamiento
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {!selectedChannel && (
                    <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-[var(--border)] rounded-3xl text-[var(--muted-foreground)]">
                      <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                      <p className="text-sm font-medium">Selecciona un canal para ver los detalles de conexión</p>
                    </div>
                  )}
                </div>

                {/* Webhook Section */}
                <div className="p-6 rounded-3xl bg-[var(--muted)] border border-[var(--border)] shadow-inner">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest">Webhook Endpoint (n8n)</label>
                      <p className="text-xs text-[var(--muted-foreground)] opacity-70 italic">Usa esta URL para conectar tus flujos de automatización externos.</p>
                    </div>
                    <div className="flex-1 flex gap-2 max-w-xl">
                      <input 
                        type="text" 
                        readOnly 
                        value={webhookUrl}
                        className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] text-sm font-mono focus:outline-none"
                      />
                      <button 
                        onClick={() => copyToClipboard(webhookUrl)}
                        className="px-4 py-3 bg-[var(--card)] hover:bg-[var(--muted)] border border-[var(--border)] rounded-xl transition-all flex items-center space-x-2 text-[var(--foreground)]"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        <span className="text-xs font-bold">{copied ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'ecommerce' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
            {ecomStatus === 'pending' && <PendingCard />}
            
            {ecomStatus === 'active' && (
              <ActiveCard>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Tienda Vinculada</span>
                    <span className="font-bold text-[var(--foreground)]">
                      {ecommerce.has_shopify ? 'Shopify' : ecommerce.has_woo ? 'WooCommerce' : ecommerce.has_meli ? 'MercadoLibre' : 'E-commerce'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Estado de Catálogo</span>
                    <span className="font-bold text-emerald-500">Sincronizado (1,240 productos)</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">URL Tienda</span>
                    <span className="font-mono text-[var(--foreground)]">https://tienda.cliente.com</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Sincronización</span>
                    <span className="font-mono text-[var(--foreground)]">Automática (Webhook / 15 min)</span>
                  </div>
                </div>
              </ActiveCard>
            )}

            {ecomStatus === 'unconfigured' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* WooCommerce */}
                  <div 
                    onClick={() => toggleEcommerce('has_woo')}
                    className={`p-8 rounded-3xl border transition-all duration-500 group cursor-pointer flex flex-col ${
                      ecommerce.has_woo 
                      ? 'bg-white dark:bg-[#873EFF]/10 border-[#873EFF] shadow-xl shadow-[#873EFF]/10' 
                      : 'bg-[var(--card)] border-[var(--border)] hover:border-[#873EFF]/50'
                    }`}
                  >
                    <div className="mb-6 flex justify-between items-center">
                      <SiWoocommerce color="#873EFF" size={48} />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${ecommerce.has_woo ? 'bg-[#873EFF] border-[#873EFF]' : 'border-[var(--border)]'}`}>
                        {ecommerce.has_woo && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">WooCommerce</h3>
                    <p className="text-[var(--muted-foreground)] text-sm mb-6 flex-1">Sincroniza pedidos, inventario y clientes de tu tienda WordPress.</p>
                    <button 
                      onClick={(e) => {
                        if (ecommerce.has_woo) {
                          e.stopPropagation();
                          setEcomStatus('pending');
                        }
                      }}
                      className={`w-full mt-auto py-3 font-bold rounded-xl transition-all active:scale-95 ${ecommerce.has_woo ? 'bg-[#873EFF] text-white hover:bg-[#7232d6]' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}
                    >
                      {ecommerce.has_woo ? 'Vincular Tienda' : 'Seleccionar'}
                    </button>
                  </div>

                  {/* Shopify */}
                  <div 
                    onClick={() => toggleEcommerce('has_shopify')}
                    className={`p-8 rounded-3xl border transition-all duration-500 group cursor-pointer flex flex-col ${
                      ecommerce.has_shopify 
                      ? 'bg-white dark:bg-[#95BF47]/10 border-[#95BF47] shadow-xl shadow-[#95BF47]/10' 
                      : 'bg-[var(--card)] border-[var(--border)] hover:border-[#95BF47]/50'
                    }`}
                  >
                    <div className="mb-6 flex justify-between items-center">
                      <SiShopify color="#95BF47" size={48} />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${ecommerce.has_shopify ? 'bg-[#95BF47] border-[#95BF47]' : 'border-[var(--border)]'}`}>
                        {ecommerce.has_shopify && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Shopify</h3>
                    <p className="text-[var(--muted-foreground)] text-sm mb-6 flex-1">Integración completa con Shopify para gestión de ventas automáticas.</p>
                    <button 
                      onClick={(e) => {
                        if (ecommerce.has_shopify) {
                          e.stopPropagation();
                          setEcomStatus('pending');
                        }
                      }}
                      className={`w-full mt-auto py-3 font-bold rounded-xl transition-all active:scale-95 ${ecommerce.has_shopify ? 'bg-[#95BF47] text-white hover:bg-[#7ea33c]' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}
                    >
                      {ecommerce.has_shopify ? 'Vincular Tienda' : 'Seleccionar'}
                    </button>
                  </div>

                  {/* MercadoLibre */}
                  <div 
                    onClick={() => toggleEcommerce('has_meli')}
                    className={`p-8 rounded-3xl border transition-all duration-500 group cursor-pointer flex flex-col ${
                      ecommerce.has_meli 
                      ? 'bg-white dark:bg-[#FFE600]/10 border-[#FFE600] shadow-xl shadow-[#FFE600]/10' 
                      : 'bg-[var(--card)] border-[var(--border)] hover:border-[#FFE600]/50'
                    }`}
                  >
                    <div className="mb-6 flex justify-between items-center">
                      <div className="w-12 h-12 bg-transparent rounded-xl flex items-center justify-center p-2 shadow-sm">
                        <img 
                          src="https://companieslogo.com/img/orig/MELI_BIG-d1f8e207.png?t=1720244492" 
                          referrerPolicy="no-referrer" 
                          alt="MercadoLibre" 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${ecommerce.has_meli ? 'bg-[#FFE600] border-[#FFE600]' : 'border-[var(--border)]'}`}>
                        {ecommerce.has_meli && <Check className="w-4 h-4 text-black" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">MercadoLibre</h3>
                    <p className="text-[var(--muted-foreground)] text-sm mb-6 flex-1">Conecta tus publicaciones y ventas de Meli con el ecosistema IA.</p>
                    <button 
                      onClick={(e) => {
                        if (ecommerce.has_meli) {
                          e.stopPropagation();
                          setEcomStatus('pending');
                        }
                      }}
                      className={`w-full mt-auto py-3 font-bold rounded-xl transition-all active:scale-95 ${ecommerce.has_meli ? 'bg-[#FFE600] text-black hover:bg-[#e6cf00]' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}
                    >
                      {ecommerce.has_meli ? 'Vincular Cuenta' : 'Seleccionar'}
                    </button>
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
              </>
            )}
          </div>
        )}

        {activeTab === 'logistics' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
            {logisticsStatus === 'pending' && <PendingCard />}
            
            {logisticsStatus === 'active' && (
              <ActiveCard>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Proveedor Logístico</span>
                    <span className="font-bold text-[var(--foreground)]">Andreani / OCA</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Estado de API</span>
                    <span className="font-bold text-emerald-500">Online</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Tracking Automático</span>
                    <span className="font-bold text-[var(--foreground)]">Activado (Sincronización en tiempo real)</span>
                  </div>
                </div>
              </ActiveCard>
            )}

            {logisticsStatus === 'unconfigured' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Andreani */}
                <div className="p-10 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[#E3000F]/50 hover:bg-[#E3000F]/5 transition-all duration-500 group flex flex-col">
                  <div className="flex items-center space-x-6 mb-10">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-110 transition-transform p-2 border border-[var(--border)] shrink-0">
                      <img 
                        src="https://ps.w.org/andreani-shipping/assets/icon-128x128.png?rev=3429256" 
                        alt="Andreani"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#E3000F] leading-none">Andreani</h3>
                      <p className="text-[var(--muted-foreground)] text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Logística Estratégica</p>
                    </div>
                  </div>
                  
                  <div className="space-y-5 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-2">
                        <User className="w-3.5 h-3.5" /> Usuario Empresa
                      </label>
                      <input 
                        type="text" 
                        placeholder="empresa_admin"
                        className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--foreground)] text-sm focus:ring-2 ring-red-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5" /> Password
                      </label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--foreground)] text-sm focus:ring-2 ring-red-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="mt-auto pt-6">
                      <button 
                        onClick={() => setLogisticsStatus('pending')}
                        className="w-full py-4 bg-[#E3000F] hover:bg-[#c4000d] text-white font-bold rounded-xl transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                      >
                        <Check className="w-5 h-5" /> Autenticar Andreani
                      </button>
                    </div>
                  </div>
                </div>

                {/* OCA */}
                <div className="p-10 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[#71277E]/50 hover:bg-[#71277E]/5 transition-all duration-500 group flex flex-col">
                  <div className="flex items-center space-x-6 mb-10">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-110 transition-transform p-2 border border-[var(--border)] shrink-0">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_OCA_25.png" 
                        alt="OCA"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#71277E] leading-none">OCA</h3>
                      <p className="text-[var(--muted-foreground)] text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Envíos Corporativos</p>
                    </div>
                  </div>

                  <div className="space-y-5 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-2">
                        <User className="w-3.5 h-3.5" /> Nro Cliente OCA
                      </label>
                      <input 
                        type="text" 
                        placeholder="C-10294-X"
                        className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--foreground)] text-sm focus:ring-2 ring-purple-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5" /> Token API
                      </label>
                      <input 
                        type="password" 
                        placeholder="••••••••••••••••"
                        className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--foreground)] text-sm focus:ring-2 ring-purple-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="mt-auto pt-6">
                      <button 
                        onClick={() => setLogisticsStatus('pending')}
                        className="w-full py-4 bg-[#71277E] hover:bg-[#5a1f64] text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-900/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                      >
                        <Check className="w-5 h-5" /> Vincular OCA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationsManager;
