import { g as googleAuth } from '../../../chunks/google_lZpr-Xly.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ redirect }) => {
  const authUrl = googleAuth.getAuthUrl();
  return redirect(authUrl);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
