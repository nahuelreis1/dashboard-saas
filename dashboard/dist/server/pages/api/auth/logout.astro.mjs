import { s as sessionManager } from '../../../chunks/session_GqxQkylQ.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies, redirect }) => {
  sessionManager.destroy(cookies);
  return redirect("/login");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
