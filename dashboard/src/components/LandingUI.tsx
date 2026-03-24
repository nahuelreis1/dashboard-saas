import React, { useState } from 'react';
import { SiWoocommerce, SiShopify, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { Chrome, ShieldAlert, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function LandingUI() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  const integrationsList = [
    { name: 'MercadoLibre', isSvg: true, content: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="h-12 w-12 opacity-80 hover:opacity-100 transition-opacity" fill="currentColor">
        <path d="M685.8 456.8c-1.6-1.5-3.3-3.1-4.9-4.8l-1.6-1.6-103-91.8c-36-32.3-100.2-22.1-125.7 19.8-13 21.4-12.7 54.4 0.7 75.3 12.8 19.8 38.3 35.5 73.1 44.9v0.1c-13.9 14.5-28 29-41.8 43.6v-0.1c-32.6-8.5-56-22-68.8-38.6-28.7-36.9-19-106.3 22-152.2 30-33.5 83-50.4 121.2-16.1 1.7 1.5 3.3 3 5 4.6l1.6 1.6 102.9 91.8c36 32.3 100.1 22.1 125.7-19.8 13-21.3 12.7-54.4-0.7-75.3-12.8-19.8-38.3-35.5-73.1-45v-0.1c13.9-14.5 28-29 41.8-43.6v0.1c32.6 8.5 56 22 68.8 38.6 28.7 36.9 19 106.3-22 152.2-29.8 33.6-82.7 50.4-121.2 16.4z" />
        <path d="M512 88.5c-233.9 0-423.5 189.6-423.5 423.5S278.1 935.5 512 935.5 935.5 745.9 935.5 512 745.9 88.5 512 88.5zM761.3 543.9c-44.5 51.5-104 68.5-144.1 63.3l-20.9 21.7c47.9-12.2 114.7-41 155.6-85-4.4 0-9.2-0.1-14.2 0.3-6.4 0.5-12.5 1.5-18.3 3.1l41.9-3.4zM425 401.5l20.9-21.7c-47.9 12.2-114.7 41-155.6 85 4.4 0 9.2 0.1 14.2-0.3 6.4-0.5 12.5-1.5 18.3-3.1L280.9 465c44.5-51.5 104-68.5 144.1-63.5z" />
      </svg>
    )},
    { name: 'WooCommerce', icon: SiWoocommerce, color: '#96588a' },
    { name: 'Shopify', icon: SiShopify, color: '#95BF47' },
    { name: 'WhatsApp B2B', icon: SiWhatsapp, color: '#25D366' },
    { name: 'Andreani', isImg: true, src: 'https://ps.w.org/andreani-shipping/assets/icon-128x128.png?rev=3429256' },
    { name: 'OCA', isImg: true, src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_OCA_25.png' },
    { name: 'Zenvia', isImg: true, src: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50' }
  ];

  const doubledIntegrations = [...integrationsList, ...integrationsList];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden flex flex-col items-center">
      {/* Abstract Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-accent-base)]/5 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[-15%] right-[-10%] w-[40%] h-[40%] bg-[var(--color-accent-base)]/5 rounded-full blur-[140px]"></div>
      </div>

      <main className="w-full max-w-6xl px-6 py-16 md:py-24 z-10 flex-1 flex flex-col">
        {/* Header section */}
        <div className="text-center mb-16 md:mb-24 space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--color-accent-base)] shadow-2xl shadow-[var(--color-accent-base)]/30 mb-2">
            <span className="text-4xl">🤖</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
            Creamos tu agente con <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-base)] to-rose-400">Inteligencia Artificial</span><br />
            para tiendas y e-commerce
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] font-medium max-w-2xl mx-auto space-y-2">
            <span>Responde tus WhatsApps automáticamente con tecnología de vanguardia.</span><br/>
            <span>Nosotros nos encargamos de la tecnología, vos solo de vender.</span>
          </p>
        </div>

        {/* Marquee Integrations */}
        <div className="w-full mb-20 md:mb-28">
          <p className="text-center text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-8">
            Conectamos con tu ecosistema existente
          </p>
          
          <div className="relative flex overflow-hidden w-full group">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee items-center gap-16 md:gap-24 px-8 group-hover:[animation-play-state:paused]">
              {doubledIntegrations.map((item, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 min-w-[120px]">
                  {item.isSvg ? (
                    item.content
                  ) : item.isImg ? (
                    <img src={item.src} alt={item.name} className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
                  ) : item.icon ? (
                    <item.icon size={48} color={item.color} className="h-10 w-10 md:h-12 md:w-12" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Zenvia Banner */}
        <div className="w-full max-w-4xl mx-auto mb-20 md:mb-28 px-4">
          <div className="bg-gradient-to-r from-[var(--color-accent-base)]/10 to-purple-500/10 border border-[var(--color-accent-base)]/20 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center shadow-lg shadow-[var(--color-accent-base)]/5">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--color-accent-base)]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <img 
              src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50" 
              alt="Zenvia" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-6 relative z-10"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10 text-[var(--foreground)]">¿Ya usas Zenvia?</h2>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl relative z-10 font-medium leading-relaxed">
              Conectamos nuestro agente directamente a tu cuenta de Zenvia y te brindamos soporte continuo. <br/>
              Mantené tu infraestructura actual con superpoderes de IA.
            </p>
          </div>
        </div>

        {/* Two Columns Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full items-start">
          
          {/* Left Column: Form */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Solicitar Onboarding</h2>
              <p className="text-[var(--muted-foreground)] mt-2">
                Completa el formulario para que nuestro equipo técnico analice tus sistemas y configure tu agente IA corporativo.
              </p>
            </div>

            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-sm">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">¡Solicitud Enviada!</h3>
                  <p className="text-[var(--muted-foreground)]">
                    Nuestro equipo se pondrá en contacto a la brevedad para coordinar la llamada de kickoff técnico.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre de la Empresa</label>
                    <input required type="text" placeholder="Ej: Acme Corp" className="w-full h-11 px-4 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-[var(--color-accent-base)] focus:ring-1 focus:ring-[var(--color-accent-base)] transition-colors outline-none" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Corporativo</label>
                    <input required type="email" placeholder="ceo@empresa.com" className="w-full h-11 px-4 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-[var(--color-accent-base)] focus:ring-1 focus:ring-[var(--color-accent-base)] transition-colors outline-none" />
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="text-sm font-medium">Integraciones Deseadas</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['WhatsApp', 'MercadoLibre', 'Tiendanube/Shopify', 'Andreani/OCA', 'Zenvia', 'API Custom'].map((tech) => (
                        <label key={tech} className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer">
                          <input type="checkbox" className="rounded text-[var(--color-accent-base)] focus:ring-[var(--color-accent-base)] w-4 h-4 bg-[var(--background)] border-[var(--border)]" />
                          {tech}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="w-full h-12 mt-6 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-semibold hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:scale-100"
                  >
                    {formState === 'submitting' ? 'Enviando...' : 'Quiero mi AGENTino'} 
                    {formState !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Login Card */}
          <div className="flex flex-col space-y-6">
             <div>
              <h2 className="text-2xl font-bold">Acceso Clientes</h2>
              <p className="text-[var(--muted-foreground)] mt-2">
                Ingresa a tu dashboard operativo si ya completaste el onboarding.
              </p>
            </div>

            <div className="bg-[var(--card)]/80 backdrop-blur-md border border-[var(--border)] shadow-xl rounded-2xl p-6 md:p-8 flex flex-col">
              
              <div className="mb-8 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 flex gap-3 text-amber-600 dark:text-amber-500">
                <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <span className="font-bold block mb-1">⚠️ Acceso Exclusivo</span>
                  Si inicias sesión sin haber completado el onboarding técnico con NR Labs, tu agente estará desactivado y la cuenta en modo lectura.
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <a 
                  href="/api/auth/google"
                  className="flex items-center justify-center gap-3 w-full h-12 bg-[var(--background)] border border-[var(--border)] rounded-xl font-medium text-[var(--foreground)] hover:border-[var(--color-accent-base)] hover:text-[var(--color-accent-base)] transition-all duration-300 shadow-sm group"
                >
                  <Chrome className="w-5 h-5 text-[var(--foreground)] group-hover:text-[var(--color-accent-base)] transition-colors" />
                  <span>Continuar con Google</span>
                </a>
                
                <div className="mt-6 space-y-4">
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-[var(--border)]"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase font-bold">
                      <span className="bg-[var(--card)] px-3 text-[var(--muted-foreground)]">Solo Demo Técnica</span>
                    </div>
                  </div>
                  
                  <a 
                    href="/dashboard"
                    className="flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-[var(--muted)] text-[var(--foreground)] text-sm font-medium hover:bg-[var(--border)] transition-all"
                  >
                    Entrar al Dashboard sin Login
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      
      <footer className="w-full py-8 text-center text-xs text-[var(--muted-foreground)] border-t border-[var(--border)]/50 mt-12 z-10 bg-[var(--background)]">
        &copy; {new Date().getFullYear()} AGENTino 🤖 - IA para WhatsApp y E-commerce. by NR Labs. Todos los derechos reservados.
      </footer>
    </div>
  );
}