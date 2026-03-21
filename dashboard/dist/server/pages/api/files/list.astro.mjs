import { s as sessionManager } from '../../../chunks/session_GqxQkylQ.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session) return new Response("Unauthorized", { status: 401 });
  const files = [
    {
      id: "1",
      name: "manual_usuario.pdf",
      type: "application/pdf",
      status: "processed",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "2",
      name: "precios_2025.csv",
      type: "text/csv",
      status: "processing",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  ];
  return new Response(JSON.stringify({ files }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
