import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BahSWGGF.mjs';
import 'piccolore';
import { $ as $$DashboardLayout } from '../chunks/DashboardLayout_DNBl8J2J.mjs';
import { F as FileUploader } from '../chunks/FileUploader_C7pK7jZH.mjs';
export { renderers } from '../renderers.mjs';

const $$Knowledge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Base de Conocimiento" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <div> <div class="mb-8"> <h3 class="text-lg font-bold text-slate-900 mb-2">Alimenta a tu Agente</h3> <p class="text-slate-500">
Sube manuales de producto, FAQs, o documentos técnicos. 
          El agente indexará esta información y la usará como fuente de verdad (RAG) 
          para evitar alucinaciones.
</p> </div> ${renderComponent($$result2, "FileUploader", FileUploader, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/app/ideas/dashboard-saas/dashboard/src/components/FileUploader", "client:component-export": "default" })} </div> <div class="space-y-6"> <div class="bg-blue-50 border border-blue-100 p-6 rounded-xl"> <h4 class="text-blue-900 font-bold mb-2 flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
Sugerencia Pro
</h4> <p class="text-sm text-blue-800 leading-relaxed">
Los archivos PDF con texto seleccionable funcionan mejor que las imágenes escaneadas. 
          Asegúrate de que tus documentos estén limpios de caracteres extraños para una mejor indexación.
</p> </div> <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-sm"> <h4 class="text-slate-900 font-bold mb-4">Estado de Indexación</h4> <div class="space-y-4"> <div class="flex justify-between items-center text-sm"> <span class="text-slate-600">Total de Documentos</span> <span class="font-bold">12</span> </div> <div class="flex justify-between items-center text-sm"> <span class="text-slate-600">Almacenamiento Usado</span> <span class="font-bold text-blue-600">14.5 MB / 100 MB</span> </div> <div class="w-full bg-slate-100 rounded-full h-2"> <div class="bg-blue-500 h-2 rounded-full w-[15%]"></div> </div> </div> </div> </div> </div> ` })}`;
}, "/app/ideas/dashboard-saas/dashboard/src/pages/knowledge.astro", void 0);

const $$file = "/app/ideas/dashboard-saas/dashboard/src/pages/knowledge.astro";
const $$url = "/knowledge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Knowledge,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
