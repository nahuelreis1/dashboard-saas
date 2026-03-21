import { e as createComponent, n as renderHead, r as renderTemplate } from '../chunks/astro/server_BahSWGGF.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>Redirigiendo...</title><meta http-equiv="refresh" content="0;url=/login">${renderHead()}</head> <body class="bg-slate-50 flex items-center justify-center min-h-screen"> <div class="animate-pulse text-slate-400 font-medium">Cargando AI Agents Dashboard...</div> </body></html>`;
}, "/app/ideas/dashboard-saas/dashboard/src/pages/index.astro", void 0);

const $$file = "/app/ideas/dashboard-saas/dashboard/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
