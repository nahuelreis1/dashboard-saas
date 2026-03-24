import React, { useState } from 'react';
import { SiWoocommerce, SiShopify, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { Chrome, ShieldAlert, Zap, CheckCircle2, ShoppingCart, Truck, Globe } from 'lucide-react';

export default function LandingUI() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  const integrationsList = [
    { name: 'MercadoLibre', isImg: true, src: 'https://companieslogo.com/img/orig/MELI_BIG-d1f8e207.png?t=1720244492' },
    { name: 'WooCommerce', icon: SiWoocommerce, color: '#96588a' },
    { name: 'Shopify', icon: SiShopify, color: '#95BF47' },
    { name: 'WhatsApp', icon: SiWhatsapp, color: '#25D366' },
    { name: 'Andreani', isImg: true, src: 'https://ps.w.org/andreani-shipping/assets/icon-128x128.png?rev=3429256' },
    { name: 'OCA', isImg: true, src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_OCA_25.png' },
    { name: 'Zenvia', isImg: true, src: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50' }
  ];

  const doubledIntegrations = [...integrationsList, ...integrationsList, ...integrationsList];

  const formIntegrations = [
    { id: 'whatsapp', label: 'WhatsApp', icon: <SiWhatsapp size={20} color="#25D366" /> },
    { id: 'meli', label: 'MercadoLibre', icon: <img src="https://companieslogo.com/img/orig/MELI_BIG-d1f8e207.png?t=1720244492" alt="Meli" className="w-5 h-5 object-contain" /> },
    { id: 'tiendanube', label: 'Shopify / Woo', icon: <ShoppingCart size={20} className="text-purple-500" /> },
    { id: 'logistica', label: 'Logística', icon: <Truck size={20} className="text-blue-500" /> },
    { id: 'zenvia', label: 'Zenvia', icon: <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50" alt="Zenvia" className="w-5 h-5 object-contain" /> },
    { id: 'api', label: 'API Custom', icon: <Globe size={20} className="text-emerald-500" /> }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden flex flex-col items-center selection:bg-blue-500/30 font-sans">
      
      {/* SaaS Premium Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[160px]"></div>
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-[-15%] left-[20%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-20">
        <div className="flex items-center gap-2 select-none">
          <span className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-sm">
            AGENTino
          </span>
          <span className="text-3xl drop-shadow-md">🤖🧉</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted-foreground)]">
          <a href="#features" className="hover:text-[var(--foreground)] transition-colors">Características</a>
          <a href="#integrations" className="hover:text-[var(--foreground)] transition-colors">Integraciones</a>
          <a href="/api/auth/google" className="px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Acceso Clientes
          </a>
        </div>
      </nav>

      <main className="w-full max-w-7xl px-4 sm:px-6 py-12 md:py-20 z-10 flex-1 flex flex-col">
        {/* Header section */}
        <div className="text-center mb-20 md:mb-28 space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--muted)]/50 backdrop-blur-md text-sm font-medium text-[var(--muted-foreground)] mb-4 shadow-sm">
            <span className="flex w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Plataforma B2B para Alta Demanda
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
            El vendedor infalible impulsado por <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-rose-400 animate-gradient-x">
              Inteligencia Artificial
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted-foreground)] font-medium max-w-3xl mx-auto leading-relaxed">
            Automatiza la atención por WhatsApp, sincroniza stock con e-commerce y coordina envíos en piloto automático.
          </p>
        </div>

        {/* Marquee Integrations */}
        <div id="integrations" className="w-full mb-24 md:mb-32">
          <p className="text-center text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-[0.2em] mb-10">
            Integración nativa con tu ecosistema operativo
          </p>
          
          <div className="relative flex overflow-hidden w-full group py-4">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee items-center gap-20 md:gap-32 px-10 group-hover:[animation-play-state:paused]">
              {doubledIntegrations.map((item, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 min-w-[100px] hover:scale-110">
                  {item.isImg ? (
                    <img src={item.src} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg" referrerPolicy="no-referrer" />
                  ) : item.icon ? (
                    <item.icon size={80} color={item.color} className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two Columns Section */}
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto w-full items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Solicitar Onboarding</h2>
              <p className="text-[var(--muted-foreground)] mt-2 text-lg">
                Agenda un kickoff técnico para evaluar la arquitectura de tu agente.
              </p>
            </div>

            <div className="bg-[var(--card)]/80 backdrop-blur-xl border border-[var(--border)] rounded-3xl p-6 md:p-10 shadow-2xl shadow-blue-500/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4 ring-4 ring-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold">¡Solicitud en Proceso!</h3>
                  <p className="text-[var(--muted-foreground)] max-w-md">
                    Nuestro equipo de ingeniería revisará tu requerimiento y te contactará en menos de 24hs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Empresa</label>
                      <input required type="text" placeholder="Ej: Acme Corp" className="w-full h-12 px-4 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Email Corporativo</label>
                      <input required type="email" placeholder="ceo@empresa.com" className="w-full h-12 px-4 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" />
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Stack Tecnológico Requerido</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {formIntegrations.map((tech) => {
                        const isSelected = selectedTechs.includes(tech.id);
                        return (
                          <div 
                            key={tech.id} 
                            onClick={() => toggleTech(tech.id)}
                            className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all duration-200 group ${
                              isSelected 
                                ? 'bg-blue-500/10 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.1)]' 
                                : 'bg-[var(--background)] border-[var(--border)] hover:border-blue-400/50 hover:bg-[var(--muted)]'
                            }`}
                          >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-lg mr-3 ${isSelected ? 'bg-white/10' : 'bg-[var(--card)]'} border border-[var(--border)]`}>
                              {tech.icon}
                            </div>
                            <span className={`text-sm font-medium flex-1 ${isSelected ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]'}`}>
                              {tech.label}
                            </span>
                            <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                              isSelected ? 'bg-blue-500 border-blue-500' : 'border-[var(--muted-foreground)]/40'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="w-full h-14 mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100"
                  >
                    {formState === 'submitting' ? 'Procesando...' : 'Desplegar Mi Agente'} 
                    {formState !== 'submitting' && <Zap className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Login Card */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
             <div>
              <h2 className="text-3xl font-bold tracking-tight">Acceso Operativo</h2>
              <p className="text-[var(--muted-foreground)] mt-2 text-lg">
                Ingresa a la consola de control de tu asistente.
              </p>
            </div>

            <div className="bg-[var(--card)]/80 backdrop-blur-xl border border-[var(--border)] shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] pointer-events-none"></div>

              <div className="mb-8 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-5 flex gap-4 text-amber-600 dark:text-amber-500">
                <ShieldAlert className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <span className="font-bold block mb-1 text-base">Acceso Restringido</span>
                  Solo disponible para clientes con instancias aprovisionadas por el equipo de NR Labs.
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-4 relative z-10">
                <a 
                  href="/api/auth/google"
                  className="flex items-center justify-center gap-3 w-full h-14 bg-[var(--background)] border border-[var(--border)] rounded-xl font-bold text-[var(--foreground)] hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-500 transition-all duration-300 shadow-sm group"
                >
                  <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Autenticar con Google</span>
                </a>
                
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[var(--border)]"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest">
                    <span className="bg-[var(--card)] px-4 text-[var(--muted-foreground)]">Entorno de Pruebas</span>
                  </div>
                </div>
                
                <a 
                  href="/dashboard"
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[var(--muted)]/50 text-[var(--foreground)] text-sm font-medium hover:bg-[var(--muted)] hover:shadow-inner transition-all border border-transparent hover:border-[var(--border)]"
                >
                  Entrar al Sandbox Local
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <footer className="w-full py-10 mt-20 text-center border-t border-[var(--border)]/50 z-10 bg-[var(--background)]/80 backdrop-blur-lg">
        <p className="text-sm font-medium text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} <span className="text-[var(--foreground)] font-bold">AGENTino 🤖</span> by NR Labs. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
