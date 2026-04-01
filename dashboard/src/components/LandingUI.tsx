import React, { useState, useEffect, useRef } from 'react';
import { SiOpenai } from 'react-icons/si';
import { SiWoocommerce, SiShopify, SiWhatsapp, SiN8n, SiGooglegemini, SiLangchain, SiPostgresql, SiDocker, SiLinux, SiJavascript, SiPython } from '@icons-pack/react-simple-icons';
import { Zap, CheckCircle2, ShoppingCart, Globe, Brain, Handshake, Link as LinkIcon, Bot, MessageSquare } from 'lucide-react';

const PoweredByLogos = ({ className = '', size = 'md' }: { className?: string, size?: 'sm' | 'md' }) => {
  const svgClass = size === 'sm' ? 'h-5 w-auto' : 'h-10 w-auto';
  const imgClass = size === 'sm' ? 'h-4 w-auto' : 'h-7 md:h-8 w-auto';
  const gapClass = size === 'sm' ? 'gap-4' : 'gap-8 md:gap-12';
  const dividerClass = size === 'sm' ? 'h-4' : 'h-8';

  return (
    <div className={`flex items-center ${gapClass} ${className}`}>
      <div className="text-white flex items-center">
        <svg
          viewBox="1000 1300 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${svgClass} opacity-80 hover:opacity-100 transition-opacity`}
        >
          <g transform="translate(0,3328) scale(0.1,-0.1)" fill="currentColor" stroke="none">
            <path
              fillRule="evenodd"
              d="M 11938.0 19678.0  c120 -123 269 -277 332 -343 63 -66 253 -262 421 -435 168 -173 388 -401 490 -506 248 -259 971 -1005 1531 -1581 252 -259 481 -497 509 -527 28 -31 55 -56 60 -56 6 0 9 531 9 1323 0 727 0 1345 0 1372 l1 50 23 -65 c68 -194 195 -346 373 -446 l83 -46 2 -1687 c2 -927 2 -1688 0 -1691 -4 -6 -825 832 -1597 1630 -296 307 -1130 1165 -1360 1400 -110 113 -445 458 -744 768 l-543 562 -379 0 -379 0 2 -3297 3 -3298 320 0 320 0 3 2098 c1 1154 6 2097 10 2095 8 -3 473 -482 882 -909 146 -152 580 -601 965 -998 385 -397 812 -837 949 -979 137 -141 385 -396 550 -567 166 -170 393 -406 505 -523 112 -117 213 -215 225 -217 11 -3 242 -4 511 -3 l490 3 5 2811 5 2812 60 45 c70 52 180 164 220 225 l28 42 1347 0 1347 0 119 -122 c65 -68 241 -250 392 -405 l274 -283 -1 -602 -1 -602 -133 -136 c-261 -268 -406 -417 -533 -552 l-129 -137 -1252 -1 -1253 0 0 -330 0 -330 919 0 918 0 73 -127 c41 -71 122 -209 181 -308 58 -99 174 -299 257 -445 82 -146 223 -389 312 -540 181 -305 211 -356 438 -745 l157 -270 379 -3 c340 -2 378 -1 372 13 -6 17 -87 158 -256 445 -134 228 -435 745 -595 1020 -43 74 -115 198 -160 275 -45 77 -109 187 -142 245 -34 58 -102 175 -152 262 -50 86 -91 161 -91 167 0 7 28 11 78 11 l77 0 310 321 c171 177 437 455 593 618 l282 295 0 860 0 859 -112 116 c-62 64 -326 335 -588 603 l-475 488 -1435 0 -1435 0 -23 83 c-31 113 -99 223 -196 319 -43 43 -76 82 -72 86 4 4 761 8 1681 10 l1674 2 118 -122 c178 -185 899 -923 1145 -1173 l218 -220 0 -1049 0 -1049 -102 -106 c-57 -58 -202 -207 -323 -331 -121 -124 -299 -308 -396 -410 -96 -102 -219 -231 -272 -287 l-97 -101 83 -144 c418 -721 808 -1390 1045 -1793 254 -432 452 -781 452 -796 0 -5 -374 -9 -918 -9 -863 0 -920 1 -934 18 -26 29 -312 509 -543 912 -144 251 -170 296 -428 735 -113 193 -259 445 -325 560 l-120 210 -119 5 c-184 9 -1363 12 -1411 4 l-42 -7 0 -1202 c0 -662 -3 -1210 -6 -1219 -6 -14 -90 -16 -853 -16 l-847 0 -410 423 c-226 232 -489 503 -585 603 -182 189 -726 749 -1054 1084 -176 180 -669 692 -1133 1174 -106 111 -197 202 -202 204 -5 2 -8 -724 -7 -1740 l2 -1743 -810 0 -810 0 -3 3780 c-1 2079 0 3786 3 3793 3 9 157 12 720 12 l717 0 216 -222 z M 11501.0 18503.0  c133 -141 1013 -1048 1248 -1288 135 -138 406 -414 601 -615 195 -201 462 -475 595 -610 132 -135 351 -360 485 -500 135 -140 378 -392 540 -560 862 -891 798 -823 800 -860 1 -19 2 -165 1 -325 l-1 -290 -138 140 c-75 77 -376 385 -667 685 -552 567 -802 824 -1190 1220 -127 129 -307 314 -400 410 -94 96 -285 292 -425 435 -140 143 -437 447 -660 675 -222 228 -509 521 -637 650 l-233 235 0 333 c0 182 4 332 8 332 5 0 38 -30 73 -67 z M17000 17320 l0 -930 1154 0 1155 0 255 267 256 267 0 402 0 402 -256 261 -256 261 -1154 0 -1154 0 0 -930z"
            />
            <circle cx="16150" cy="19100" r="390" fill="#EF4444">
              <animate
                attributeName="cy"
                values="19100; 19100; 13500; 19100; 19100"
                keyTimes="0; 0.2; 0.5; 0.8; 1"
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
              />
              <animate
                attributeName="r"
                values="390; 390; 350; 390; 390"
                keyTimes="0; 0.2; 0.5; 0.8; 1"
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
              />
            </circle>
          </g>
        </svg>
      </div>
      <div className={`w-px bg-white/20 ${dividerClass}`}></div>
      <img 
        src="https://www.axyoma.com.ar/wp-content/uploads/2025/10/logo-axyoma-scaled.png" 
        alt="Axyoma" 
        className={`${imgClass} object-contain opacity-80 hover:opacity-100 transition-opacity invert dark:invert-0`} 
      />
    </div>
  );
};

export default function LandingUI() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      // Enviar webhook a n8n
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          empresa,
          email,
          interests: selectedTechs,
          description
        }),
      });
      
      setFormState('success');
    } catch (error) {
      console.error('Error enviando formulario:', error);
      // En caso de error, mostrar success igual para no romper el flujo del usuario (o manejar el error propiamente)
      setFormState('success');
    }
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
      
      {/* Background with mesh gradient & subtle noise */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712]"></div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

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
          <div className="relative flex items-end mr-3">
            <span className="text-4xl relative z-10 animate-robot-glow">🤖</span>
            <span className="text-[1.4rem] absolute -right-4 -bottom-1 z-20 animate-mate-drink" style={{ transformOrigin: 'bottom left' }}>🧉</span>
            <span className="absolute -top-3 -right-10 text-[10px] font-mono text-blue-400 font-bold opacity-0 animate-data-float tracking-widest">
              _sync()
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--muted-foreground)]">
          <a href="#features" className="hover:text-[var(--foreground)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1">Características</a>
          <a href="#zenvia" className="hover:text-[var(--foreground)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1">Por qué elegirnos</a>
          
          <a href="#onboarding" className="px-5 py-2.5 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]">
            Solicitar Acceso
          </a>
        </div>
      </nav>

      <main className="w-full px-4 sm:px-6 py-12 md:py-16 z-10 flex-1 flex flex-col items-center">
        
        {/* Section 1: Header & Carousel */}
        <section className="w-full max-w-7xl flex flex-col items-center">
          <div className="text-center mb-16 md:mb-20 space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[var(--border)] bg-white/5 backdrop-blur-md text-sm font-medium text-white/80 mb-4 shadow-sm">
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
            
            {/* Pequeña mención Powered by en el Hero */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Powered by</span>
              <PoweredByLogos size="sm" />
            </div>
          </div>

          <div className="w-full mb-24 md:mb-32 relative">
            <p className="text-center text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-[0.2em] mb-10">
              Integración nativa con tu ecosistema operativo
            </p>
            
            <div 
              className="relative flex overflow-hidden w-full group py-4"
              style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
            >
              <div className="flex w-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex animate-marquee shrink-0 items-center gap-20 md:gap-32 px-10 md:px-16 group-hover:[animation-play-state:paused]" aria-hidden={i > 0 ? "true" : undefined}>
                    {integrationsList.map((item, j) => (
                      <div 
                        key={`int-${i}-${j}`} 
                        className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 active:opacity-100 min-w-[100px] hover:scale-110 active:scale-110 cursor-pointer tap-highlight-transparent active:drop-shadow-[0_0_15px_var(--icon-color)]"
                        style={{ '--icon-color': item.color || 'rgba(255,255,255,0.5)', WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
                      >
                        {item.isImg ? (
                          <img src={item.src} alt={item.name} className={`w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg ${item.name === 'Zenvia' ? 'bg-white p-2 md:p-3 rounded-2xl' : ''}`} referrerPolicy="no-referrer" />
                        ) : item.icon ? (
                          <item.icon size={80} color={item.color} className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 relative">
              <p className="text-center text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-[0.2em] mb-10">
                Impulsado por tecnología de clase mundial
              </p>
              
              <div 
                className="relative flex overflow-hidden w-full group py-4"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
              >
                <div className="flex w-full">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex animate-marquee-reverse shrink-0 items-center gap-20 md:gap-32 px-10 md:px-16 group-hover:[animation-play-state:paused]" aria-hidden={i > 0 ? "true" : undefined}>
                      {techIconsList.map((item, j) => (
                        <div 
                          key={`tech-${i}-${j}`} 
                          className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 active:opacity-100 min-w-[100px] hover:scale-110 active:scale-110 cursor-pointer tap-highlight-transparent active:drop-shadow-[0_0_15px_var(--icon-color)]"
                          style={{ '--icon-color': item.color || 'rgba(255,255,255,0.5)', WebkitTapHighlightColor: 'transparent' } as React.CSSProperties}
                        >
                          <item.icon size={64} color={item.color} className="w-16 h-16 drop-shadow-lg" />
                        </div>
                      ))}
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
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl p-8 md:p-10 rounded-3xl hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Soluciones Cognitivas Adaptables</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Nuestros agentes van más allá de un simple FAQ. Comprenden contexto complejo, resuelven problemas técnicos, sincronizan datos con tu e-commerce y toman decisiones en tiempo real.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl p-8 md:p-10 rounded-3xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Acompañamiento Estratégico</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                No te entregamos una herramienta y desaparecemos. Nos encargamos del setup completo, realizamos fine-tuning continuo de los modelos y evolucionamos el agente a medida que tu negocio crece.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl p-8 md:p-10 rounded-3xl hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <LinkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integración Omnicanal</h3>
              <p className="text-white/70 leading-relaxed text-lg">
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

        {/* Section 4: Hero Form (Majestic & Premium) */}
        <section id="onboarding" className="w-full max-w-4xl mx-auto scroll-mt-24 mb-16">
          <div className="flex flex-col space-y-8 items-center text-center mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-sm">Transformá tu Operación</h2>
              <p className="text-[var(--muted-foreground)] mt-4 text-xl max-w-2xl mx-auto">
                Agendá un kickoff técnico con nosotros. Evaluaremos la arquitectura de tu agente y cómo integrarlo en tu negocio en tiempo récord.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_0_60px_rgba(59,130,246,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4 ring-8 ring-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-extrabold text-white">¡Solicitud Recibida!</h3>
                <p className="text-[var(--muted-foreground)] text-xl max-w-lg leading-relaxed">
                  Nuestro equipo de ingeniería ya está analizando tu caso de uso. Te contactaremos en menos de 24hs para coordinar el kickoff.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="empresa" className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Nombre de la Empresa
                    </label>
                    <input 
                      id="empresa" 
                      required 
                      type="text" 
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Ej: Acme Corp" 
                      className="w-full h-14 px-5 rounded-2xl bg-[#030712]/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none text-white text-lg backdrop-blur-md placeholder:text-white/20" 
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Email Corporativo
                    </label>
                    <input 
                      id="email" 
                      required 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ceo@empresa.com" 
                      className="w-full h-14 px-5 rounded-2xl bg-[#030712]/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none text-white text-lg backdrop-blur-md placeholder:text-white/20" 
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Seleccioná tu Stack y Objetivos
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                          className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 backdrop-blur-md ${
                            isSelected 
                              ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] transform scale-[1.02]' 
                              : 'bg-[#030712]/30 border-white/5 hover:border-white/20 hover:bg-white/5'
                          }`}
                        >
                          <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-colors duration-300 ${isSelected ? 'bg-blue-500/20' : 'bg-black/30 group-hover:bg-black/50'} border border-white/10`}>
                            {tech.icon}
                          </div>
                          <span className={`text-sm font-bold text-center ${isSelected ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                            {tech.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label htmlFor="description" className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Descripción / Caso de Uso
                  </label>
                  <div className="relative">
                    <textarea 
                      id="description" 
                      required 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Contanos brevemente qué problema querés resolver o qué proceso querés automatizar..." 
                      className="w-full min-h-[120px] p-5 rounded-2xl bg-[#030712]/50 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none text-white text-lg backdrop-blur-md placeholder:text-white/20 resize-y" 
                    />
                    <MessageSquare className="absolute top-5 right-5 w-6 h-6 text-white/10" />
                  </div>
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full h-16 mt-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-extrabold text-xl shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:scale-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/50"
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Procesando Solicitud...
                    </span>
                  ) : (
                    <>
                      Desplegar Mi Agente <Zap className="w-6 h-6" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

      </main>
      
      <footer className="w-full py-12 mt-10 border-t border-white/10 z-10 bg-[#030712]/80 backdrop-blur-lg flex flex-col items-center justify-center gap-8 relative overflow-hidden">
        {/* Subtle glow for the footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm h-[100px] bg-blue-500/10 blur-[80px] pointer-events-none"></div>
        
        <div className="flex flex-col items-center gap-5 z-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            Desarrollado en alianza por
          </span>
          <PoweredByLogos size="md" />
        </div>

        <p className="text-sm font-medium text-[var(--muted-foreground)] z-10">
          &copy; {new Date().getFullYear()} <span className="text-white font-bold">AGENTino 🤖</span>. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
