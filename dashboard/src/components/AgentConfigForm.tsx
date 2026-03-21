import React, { useState } from 'react';
import { 
  Brain, 
  Truck, 
  ShoppingCart, 
  Zap,
  ChevronDown,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Save,
  Store,
  Key,
  Lock,
  MessageSquare
} from 'lucide-react';
import { SiShopify, SiWoocommerce, SiWhatsapp, SiMercadopago } from '@icons-pack/react-simple-icons';

/**
 * AgentConfigForm
 * Rediseño URGENTE siguiendo los estándares de NR Labs.
 * Separación de Cerebro y Conexiones, E-commerce múltiple y visuales impactantes.
 */
const AgentConfigForm: React.FC = () => {
  // --- Cerebro State (Comportamiento) ---
  const [cerebroData, setCerebroData] = useState({
    name: '',
    company: '',
    tone: 'professional',
    description: '',
  });

  // --- Conexiones State (Sistemas) ---
  const [conexionesData, setConexionesData] = useState({
    // E-commerce Multi-Canal
    has_woo: false,
    has_shopify: false,
    has_meli: false,
    // WooCommerce Fields
    woo_url: '',
    woo_ck: '',
    woo_cs: '',
    // Shopify Fields
    shopify_url: '',
    shopify_token: '',
    // MercadoLibre Fields
    meli_seller_id: '',
    meli_client_id: '',
    meli_client_secret: '',
    // Logística
    carrier: 'none', // 'andreani' | 'oca' | 'none'
    logisticsUser: '',
    logisticsPass: '',
  });

  const [statusCerebro, setStatusCerebro] = useState<'idle' | 'saving' | 'success'>('idle');
  const [statusConexiones, setStatusConexiones] = useState<'idle' | 'saving' | 'success'>('idle');

  const handleSaveCerebro = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusCerebro('saving');
    // Simulación de API para actualización de personalidad
    setTimeout(() => {
      setStatusCerebro('success');
      setTimeout(() => setStatusCerebro('idle'), 3000);
    }, 1500);
  };

  const handleSaveConexiones = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusConexiones('saving');
    // Simulación de API para aprovisionamiento de sistemas
    setTimeout(() => {
      setStatusConexiones('success');
      setTimeout(() => setStatusConexiones('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* ========================================================================
          BLOQUE 1: CEREBRO (Comportamiento del Agente)
          ======================================================================== */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 ml-2">
          <div className="p-4 rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-[var(--foreground)] tracking-tight">Comportamiento del Agente</h2>
            <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-[0.2em] font-black opacity-70">Identidad & Conocimiento</p>
          </div>
        </div>

        <form onSubmit={handleSaveCerebro} className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-10 relative overflow-hidden transition-all hover:shadow-indigo-500/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Nombre del Agente</label>
              <input 
                type="text" 
                placeholder="Ej: Sofía"
                value={cerebroData.name}
                onChange={(e) => setCerebroData({...cerebroData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all shadow-sm"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Nombre de la Empresa</label>
              <input 
                type="text" 
                placeholder="Ej: NR Labs"
                value={cerebroData.company}
                onChange={(e) => setCerebroData({...cerebroData, company: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Tono de Comunicación</label>
            <div className="relative">
              <select 
                value={cerebroData.tone}
                onChange={(e) => setCerebroData({...cerebroData, tone: e.target.value})}
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

          <div className="space-y-3">
            <label className="text-xs font-black text-[var(--muted-foreground)] uppercase tracking-wider ml-1">Contexto del Negocio (Cerebro)</label>
            <textarea 
              rows={5}
              placeholder="Describe detalladamente qué hace tu empresa, tus productos, precios y cómo debe responder el agente..."
              value={cerebroData.description}
              onChange={(e) => setCerebroData({...cerebroData, description: e.target.value})}
              className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--border)] text-sm font-bold focus:border-indigo-500 outline-none transition-all resize-none shadow-sm"
              required
            />
          </div>

          <div className="flex justify-end pt-4 border-t border-[var(--border)]">
            <button 
              type="submit"
              disabled={statusCerebro === 'saving'}
              className="group px-12 py-5 bg-indigo-600 text-white text-sm font-black rounded-2xl hover:bg-indigo-700 active:scale-[0.97] transition-all flex items-center gap-4 shadow-xl shadow-indigo-600/30 disabled:opacity-50"
            >
              {statusCerebro === 'saving' ? <Loader2 className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6 group-hover:scale-110 transition-transform" />}
              {statusCerebro === 'saving' ? 'ACTUALIZANDO...' : 'GUARDAR PERSONALIDAD'}
            </button>
          </div>

          {statusCerebro === 'success' && (
            <div className="absolute top-6 right-6 animate-in fade-in slide-in-from-right-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 px-5 py-3 rounded-2xl flex items-center gap-3 text-xs font-black backdrop-blur-md">
                <CheckCircle2 className="w-5 h-5" /> CEREBRO ACTUALIZADO
              </div>
            </div>
          )}
        </form>
      </section>

      {/* ========================================================================
          BLOQUE 2: CONEXIONES (Sistemas y API)
          ======================================================================== */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 ml-2">
          <div className="p-4 rounded-2xl bg-amber-500 shadow-lg shadow-amber-500/20">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-[var(--foreground)] tracking-tight">Conexiones de Sistemas</h2>
            <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-[0.2em] font-black opacity-70">Integraciones & Logística</p>
          </div>
        </div>

        <form onSubmit={handleSaveConexiones} className="glass-card bg-[var(--card)] border border-[var(--border)] p-10 rounded-[2.5rem] shadow-2xl space-y-12 relative transition-all hover:shadow-amber-500/5">
          
          {/* BANNER DE SEGURIDAD */}
          <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-5">
            <ShieldCheck className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
            <div className="space-y-1">
              <h4 className="text-base font-black text-blue-700 dark:text-blue-300">Conexión Segura (API Provisioning)</h4>
              <p className="text-xs text-blue-600/80 dark:text-blue-400/80 font-bold leading-relaxed">
                Tus tokens y keys se almacenan bajo cifrado militar AES-256. El proceso de sincronización con plataformas externas puede demorar hasta 24hs hábiles.
              </p>
            </div>
          </div>

          {/* E-COMMERCE MULTIPLE */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 ml-1">
              <ShoppingCart className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">E-commerce Multi-Plataforma</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* WooCommerce Toggle */}
              <div 
                onClick={() => setConexionesData({...conexionesData, has_woo: !conexionesData.has_woo})}
                className={`cursor-pointer p-8 py-10 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-6 group relative ${
                  conexionesData.has_woo ? 'border-[#873EFF] bg-[#873EFF]/5 shadow-xl' : 'border-[var(--border)] bg-[var(--card)] hover:border-[#873EFF]/40'
                }`}
              >
                <div className={`p-5 rounded-2xl transition-all ${conexionesData.has_woo ? 'bg-[#873EFF] text-white' : 'bg-[var(--background)] text-[var(--muted-foreground)] group-hover:bg-[#873EFF]/10'}`}>
                  <SiWoocommerce className="w-12 h-12" />
                </div>
                <div className="text-center space-y-1">
                  <span className="text-base font-black uppercase tracking-widest block">WooCommerce</span>
                  <span className={`text-[10px] font-black tracking-widest ${conexionesData.has_woo ? 'text-[#873EFF]' : 'text-[var(--muted-foreground)] opacity-50'}`}>
                    {conexionesData.has_woo ? 'SISTEMA ACTIVO' : 'NO CONECTADO'}
                  </span>
                </div>
                <div className={`absolute top-6 right-6 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${conexionesData.has_woo ? 'bg-[#873EFF] border-[#873EFF] scale-110' : 'border-[var(--border)]'}`}>
                  {conexionesData.has_woo && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
              </div>

              {/* Shopify Toggle */}
              <div 
                onClick={() => setConexionesData({...conexionesData, has_shopify: !conexionesData.has_shopify})}
                className={`cursor-pointer p-8 py-10 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-6 group relative ${
                  conexionesData.has_shopify ? 'border-[#95BF47] bg-[#95BF47]/5 shadow-xl' : 'border-[var(--border)] bg-[var(--card)] hover:border-[#95BF47]/40'
                }`}
              >
                <div className={`p-5 rounded-2xl transition-all ${conexionesData.has_shopify ? 'bg-[#95BF47] text-white' : 'bg-[var(--background)] text-[var(--muted-foreground)] group-hover:bg-[#95BF47]/10'}`}>
                  <SiShopify className="w-12 h-12" />
                </div>
                <div className="text-center space-y-1">
                  <span className="text-base font-black uppercase tracking-widest block">Shopify</span>
                  <span className={`text-[10px] font-black tracking-widest ${conexionesData.has_shopify ? 'text-[#95BF47]' : 'text-[var(--muted-foreground)] opacity-50'}`}>
                    {conexionesData.has_shopify ? 'SISTEMA ACTIVO' : 'NO CONECTADO'}
                  </span>
                </div>
                <div className={`absolute top-6 right-6 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${conexionesData.has_shopify ? 'bg-[#95BF47] border-[#95BF47] scale-110' : 'border-[var(--border)]'}`}>
                  {conexionesData.has_shopify && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
              </div>

              {/* MercadoLibre Toggle */}
              <div 
                onClick={() => setConexionesData({...conexionesData, has_meli: !conexionesData.has_meli})}
                className={`cursor-pointer p-8 py-10 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-6 group relative ${
                  conexionesData.has_meli ? 'border-[#FFE600] bg-[#FFE600]/5 shadow-xl' : 'border-[var(--border)] bg-[var(--card)] hover:border-[#FFE600]/40'
                }`}
              >
                <div className={`p-5 rounded-2xl transition-all ${conexionesData.has_meli ? 'bg-[#FFE600] text-black' : 'bg-[var(--background)] text-[var(--muted-foreground)] group-hover:bg-[#FFE600]/10'}`}>
                  <SiMercadopago className="w-12 h-12" />
                </div>
                <div className="text-center space-y-1">
                  <span className="text-base font-black uppercase tracking-widest block">MercadoLibre</span>
                  <span className={`text-[10px] font-black tracking-widest ${conexionesData.has_meli ? 'text-amber-600' : 'text-[var(--muted-foreground)] opacity-50'}`}>
                    {conexionesData.has_meli ? 'SISTEMA ACTIVO' : 'NO CONECTADO'}
                  </span>
                </div>
                <div className={`absolute top-6 right-6 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${conexionesData.has_meli ? 'bg-[#FFE600] border-[#FFE600] scale-110' : 'border-[var(--border)]'}`}>
                  {conexionesData.has_meli && <CheckCircle2 className="w-4 h-4 text-black" />}
                </div>
              </div>
            </div>

            {/* CAMPOS DINÁMICOS: WooCommerce */}
            {conexionesData.has_woo && (
              <div className="p-8 rounded-[2rem] bg-[var(--background)] border-2 border-[#873EFF]/30 space-y-8 animate-in zoom-in-95 duration-500">
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
                  <SiWoocommerce className="w-6 h-6 text-[#873EFF]" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#873EFF]">Configuración WooCommerce</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Store URL</label>
                    <div className="relative">
                      <Store className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                      <input 
                        type="url" 
                        placeholder="https://mitienda.com"
                        value={conexionesData.woo_url}
                        onChange={(e) => setConexionesData({...conexionesData, woo_url: e.target.value})}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-[#873EFF] outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Consumer Key (ck_...)</label>
                    <div className="relative">
                      <Key className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                      <input 
                        type="text" 
                        placeholder="ck_123456789..."
                        value={conexionesData.woo_ck}
                        onChange={(e) => setConexionesData({...conexionesData, woo_ck: e.target.value})}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-[#873EFF] outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Consumer Secret (cs_...)</label>
                    <div className="relative">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                      <input 
                        type="password" 
                        placeholder="cs_••••••••••••••••"
                        value={conexionesData.woo_cs}
                        onChange={(e) => setConexionesData({...conexionesData, woo_cs: e.target.value})}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-[#873EFF] outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CAMPOS DINÁMICOS: Shopify */}
            {conexionesData.has_shopify && (
              <div className="p-8 rounded-[2rem] bg-[var(--background)] border-2 border-[#95BF47]/30 space-y-8 animate-in zoom-in-95 duration-500">
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
                  <SiShopify className="w-6 h-6 text-[#95BF47]" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#95BF47]">Configuración Shopify</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Shop URL</label>
                    <div className="relative">
                      <Store className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                      <input 
                        type="url" 
                        placeholder="mi-tienda.myshopify.com"
                        value={conexionesData.shopify_url}
                        onChange={(e) => setConexionesData({...conexionesData, shopify_url: e.target.value})}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-[#95BF47] outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Admin Access Token (shpat_...)</label>
                    <div className="relative">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                      <input 
                        type="password" 
                        placeholder="shpat_••••••••••••••••"
                        value={conexionesData.shopify_token}
                        onChange={(e) => setConexionesData({...conexionesData, shopify_token: e.target.value})}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-[#95BF47] outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CAMPOS DINÁMICOS: MercadoLibre */}
            {conexionesData.has_meli && (
              <div className="p-8 rounded-[2rem] bg-[var(--background)] border-2 border-[#FFE600]/50 space-y-8 animate-in zoom-in-95 duration-500">
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
                  <SiMercadopago className="w-6 h-6 text-amber-600" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-amber-600">Configuración MercadoLibre</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Seller ID</label>
                    <input 
                      type="text" 
                      placeholder="12345678"
                      value={conexionesData.meli_seller_id}
                      onChange={(e) => setConexionesData({...conexionesData, meli_seller_id: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-amber-400 outline-none transition-all shadow-inner"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Client ID</label>
                    <input 
                      type="text" 
                      placeholder="APP_USR-..."
                      value={conexionesData.meli_client_id}
                      onChange={(e) => setConexionesData({...conexionesData, meli_client_id: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-amber-400 outline-none transition-all shadow-inner"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Client Secret</label>
                    <input 
                      type="password" 
                      placeholder="••••••••••••••••"
                      value={conexionesData.meli_client_secret}
                      onChange={(e) => setConexionesData({...conexionesData, meli_client_secret: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-amber-400 outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-[var(--border)] opacity-30" />

          {/* LOGÍSTICA */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 ml-1">
              <Truck className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Logística & Despacho</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div 
                onClick={() => setConexionesData({...conexionesData, carrier: conexionesData.carrier === 'andreani' ? 'none' : 'andreani'})}
                className={`cursor-pointer p-8 py-10 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-6 group ${
                  conexionesData.carrier === 'andreani' ? 'border-[#E3000F] bg-[#E3000F]/5 shadow-xl' : 'border-[var(--border)] bg-[var(--card)] hover:border-[#E3000F]/40'
                }`}
              >
                <img src="https://ps.w.org/andreani-shipping/assets/icon-128x128.png?rev=3429256" alt="Andreani" className="h-20 object-contain transition-transform group-hover:scale-110" />
                <span className="text-sm font-black uppercase tracking-widest block">Andreani Express</span>
              </div>
              
              <div 
                onClick={() => setConexionesData({...conexionesData, carrier: conexionesData.carrier === 'oca' ? 'none' : 'oca'})}
                className={`cursor-pointer p-8 py-10 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-6 group ${
                  conexionesData.carrier === 'oca' ? 'border-[#71277E] bg-[#71277E]/5 shadow-xl' : 'border-[var(--border)] bg-[var(--card)] hover:border-[#71277E]/40'
                }`}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_OCA_25.png" alt="OCA" className="h-20 object-contain transition-transform group-hover:scale-110" />
                <span className="text-sm font-black uppercase tracking-widest block">OCA Logística</span>
              </div>
            </div>

            {conexionesData.carrier !== 'none' && (
              <div className="p-10 rounded-[2.5rem] bg-[var(--background)] border-2 border-[var(--border)] grid grid-cols-1 md:grid-cols-2 gap-10 animate-in slide-in-from-top-6 duration-500">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Usuario / CUIT</label>
                  <input 
                    type="text" 
                    placeholder="Credencial de acceso..."
                    value={conexionesData.logisticsUser}
                    onChange={(e) => setConexionesData({...conexionesData, logisticsUser: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-orange-500 outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--muted-foreground)] uppercase ml-1">Password / API Key</label>
                  <input 
                    type="password" 
                    placeholder="••••••••••••••••"
                    value={conexionesData.logisticsPass}
                    onChange={(e) => setConexionesData({...conexionesData, logisticsPass: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-sm font-bold focus:border-orange-500 outline-none transition-all shadow-inner"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-[var(--border)] opacity-30" />

          {/* CANALES CON LOGOS REALES */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 ml-1">
              <MessageSquare className="w-6 h-6 text-sky-500" />
              <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">Canales de Comunicación</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 py-10 rounded-[2rem] border-2 border-[var(--border)] bg-[var(--card)] flex items-center gap-8 group hover:border-[#25D366]/40 transition-all shadow-sm">
                <div className="p-5 rounded-3xl bg-[#25D366]/10 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <SiWhatsapp className="w-10 h-10 text-[#25D366] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-base font-black text-[var(--foreground)] uppercase tracking-widest">WhatsApp Business</h4>
                  <p className="text-[10px] text-[var(--muted-foreground)] font-black mt-1 uppercase tracking-tighter opacity-70">Integración Directa Meta Cloud API</p>
                </div>
              </div>
              
              <div className="p-8 py-10 rounded-[2rem] border-2 border-[var(--border)] bg-[var(--card)] flex items-center gap-8 group hover:border-blue-500/40 transition-all shadow-sm">
                <div className="p-5 rounded-3xl bg-blue-500/10 group-hover:bg-blue-500 transition-all">
                  <img 
                    src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50" 
                    alt="Zenvia" 
                    className="w-10 h-10 rounded-xl group-hover:brightness-0 group-hover:invert transition-all object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-base font-black text-[var(--foreground)] uppercase tracking-widest">Zenvia Platform</h4>
                  <p className="text-[10px] text-[var(--muted-foreground)] font-black mt-1 uppercase tracking-tighter opacity-70">Sincronización vía Webhook Seguro</p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTÓN GUARDAR CONEXIONES */}
          <div className="flex justify-end pt-12 border-t border-[var(--border)]">
            <button 
              type="submit"
              disabled={statusConexiones === 'saving'}
              className="group px-14 py-6 bg-emerald-600 text-white text-sm font-black rounded-2xl hover:bg-emerald-700 active:scale-[0.97] transition-all flex items-center gap-5 shadow-2xl shadow-emerald-600/30 disabled:opacity-50"
            >
              {statusConexiones === 'saving' ? <Loader2 className="w-7 h-7 animate-spin" /> : <Zap className="w-7 h-7 group-hover:rotate-12 transition-transform" />}
              {statusConexiones === 'saving' ? 'SINCRONIZANDO API...' : 'VINCULAR SISTEMAS'}
            </button>
          </div>

          {statusConexiones === 'success' && (
            <div className="absolute top-6 right-6 animate-in fade-in slide-in-from-right-4">
              <div className="bg-emerald-500 text-white px-6 py-3 rounded-2xl flex items-center gap-3 text-xs font-black shadow-2xl">
                <CheckCircle2 className="w-5 h-5" /> SISTEMAS CONECTADOS
              </div>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default AgentConfigForm;
