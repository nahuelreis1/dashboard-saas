import React, { useState } from 'react';
import { 
  Save, 
  Sparkles, 
  MessageSquare, 
  Briefcase, 
  ChevronDown, 
  ShoppingCart, 
  Globe, 
  Key, 
  Lock, 
  Truck,
  Layers,
  MessageCircle,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { SiWoocommerce, SiShopify } from '@icons-pack/react-simple-icons';

const AgentConfigForm: React.FC = () => {
  const [formData, setFormData] = useState({
    agent_name: '',
    company_name: '',
    company_description: '',
    tone: 'professional',
    ecommerce: 'none', // none, woocommerce, shopify
    woo_url: '',
    woo_key: '',
    woo_secret: '',
    shopify_url: '',
    shopify_token: '',
    andreani_enabled: false,
    andreani_user: '',
    andreani_pass: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleEcomSelect = (platform: string) => {
    setFormData(prev => ({ ...prev, ecommerce: platform }));
  };

  const toggleAndreani = () => {
    setFormData(prev => ({ ...prev, andreani_enabled: !prev.andreani_enabled }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Final Configuration:', JSON.stringify(formData, null, 2));
    alert('Configuración guardada (ver consola)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Información Base */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-[var(--foreground)]">
          <Layers className="w-5 h-5 text-[var(--color-accent-base)]" />
          Configuración General
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-[var(--muted-foreground)]">
              <Sparkles className="w-4 h-4 text-[var(--color-accent-base)]" />
              Nombre del Agente
            </label>
            <input
              type="text"
              name="agent_name"
              value={formData.agent_name}
              onChange={handleChange}
              placeholder="Ej: Sofia de Soporte"
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all text-[var(--foreground)]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-[var(--muted-foreground)]">
              <Briefcase className="w-4 h-4 text-[var(--color-accent-base)]" />
              Empresa
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Ej: NR Labs Tech"
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all text-[var(--foreground)]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2 text-[var(--muted-foreground)]">
            <MessageSquare className="w-4 h-4 text-[var(--color-accent-base)]" />
            Tono de Voz
          </label>
          <div className="relative">
            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none appearance-none transition-all text-[var(--foreground)]"
            >
              <option value="professional">Profesional y Ejecutivo</option>
              <option value="friendly">Amigable y Cercano</option>
              <option value="direct">Directo y Conciso</option>
              <option value="technical">Técnico y Preciso</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--muted-foreground)]">
            Descripción de la Empresa
          </label>
          <textarea
            name="company_description"
            value={formData.company_description}
            onChange={handleChange}
            rows={3}
            placeholder="Describe brevemente qué hace tu empresa y qué servicios ofrece..."
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all resize-none text-[var(--foreground)]"
          />
        </div>
      </section>

      {/* Sección de Integraciones */}
      <section className="space-y-6 pt-4 border-t border-[var(--border)]">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-[var(--foreground)]">
          <ShoppingCart className="w-5 h-5 text-[var(--color-accent-base)]" />
          Conexiones de Sistemas
        </h3>

        {/* E-commerce Selection */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-[var(--muted-foreground)]">Plataforma de E-commerce</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => handleEcomSelect('none')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-3 ${
                formData.ecommerce === 'none'
                  ? 'border-[var(--color-accent-base)] bg-[var(--color-accent-base)]/10 ring-4 ring-[var(--color-accent-base)]/20'
                  : 'border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]'
              }`}
            >
              <Globe className={`w-6 h-6 ${formData.ecommerce === 'none' ? 'text-[var(--color-accent-base)]' : 'text-[var(--muted-foreground)]'}`} />
              <span className={`text-sm font-medium ${formData.ecommerce === 'none' ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`}>
                Sin E-commerce
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleEcomSelect('woocommerce')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-3 ${
                formData.ecommerce === 'woocommerce'
                  ? 'border-[var(--color-accent-base)] bg-[var(--color-accent-base)]/10 ring-4 ring-[var(--color-accent-base)]/20'
                  : 'border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]'
              }`}
            >
              <SiWoocommerce className={`w-6 h-6 ${formData.ecommerce === 'woocommerce' ? 'text-[#873EFF]' : 'text-[var(--muted-foreground)]'}`} />
              <span className={`text-sm font-medium ${formData.ecommerce === 'woocommerce' ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`}>
                WooCommerce
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleEcomSelect('shopify')}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-3 ${
                formData.ecommerce === 'shopify'
                  ? 'border-[var(--color-accent-base)] bg-[var(--color-accent-base)]/10 ring-4 ring-[var(--color-accent-base)]/20'
                  : 'border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]'
              }`}
            >
              <SiShopify className={`w-6 h-6 ${formData.ecommerce === 'shopify' ? 'text-[#95BF47]' : 'text-[var(--muted-foreground)]'}`} />
              <span className={`text-sm font-medium ${formData.ecommerce === 'shopify' ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`}>
                Shopify
              </span>
            </button>
          </div>
        </div>

        {/* E-commerce Conditional Inputs */}
        {(formData.ecommerce === 'woocommerce' || formData.ecommerce === 'shopify') && (
          <div className="p-5 rounded-2xl bg-[var(--muted)] border border-[var(--border)] animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-start gap-3 mb-4 p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Aprovisionamiento Seguro (B2B)</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">Tus credenciales se almacenarán encriptadas (AES-256). Nuestro equipo de ingeniería aislará y conectará tu instancia de e-commerce en tu entorno privado.</p>
              </div>
            </div>

            {formData.ecommerce === 'woocommerce' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[var(--muted-foreground)]">Store URL</label>
                  <input
                    type="text"
                    name="woo_url"
                    value={formData.woo_url}
                    onChange={handleChange}
                    placeholder="https://tu-tienda.com"
                    className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] outline-none focus:border-[var(--color-accent-base)]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                    <Key className="w-3 h-3" /> Consumer Key
                  </label>
                  <input
                    type="text"
                    name="woo_key"
                    value={formData.woo_key}
                    onChange={handleChange}
                    placeholder="ck_..."
                    className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] outline-none focus:border-[var(--color-accent-base)]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Consumer Secret
                  </label>
                  <input
                    type="password"
                    name="woo_secret"
                    value={formData.woo_secret}
                    onChange={handleChange}
                    placeholder="cs_..."
                    className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] outline-none focus:border-[var(--color-accent-base)]/50"
                  />
                </div>
              </div>
            )}

            {formData.ecommerce === 'shopify' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[var(--muted-foreground)]">Shop URL</label>
                  <input
                    type="text"
                    name="shopify_url"
                    value={formData.shopify_url}
                    onChange={handleChange}
                    placeholder="mi-tienda.myshopify.com"
                    className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] outline-none focus:border-[var(--color-accent-base)]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[var(--muted-foreground)] flex items-center gap-2">
                    <Key className="w-3 h-3" /> Admin Access Token
                  </label>
                  <input
                    type="password"
                    name="shopify_token"
                    value={formData.shopify_token}
                    onChange={handleChange}
                    placeholder="shpat_..."
                    className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] outline-none focus:border-[var(--color-accent-base)]/50"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Logistics Section */}
        <div className="space-y-4 pt-4 border-t border-[var(--border)]">
          <label className="text-sm font-medium text-[var(--muted-foreground)]">Logística y Cotizadores</label>
          <div 
            onClick={toggleAndreani}
            className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
              formData.andreani_enabled 
                ? 'border-[var(--color-accent-base)] bg-[var(--color-accent-base)]/10 ring-4 ring-[var(--color-accent-base)]/20' 
                : 'border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl transition-colors ${formData.andreani_enabled ? 'bg-[var(--color-accent-base)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className={`font-semibold ${formData.andreani_enabled ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`}>API Andreani</p>
                <p className="text-xs text-[var(--muted-foreground)]/80">Integración nativa dinámica para cotización y tracking en tiempo real</p>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full relative transition-colors ${formData.andreani_enabled ? 'bg-[var(--color-accent-base)]' : 'bg-[var(--border)]'}`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${formData.andreani_enabled ? 'left-7' : 'left-1'}`} />
            </div>
          </div>

          {formData.andreani_enabled && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[var(--muted)] border border-[var(--border)] animate-in slide-in-from-top-2 duration-300">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-[var(--muted-foreground)]">Usuario Andreani</label>
                <input
                  type="text"
                  name="andreani_user"
                  value={formData.andreani_user}
                  onChange={handleChange}
                  placeholder="Tu usuario"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] outline-none focus:border-[var(--color-accent-base)]/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-[var(--muted-foreground)]">Contraseña Andreani</label>
                <input
                  type="password"
                  name="andreani_pass"
                  value={formData.andreani_pass}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] outline-none focus:border-[var(--color-accent-base)]/50"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Deployment Channels Section */}
      <section className="space-y-4 pt-4 border-t border-[var(--border)]">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-[var(--foreground)]">
          <Globe className="w-5 h-5 text-[var(--color-accent-base)]" />
          Canales de Despliegue
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] mb-4">
          NR Labs opera como el motor cognitivo de tu empresa. Conectamos la inteligencia artificial directamente a tus canales de comunicación existentes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Phone className="w-16 h-16 text-emerald-500" />
             </div>
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <h4 className="font-semibold text-emerald-700 dark:text-emerald-400">WhatsApp Nativo</h4>
               </div>
               <p className="text-sm text-[var(--muted-foreground)]">
                 Conexión directa vía Cloud API de WhatsApp Business. Respuestas instantáneas y soporte multimedia.
               </p>
             </div>
          </div>

          <div className="p-5 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <MessageCircle className="w-16 h-16 text-blue-500" />
             </div>
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-blue-500" />
                 <h4 className="font-semibold text-blue-700 dark:text-blue-400">Integración Zenvia</h4>
               </div>
               <p className="text-sm text-[var(--muted-foreground)]">
                 Si ya utilizas Zenvia, inyectamos inteligencia artificial superior en tus flujos de conversación actuales sin cambiar de proveedor.
               </p>
             </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end pt-6 border-t border-[var(--border)]">
        <button
          type="submit"
          className="group flex items-center gap-2 px-8 py-3 bg-[var(--color-accent-base)] text-white font-bold rounded-xl hover:opacity-90 shadow-lg shadow-[var(--color-accent-base)]/20 active:scale-[0.98] transition-all"
        >
          <Save className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Guardar Configuración
        </button>
      </div>
    </form>
  );
};

export default AgentConfigForm;
