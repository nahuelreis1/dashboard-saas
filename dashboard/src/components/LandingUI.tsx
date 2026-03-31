import React, { useState, useEffect, useRef } from 'react';
import { SiOpenai } from 'react-icons/si';
import { SiWoocommerce, SiShopify, SiWhatsapp, SiN8n, SiGooglegemini, SiLangchain, SiPostgresql, SiDocker, SiLinux, SiJavascript, SiPython } from '@icons-pack/react-simple-icons';
import { Chrome, ShieldAlert, Zap, CheckCircle2, ShoppingCart, Truck, Globe, Brain, Handshake, Link as LinkIcon, Bot } from 'lucide-react';

export default function LandingUI() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  // Spotlight & Mate Follower Logic
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const followerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Exact spotlight
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(139, 92, 246, 0.08), transparent 40%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const render = () => {
      // LERP formula for smooth trailing effect
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.08;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.08;

      if (followerRef.current) {
        // Offset by 15px so it sits slightly to the bottom-right of the actual cursor
        followerRef.current.style.transform = `translate3d(${followerPos.current.x + 15}px, ${followerPos.current.y + 15}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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

  const techIconsList = [
    { name: 'n8n', icon: SiN8n, color: '#FF6D5A' },
    { name: 'Gemini', icon: SiGooglegemini, color: '#8E75B2' },
    { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
    { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' }
  ];

  const doubledTechIcons = [...techIconsList, ...techIconsList, ...techIconsList];

  const formInterests = [
    { id: 'soporte', label: 'Soporte Técnico', icon: <Brain size={20} className="text-blue-500" /> },
    { id: 'ventas', label: 'Ventas E-commerce', icon: <ShoppingCart size={20} className="text-purple-500" /> },
    { id: 'interna', label: 'Gestión Interna', icon: <Bot size={20} className="text-emerald-500" /> },
    { id: 'zenvia', label: 'Zenvia', icon: <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50" alt="Zenvia" className="w-5 h-5 object-contain" /> },
    { id: 'whatsapp', label: 'WhatsApp', icon: <SiWhatsapp size={20} color="#25D366" /> },
    { id: 'api', label: 'API Custom', icon: <Globe size={20} className="text-rose-500" /> }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden flex flex-col items-center selection:bg-blue-500/30 font-sans cursor-default">
      
      {/* Spotlight Effect */}
      <div 
        ref={spotlightRef}
        className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500"
        style={{ willChange: 'background' }}
      />

      {/* Agentic Follower */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 z-[100] pointer-events-none flex items-center justify-center w-8 h-8"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-purple-500/60 blur-[16px] rounded-full animate-pulse scale-[2.0]"></div>
        <span className="relative z-10 text-3xl drop-shadow-[0_0_12px_rgba(168,85,247,0.9)] opacity-90 animate-[bounce_4s_infinite]">🧉</span>
      </div>

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
          <span className="text-3xl drop-shadow-md">🤖</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted-foreground)]">
          <a href="#features" className="hover:text-[var(--foreground)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1">Características</a>
          <a href="#zenvia" className="hover:text-[var(--foreground)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1">Por qué elegirnos</a>
          <a href="#onboarding" className="px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]">
            Solicitar Acceso
          </a>
        </div>
      </nav>

      <main className="w-full px-4 sm:px-6 py-12 md:py-16 z-10 flex-1 flex flex-col items-center">
        
        {/* Section 1: Header & Carousel */}
        <section className="w-full max-w-7xl flex flex-col items-center">
          <div className="text-center mb-16 md:mb-20 space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--muted)]/50 backdrop-blur-md text-sm font-medium text-[var(--muted-foreground)] mb-4 shadow-sm">
              <span className="flex w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Plataforma B2B para Alta Demanda
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
              Agentes de Inteligencia Artificial <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-rose-400 animate-gradient-x">
                a la medida de tu empresa
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted-foreground)] font-medium max-w-3xl mx-auto leading-relaxed">
              Automatiza ventas, escala tu soporte técnico y optimiza operaciones. Construimos cerebros digitales avanzados que se integran perfectamente a tu ecosistema actual, para que vos te enfoques en crecer.
            </p>
          </div>

          <div className="w-full mb-24 md:mb-32">
            <p className="text-center text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-[0.2em] mb-10">
              Integración nativa con tu ecosistema operativo
            </p>
            
            <div className="relative flex overflow-hidden w-full group py-4">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex w-max animate-marquee items-center gap-20 md:gap-32 px-10 group-hover:[animation-play-state:paused]">
                {doubledIntegrations.map((item, i) => (
                  <div 
                    key={`int-${i}`} 
                    className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 active:opacity-100 min-w-[100px] hover:scale-110 active:scale-110 cursor-pointer tap-highlight-transparent active:drop-shadow-[0_0_15px_var(--icon-color)]"
                    style={{ '--icon-color': item.color || 'rgba(255,255,255,0.5)', WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
                  >
                    {item.isImg ? (
                      <img src={item.src} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg" referrerPolicy="no-referrer" />
                    ) : item.icon ? (
                      <item.icon size={80} color={item.color} className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <p className="text-center text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-[0.2em] mb-10">
                Impulsado por tecnología de clase mundial
              </p>
              
              <div className="relative flex overflow-hidden w-full group py-4">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex w-max animate-marquee-reverse items-center gap-20 md:gap-32 px-10 group-hover:[animation-play-state:paused]">
                  {doubledTechIcons.map((item, i) => (
                    <div 
                      key={`tech-${i}`} 
                      className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 active:opacity-100 min-w-[100px] hover:scale-110 active:scale-110 cursor-pointer tap-highlight-transparent active:drop-shadow-[0_0_15px_var(--icon-color)]"
                      style={{ '--icon-color': item.color || 'rgba(255,255,255,0.5)', WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
                    >
                      <item.icon size={64} color={item.color} className="w-16 h-16 drop-shadow-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Value Props */}
        <section id="features" className="w-full max-w-7xl mx-auto mb-32 md:mb-40 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Mucho más que un simple chatbot
            </h2>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              Construimos el motor de inteligencia de tu empresa. Sin respuestas genéricas. Sin callejones sin salida.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[var(--card)]/60 backdrop-blur-xl border border-[var(--border)] p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-500/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Soluciones Cognitivas Adaptables</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
                Nuestros agentes van más allá de un simple FAQ. Comprenden contexto complejo, resuelven problemas técnicos, sincronizan datos con tu e-commerce y toman decisiones en tiempo real.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[var(--card)]/60 backdrop-blur-xl border border-[var(--border)] p-8 md:p-10 rounded-3xl shadow-xl shadow-purple-500/5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Acompañamiento Estratégico</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
                No te entregamos una herramienta y desaparecemos. Nos encargamos del setup completo, realizamos fine-tuning continuo de los modelos y evolucionamos el agente a medida que tu negocio crece.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[var(--card)]/60 backdrop-blur-xl border border-[var(--border)] p-8 md:p-10 rounded-3xl shadow-xl shadow-emerald-500/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 group">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <LinkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integración Omnicanal</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
                Nos conectamos a tus herramientas actuales sin fricción. Ya sea WhatsApp nativo, tu instancia de Zenvia, CRMs corporativos o tu tienda online, el agente se integra como un empleado más.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Zenvia Deep Dive */}
        <section id="zenvia" className="w-full max-w-6xl mx-auto mb-32 md:mb-40 scroll-mt-24">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1e1533] to-[#2d1b4e] border border-purple-500/30 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_50px_rgba(147,51,234,0.15)] group hover:border-purple-500/50 transition-colors">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-purple-500/10 blur-[100px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-70"></div>
            
            <div className="flex-1 relative z-10 space-y-6 text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-200 text-sm font-bold tracking-wide uppercase shadow-inner">
                <Bot className="w-4 h-4 mr-2" />
                El Upgrade Definitivo
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                ¿Ya usás Zenvia?
              </h2>
              <div className="space-y-5 text-purple-100/90 text-lg md:text-xl leading-relaxed">
                <p>
                  Zenvia es un CRM excelente, pero reconozcámoslo: <strong>sus bots nativos son básicos, rígidos y basados en flujos de botones interminables.</strong>
                </p>
                <p>
                  <strong className="text-white text-xl">AGENTino es el "Cerebro" que le falta a tu operación.</strong> Armamos agentes verdaderamente inteligentes y superiores. Los conectamos a tus bases de datos y operan directamente dentro de tu Zenvia (que sigue siendo tu bandeja de entrada de siempre).
                </p>
              </div>
            </div>
            
            <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center py-8">
               {/* Visual representation */}
               <div className="relative flex items-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md z-20 hover:scale-105 transition-transform">
                     <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/de9596d6-81a8-4986-94e7-b781c49046a1.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50" alt="Zenvia" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded drop-shadow-md" />
                  </div>
                  <div className="w-12 md:w-20 h-1.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 z-10 relative rounded-full mx-[-4px]">
                     <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                  </div>
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] z-20 relative overflow-hidden hover:scale-105 transition-transform">
                     <div className="absolute inset-0 bg-white/10 animate-[ping_3s_ease-in-out_infinite]"></div>
                     <span className="text-5xl md:text-6xl drop-shadow-xl relative z-10">🧠</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 4: CTA Final (Forms) */}
        <section id="onboarding" className="w-full max-w-7xl mx-auto scroll-mt-24">
          <div className="grid lg:grid-cols-5 gap-12 w-full items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-3 flex flex-col space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Solicitar Onboarding</h2>
                <p className="text-[var(--muted-foreground)] mt-3 text-lg">
                  Agendá un kickoff técnico con nosotros para evaluar la arquitectura de tu agente y cómo integrarlo en tu negocio.
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
                        <label htmlFor="empresa" className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Empresa</label>
                        <input id="empresa" required type="text" placeholder="Ej: Acme Corp" className="w-full h-12 px-4 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-[var(--foreground)]" />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Email Corporativo</label>
                        <input id="email" required type="email" placeholder="ceo@empresa.com" className="w-full h-12 px-4 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-[var(--foreground)]" />
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Áreas de Interés y Stack</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {formInterests.map((tech) => {
                          const isSelected = selectedTechs.includes(tech.id);
                          return (
                            <div 
                              key={tech.id} 
                              onClick={() => toggleTech(tech.id)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') toggleTech(tech.id);
                              }}
                              role="checkbox"
                              aria-checked={isSelected}
                              tabIndex={0}
                              className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
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
                      className="w-full min-h-[56px] mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)]"
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Acceso Operativo</h2>
                <p className="text-[var(--muted-foreground)] mt-3 text-lg">
                  Ingresá a la consola de control de tu asistente.
                </p>
              </div>

              <div className="bg-[var(--card)]/80 backdrop-blur-xl border border-[var(--border)] shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden h-full min-h-[400px]">
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
                    className="flex items-center justify-center gap-3 w-full min-h-[56px] bg-[var(--background)] border border-[var(--border)] rounded-xl font-bold text-[var(--foreground)] hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-500 transition-all duration-300 shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
                    className="flex items-center justify-center gap-2 w-full min-h-[48px] rounded-xl bg-[var(--muted)]/50 text-[var(--foreground)] text-sm font-medium hover:bg-[var(--muted)] hover:shadow-inner transition-all border border-transparent hover:border-[var(--border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Entrar al Sandbox Local
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      
      <footer className="w-full py-10 mt-20 text-center border-t border-[var(--border)]/50 z-10 bg-[var(--background)]/80 backdrop-blur-lg">
        <p className="text-sm font-medium text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} <span className="text-[var(--foreground)] font-bold">AGENTino 🤖</span> by NR Labs. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
