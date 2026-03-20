/**
 * Prompt Builder Utility
 * Formats the system prompt based on agent configuration
 */

export interface AgentConfig {
  name: string;
  role: string;
  company_name: string;
  tone: 'professional' | 'friendly' | 'casual' | 'witty';
  main_goal: string;
  additional_instructions?: string;
  knowledge_base_ref?: string;
}

export function buildSystemPrompt(config: AgentConfig): string {
  const {
    name,
    role,
    company_name,
    tone,
    main_goal,
    additional_instructions = '',
    knowledge_base_ref = ''
  } = config;

  return `
Eres ${name}, un agente de IA especializado en el rol de ${role} para la empresa ${company_name}.

TU OBJETIVO PRINCIPAL:
${main_goal}

TU TONO DE VOZ:
Debes comunicarte con un tono ${tone}.

${knowledge_base_ref ? `BASE DE CONOCIMIENTO:
Utiliza la información de los documentos proporcionados para responder de manera precisa.` : ''}

INSTRUCCIONES ADICIONALES:
${additional_instructions}

REGLAS CRÍTICAS:
1. Sé conciso pero útil.
2. Si no sabes algo, admítelo y ofrece ayuda en temas relacionados.
3. Mantén siempre el personaje de ${name}.
`.trim();
}
