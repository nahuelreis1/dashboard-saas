import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BahSWGGF.mjs';
import 'piccolore';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_DNBl8J2J.mjs';
import { A as AgentConfigForm } from '../chunks/AgentConfigForm_DpvaVl5O.mjs';
export { renderers } from '../renderers.mjs';

const $$Config = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Configuraci\xF3n del Agente" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl"> <div class="mb-8"> <h3 class="text-lg font-bold text-slate-900 mb-2">Personaliza la Inteligencia</h3> <p class="text-slate-500">
Aquí es donde defines quién es tu agente, qué sabe hacer y cuál es su tono de voz. 
        Este prompt se envía junto con cada mensaje para guiar a la IA.
</p> </div> ${renderComponent($$result2, "AgentConfigForm", AgentConfigForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/ideas/dashboard-saas/dashboard/src/components/AgentConfigForm", "client:component-export": "default" })} </div> ` })}`;
}, "/app/ideas/dashboard-saas/dashboard/src/pages/config.astro", void 0);

const $$file = "/app/ideas/dashboard-saas/dashboard/src/pages/config.astro";
const $$url = "/config";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Config,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
