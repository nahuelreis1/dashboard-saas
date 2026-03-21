import { g as googleAuth } from '../../../chunks/google_lZpr-Xly.mjs';
import { s as sessionManager } from '../../../chunks/session_GqxQkylQ.mjs';
import '../../../chunks/db_jsOZ-v_d.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, cookies, redirect }) => {
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response(JSON.stringify({ error: "Missing code" }), { status: 400 });
  }
  try {
    const tokens = await googleAuth.exchangeCodeForTokens(code);
    const { id, email, name } = tokens.user;
    await sessionManager.create(cookies, {
      userId: id,
      email,
      name,
      accessToken: tokens.access_token
    });
    return redirect("/dashboard");
  } catch (error) {
    console.error("Error during Google Auth callback:", error);
    return new Response(JSON.stringify({ error: "Auth failed" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
