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

const IntegrationsManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'channels' | 'ecommerce' | 'logistics'>('channels');
  const [copied, setCopied] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<'zenvia' | 'whatsapp' | null>(null);
  
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

  return (
    <div className="w-full max-w-6xl mx-auto p-2 md:p-6 space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">Integraciones</h1>
        <p className="text-[var(--muted-foreground)]">Gestiona las conexiones estratégicas de tu ecosistema de IA.</p>
      </header>

      {/* Tabs Navigation */}
      <div className="flex p-1 space-x-1 bg-[var(--muted)] backdrop-blur-xl rounded-xl border border-[var(--border)] w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
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
          </div>
        )}

        {activeTab === 'ecommerce' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* WooCommerce */}
              <div 
                onClick={() => toggleEcommerce('has_woo')}
                className={`p-8 rounded-3xl border transition-all duration-500 group cursor-pointer ${
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
                <p className="text-[var(--muted-foreground)] text-sm mb-6">Sincroniza pedidos, inventario y clientes de tu tienda WordPress.</p>
                <button className={`w-full py-3 font-bold rounded-xl transition-all active:scale-95 ${ecommerce.has_woo ? 'bg-[#873EFF] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>
                  {ecommerce.has_woo ? 'Vincular Tienda' : 'Seleccionar'}
                </button>
              </div>

              {/* Shopify */}
              <div 
                onClick={() => toggleEcommerce('has_shopify')}
                className={`p-8 rounded-3xl border transition-all duration-500 group cursor-pointer ${
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
                <p className="text-[var(--muted-foreground)] text-sm mb-6">Integración completa con Shopify para gestión de ventas automáticas.</p>
                <button className={`w-full py-3 font-bold rounded-xl transition-all active:scale-95 ${ecommerce.has_shopify ? 'bg-[#95BF47] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>
                  {ecommerce.has_shopify ? 'Vincular Tienda' : 'Seleccionar'}
                </button>
              </div>

              {/* MercadoLibre */}
              <div 
                onClick={() => toggleEcommerce('has_meli')}
                className={`p-8 rounded-3xl border transition-all duration-500 group cursor-pointer ${
                  ecommerce.has_meli 
                  ? 'bg-white dark:bg-[#FFE600]/10 border-[#FFE600] shadow-xl shadow-[#FFE600]/10' 
                  : 'bg-[var(--card)] border-[var(--border)] hover:border-[#FFE600]/50'
                }`}
              >
                <div className="mb-6 flex justify-between items-center">
                  <div className="w-12 h-12 bg-[#FFE600] rounded-xl flex items-center justify-center p-2 shadow-sm text-black">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Mercado Pago</title><path d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126.005-.041-.005-.072-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225c.128 0 .263.03.402.09.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928zm7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07c-.182 0-.376.032-.58.095-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258-.02-.025-.007-.066.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7.03 7.03 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57-.032 0-.065 0-.096.002-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962-.143.1-.28.203-.415.31 1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271.152 0 .297-.015.43-.044.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.122.122 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395.012.244-.106.447-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.127.127 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012c-.106-.018-.178-.048-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.128.128 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.204.204 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125c-.146 0-.287.025-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085c-.28 0-.537.08-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08c.09 0 .179-.012.266-.034.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094c.122 0 .241-.022.355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341.06 0 .118-.002.175-.01.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01c.083.017.167.026.251.026.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293-6.372 0-11.538-3.266-11.538-7.293 0-4.028 5.165-7.293 11.539-7.293 6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z"/></svg>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${ecommerce.has_meli ? 'bg-[#FFE600] border-[#FFE600]' : 'border-[var(--border)]'}`}>
                    {ecommerce.has_meli && <Check className="w-4 h-4 text-black" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">MercadoLibre</h3>
                <p className="text-[var(--muted-foreground)] text-sm mb-6">Conecta tus publicaciones y ventas de Meli con el ecosistema IA.</p>
                <button className={`w-full py-3 font-bold rounded-xl transition-all active:scale-95 ${ecommerce.has_meli ? 'bg-[#FFE600] text-black' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>
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
          </div>
        )}

        {activeTab === 'logistics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-300">
            {/* Andreani */}
            <div className="p-10 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[#E3000F]/50 hover:bg-[#E3000F]/5 transition-all duration-500 group">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-110 transition-transform p-2 border border-[var(--border)]">
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
              
              <div className="space-y-5">
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
                <button className="w-full mt-6 py-4 bg-[#E3000F] hover:bg-[#c4000d] text-white font-bold rounded-xl transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                  <Check className="w-5 h-5" /> Autenticar Andreani
                </button>
              </div>
            </div>

            {/* OCA */}
            <div className="p-10 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[#71277E]/50 hover:bg-[#71277E]/5 transition-all duration-500 group">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-110 transition-transform p-2 border border-[var(--border)]">
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

              <div className="space-y-5">
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
                <button className="w-full mt-6 py-4 bg-[#71277E] hover:bg-[#5a1f64] text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-900/20 flex items-center justify-center gap-3 active:scale-[0.98]">
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
