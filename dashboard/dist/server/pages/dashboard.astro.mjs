import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_BahSWGGF.mjs';
import 'piccolore';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_DNBl8J2J.mjs';
import { Coins, MessageSquare, Activity, TrendingUp, ArrowUpRight, Plus } from 'lucide-react';
import { A as AgentConfigForm } from '../chunks/AgentConfigForm_DpvaVl5O.mjs';
import { F as FileUploader } from '../chunks/FileUploader_C7pK7jZH.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { label: "Tokens Consumidos", value: "1.2M", trend: "+12%", icon: Coins, color: "text-blue-500" },
    { label: "Conversaciones", value: "4,829", trend: "+5.4%", icon: MessageSquare, color: "text-emerald-500" },
    { label: "Costo Estimado", value: "$124.50", trend: "-2.1%", icon: Activity, color: "text-[var(--color-accent-base)]" }
  ];
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Panel Principal" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> ${stats.map((stat) => {
    const Icon = stat.icon;
    const isPositive = stat.trend.startsWith("+");
    return renderTemplate`<div class="glass-card p-6 flex items-center justify-between group hover:border-[var(--color-accent-base)]/30 transition-all"> <div> <p class="text-sm font-medium text-[var(--muted-foreground)]">${stat.label}</p> <h3 class="text-3xl font-bold mt-1 tracking-tight">${stat.value}</h3> <div${addAttribute(`flex items-center gap-1 mt-2 text-xs font-medium ${isPositive ? "text-emerald-500" : "text-[var(--color-accent-base)]"}`, "class")}> ${renderComponent($$result2, "TrendingUp", TrendingUp, { "className": "w-3 h-3" })} <span>${stat.trend} este mes</span> </div> </div> <div${addAttribute(`p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 ${stat.color} group-hover:scale-110 transition-transform`, "class")}> ${renderComponent($$result2, "Icon", Icon, { "className": "w-6 h-6" })} </div> </div>`;
  })} </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Main Configuration Section (2 columns) --> <div class="lg:col-span-2 space-y-8"> <section> <div class="flex items-center justify-between mb-4"> <h2 class="text-xl font-bold">Configuración del Agente</h2> <button class="text-sm text-[var(--color-accent-base)] font-medium flex items-center gap-1 hover:underline">
Ver documentación ${renderComponent($$result2, "ArrowUpRight", ArrowUpRight, { "className": "w-3 h-3" })} </button> </div> <div class="glass-card p-8"> ${renderComponent($$result2, "AgentConfigForm", AgentConfigForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/ideas/dashboard-saas/dashboard/src/components/AgentConfigForm", "client:component-export": "default" })} </div> </section> <section> <div class="flex items-center justify-between mb-4"> <h2 class="text-xl font-bold">Base de Conocimiento</h2> <span class="text-xs px-2 py-1 rounded-full bg-[var(--color-accent-base)]/10 text-[var(--color-accent-base)] font-medium uppercase tracking-wider">Embeddings</span> </div> <div class="glass-card p-8"> ${renderComponent($$result2, "FileUploader", FileUploader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/ideas/dashboard-saas/dashboard/src/components/FileUploader", "client:component-export": "default" })} </div> </section> </div> <!-- Sidebar Info/Recent Actions --> <div class="space-y-6"> <div class="glass-card p-6"> <h3 class="font-bold mb-4 flex items-center gap-2"> ${renderComponent($$result2, "Activity", Activity, { "className": "w-4 h-4 text-[var(--color-accent-base)]" })}
Estado del Sistema
</h3> <div class="space-y-4"> <div class="flex items-center justify-between text-sm"> <span class="text-[var(--muted-foreground)]">Modelo</span> <span class="font-medium">Gemini 2.0 Flash</span> </div> <div class="flex items-center justify-between text-sm"> <span class="text-[var(--muted-foreground)]">Latencia Promedio</span> <span class="font-medium">1.2s</span> </div> <div class="flex items-center justify-between text-sm"> <span class="text-[var(--muted-foreground)]">Uptime</span> <span class="text-emerald-500 font-medium">99.9%</span> </div> <div class="mt-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-[10px] text-emerald-600 dark:text-emerald-400 text-center uppercase font-bold tracking-widest">
Sistemas Operativos
</div> </div> </div> <div class="glass-card p-6"> <h3 class="font-bold mb-4">Agentes Activos</h3> <div class="space-y-3"> ${[1, 2, 3].map((i) => renderTemplate`<div class="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--muted)] transition-colors cursor-pointer border border-transparent hover:border-[var(--border)]"> <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div> <div class="flex-1 min-w-0"> <p class="text-sm font-medium truncate">Customer Bot #${i}</p> <p class="text-xs text-[var(--muted-foreground)]">Activo hace 2m</p> </div> <div class="w-2 h-2 rounded-full bg-emerald-500"></div> </div>`)} <button class="w-full mt-2 py-2 flex items-center justify-center gap-2 text-sm font-medium text-[var(--color-accent-base)] border border-dashed border-[var(--color-accent-base)]/30 rounded-lg hover:bg-[var(--color-accent-base)]/5 transition-all"> ${renderComponent($$result2, "Plus", Plus, { "className": "w-4 h-4" })} Nuevo Agente
</button> </div> </div> </div> </div> ` })}`;
}, "/app/ideas/dashboard-saas/dashboard/src/pages/dashboard.astro", void 0);

const $$file = "/app/ideas/dashboard-saas/dashboard/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
