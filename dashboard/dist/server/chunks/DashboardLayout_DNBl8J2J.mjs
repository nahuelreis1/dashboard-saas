import { e as createComponent, r as renderTemplate, l as renderSlot, k as renderComponent, g as addAttribute, n as renderHead, h as createAstro } from './astro/server_BahSWGGF.mjs';
import 'piccolore';
import { LayoutDashboard, BookOpen, Settings, LogOut, Moon, Sun, Zap } from 'lucide-react';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title } = Astro2.props;
  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/knowledge", icon: BookOpen, label: "Conocimiento" },
    { href: "/config", icon: Settings, label: "Configuraci\xF3n" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", ' | NR Labs Agent SaaS</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">', '</head> <body class="min-h-screen bg-[var(--background)] text-[var(--foreground)]"> <div class="flex h-screen overflow-hidden"> <!-- Sidebar --> <aside id="sidebar" class="group flex flex-col w-64 bg-[var(--card)] border-r border-[var(--border)] transition-all duration-300 ease-in-out relative z-30"> <div class="p-6 flex items-center gap-3"> <div class="w-8 h-8 rounded-lg bg-[var(--color-accent-base)] flex items-center justify-center shadow-lg shadow-accent-base/20"> ', ' </div> <span class="font-bold text-xl tracking-tight group-data-[collapsed=true]:hidden">NR Labs</span> </div> <nav class="flex-1 px-4 space-y-1 mt-4"> ', ' </nav> <div class="p-4 mt-auto border-t border-[var(--border)]"> <button id="theme-toggle" class="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-all" aria-label="Toggle dark mode"> ', " ", ' <span class="font-medium group-data-[collapsed=true]:hidden">Cambiar Tema</span> </button> <button class="flex items-center gap-3 w-full px-3 py-2 mt-1 rounded-lg text-[var(--muted-foreground)] hover:bg-destructive/10 hover:text-destructive transition-all"> ', ' <span class="font-medium group-data-[collapsed=true]:hidden">Cerrar Sesi\xF3n</span> </button> </div> </aside> <!-- Main Content --> <main class="flex-1 overflow-y-auto bg-[var(--background)]/50 relative"> <header class="sticky top-0 z-20 h-16 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md flex items-center justify-between px-8"> <h1 class="text-lg font-semibold">', '</h1> <div class="flex items-center gap-4"> <div class="flex flex-col items-end"> <span class="text-sm font-medium">Nahuel Reis</span> <span class="text-xs text-[var(--muted-foreground)]">Admin</span> </div> <div class="w-10 h-10 rounded-full bg-[var(--color-accent-base)]/20 border border-[var(--color-accent-base)]/30 flex items-center justify-center overflow-hidden"> <img src="https://ui-avatars.com/api/?name=Nahuel+Reis&background=e11d48&color=fff" alt="Avatar"> </div> </div> </header> <div class="p-8 max-w-7xl mx-auto"> ', " </div> </main> </div> <script>\n      const themeToggle = document.getElementById('theme-toggle');\n      const doc = document.documentElement;\n\n      // Init theme\n      const theme = (() => {\n        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n          return localStorage.getItem('theme');\n        }\n        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n          return 'dark';\n        }\n        return 'light';\n      })();\n\n      if (theme === 'light') {\n        doc.classList.remove('dark');\n      } else {\n        doc.classList.add('dark');\n      }\n\n      themeToggle.addEventListener('click', () => {\n        const isDark = doc.classList.contains('dark');\n        doc.classList.toggle('dark');\n        localStorage.setItem('theme', isDark ? 'light' : 'dark');\n      });\n    <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Zap", Zap, { "className": "w-5 h-5 text-white" }), navItems.map((item) => {
    const Icon = item.icon;
    const isActive = currentPath === item.href;
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`
                  flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group/item
                  ${isActive ? "bg-[var(--color-accent-base)]/10 text-[var(--color-accent-base)] border-l-4 border-[var(--color-accent-base)] pl-2" : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"}
                `, "class")}> ${renderComponent($$result, "Icon", Icon, { "className": `w-5 h-5 ${isActive ? "text-[var(--color-accent-base)]" : "group-hover/item:text-[var(--color-accent-base)]/70 transition-colors"}` })} <span class="font-medium group-data-[collapsed=true]:hidden">${item.label}</span> </a>`;
  }), renderComponent($$result, "Sun", Sun, { "id": "sun-icon", "className": "w-5 h-5 hidden dark:block" }), renderComponent($$result, "Moon", Moon, { "id": "moon-icon", "className": "w-5 h-5 block dark:hidden" }), renderComponent($$result, "LogOut", LogOut, { "className": "w-5 h-5" }), title, renderSlot($$result, $$slots["default"]));
}, "/app/ideas/dashboard-saas/dashboard/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
