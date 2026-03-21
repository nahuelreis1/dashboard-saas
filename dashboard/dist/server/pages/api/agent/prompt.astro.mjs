import { d as db } from '../../../chunks/db_jsOZ-v_d.mjs';
import { s as sessionManager } from '../../../chunks/session_GqxQkylQ.mjs';
export { renderers } from '../../../renderers.mjs';

function buildSystemPrompt(config) {
  const {
    name,
    role,
    company_name,
    tone,
    main_goal,
    additional_instructions = "",
    knowledge_base_ref = ""
  } = config;
  return `
Eres ${name}, un agente de IA especializado en el rol de ${role} para la empresa ${company_name}.

TU OBJETIVO PRINCIPAL:
${main_goal}

TU TONO DE VOZ:
Debes comunicarte con un tono ${tone}.

${knowledge_base_ref ? `BASE DE CONOCIMIENTO:
Utiliza la información de los documentos proporcionados para responder de manera precisa.` : ""}

INSTRUCCIONES ADICIONALES:
${additional_instructions}

REGLAS CRÍTICAS:
1. Sé conciso pero útil.
2. Si no sabes algo, admítelo y ofrece ayuda en temas relacionados.
3. Mantén siempre el personaje de ${name}.
`.trim();
}

const GET = async ({ cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session) return new Response("Unauthorized", { status: 401 });
  try {
    const { rows } = await db.query(
      "SELECT config FROM agent_configs WHERE user_id = $1 LIMIT 1",
      [session.userId]
    );
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "No config found" }), { status: 404 });
    }
    const systemPrompt = buildSystemPrompt(rows[0].config);
    return new Response(JSON.stringify({ systemPrompt }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("Error fetching prompt:", e);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
