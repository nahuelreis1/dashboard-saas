import React, { useState } from 'react';
import { 
  MessageSquare, 
  ShoppingCart, 
  Truck, 
  BookOpen, 
  Copy, 
  Check, 
  ExternalLink,
  User,
  Lock,
  Globe
} from 'lucide-react';
import { 
  SiShopify, 
  SiWoocommerce, 
  SiMercadopago 
} from '@icons-pack/react-simple-icons';
import FileUploader from './FileUploader';

const IntegrationsManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'channels' | 'ecommerce' | 'logistics' | 'knowledge'>('channels');
  const [copied, setCopied] = useState(false);

  const webhookUrl = "https://n8n.tu-server.com/webhook/xxxx";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(webhookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'channels', label: 'Canales de Despliegue', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'logistics', label: 'Logística', icon: <Truck className="w-4 h-4" /> },
    { id: 'knowledge', label: 'Base de Conocimiento', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8 animate-in fade-in duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Integraciones</h1>
        <p className="text-slate-400">Gestiona las conexiones con tus canales de venta, logística y base de datos.</p>
      </header>

      {/* Tabs Navigation */}
      <div className="flex p-1 space-x-1 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-white/10 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id 
                ? 'bg-white/10 text-white shadow-lg border border-white/10' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'channels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <span className="px-2 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/20">Directo</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-slate-400 text-sm mb-6">Conecta directamente tu cuenta de WhatsApp para automatizar respuestas y gestionar chats.</p>
              <button className="w-full py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors">Configurar WhatsApp</button>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <span className="px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/20">API</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zenvia</h3>
              <p className="text-slate-400 text-sm mb-6">Integración multi-canal vía Zenvia para SMS, WhatsApp y otros canales de mensajería.</p>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors">Configurar Zenvia</button>
            </div>

            <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
              <label className="block text-sm font-medium text-slate-300 mb-2">Webhook URL (n8n)</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value={webhookUrl}
                  className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-slate-300 text-sm focus:outline-none"
                />
                <button 
                  onClick={copyToClipboard}
                  className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all flex items-center space-x-2 text-white"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  <span className="text-xs font-medium">{copied ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500 italic">Usa esta URL para conectar tus flujos de n8n con el dashboard.</p>
            </div>
          </div>
        )}

        {activeTab === 'ecommerce' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-[#96588a]/20 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-4">
                  <SiWoocommerce className="w-10 h-10 text-[#96588a]" />
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WooCommerce</h3>
                <p className="text-slate-400 text-sm mb-6">Sincroniza pedidos, inventario y clientes de tu tienda WordPress.</p>
                <button className="w-full py-2 bg-[#96588a] hover:opacity-90 text-white font-semibold rounded-lg transition-colors">Vincular Tienda</button>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-[#95bf47]/20 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-4">
                  <SiShopify className="w-10 h-10 text-[#95bf47]" />
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Shopify</h3>
                <p className="text-slate-400 text-sm mb-6">Integración completa con Shopify para gestión de ventas automáticas.</p>
                <button className="w-full py-2 bg-[#95bf47] hover:opacity-90 text-black font-bold rounded-lg transition-colors">Vincular Tienda</button>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-[#009ee3]/20 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-4">
                  <SiMercadopago className="w-10 h-10 text-[#009ee3]" />
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">MercadoLibre</h3>
                <p className="text-slate-400 text-sm mb-6">Conecta tus publicaciones y ventas de Meli con el ecosistema IA.</p>
                <button className="w-full py-2 bg-[#009ee3] hover:opacity-90 text-white font-semibold rounded-lg transition-colors">Vincular Cuenta</button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <ShoppingCart className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-blue-400">Aprovisionamiento B2B</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nuestra plataforma soporta modelos de aprovisionamiento B2B automatizados. 
                Configura reglas de stock crítico y reabastecimiento directo con proveedores integrados para mantener tu operación siempre activa.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'logistics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-[#004b93] rounded-xl flex items-center justify-center font-bold text-white text-xl italic shadow-lg shadow-[#004b93]/20">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">Andreani</h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Logística Certificada</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <User className="w-3 h-3" /> Usuario Andreani
                  </label>
                  <input 
                    type="text" 
                    placeholder="andreani_user_123"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-blue-500/50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Contraseña
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-blue-500/50 outline-none transition-all"
                  />
                </div>
                <button className="w-full mt-4 py-3 bg-[#004b93] hover:bg-[#005bb3] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#004b93]/20">
                  Autenticar Andreani
                </button>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-[#f6891f] rounded-xl flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-[#f6891f]/20">
                  OCA
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">OCA</h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Envíos a todo el país</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <User className="w-3 h-3" /> Cliente OCA
                  </label>
                  <input 
                    type="text" 
                    placeholder="C-000000X"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#f6891f]/50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Token API
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••••••••••"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#f6891f]/50 outline-none transition-all"
                  />
                </div>
                <button className="w-full mt-4 py-3 bg-[#f6891f] hover:bg-[#ff9a3d] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#f6891f]/20">
                  Vincular OCA
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'knowledge' && (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-in slide-in-from-bottom-4 duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-indigo-400" /> Base de Conocimiento
              </h3>
              <p className="text-slate-400 text-sm">Sube tus archivos (PDF, DOCX, CSV) para que la IA los use como contexto en tus flujos de trabajo.</p>
            </div>
            <FileUploader />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationsManager;
