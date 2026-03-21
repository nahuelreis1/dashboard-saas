export interface AgentConfig {
  agent_name?: string;
  company_name: string;
  company_description?: string;
  company_info?: any;
  tone?: string;
  actions?: string[] | any;
  custom_prompt_additions?: string;
}

export function buildSystemPrompt(config: AgentConfig): string {
  const {
    agent_name = 'Asistente',
    company_name,
    company_description = '',
    company_info = {},
    tone = 'formal',
    actions = [],
    custom_prompt_additions = ''
  } = config;

  let formattedActions = '';
  try {
    const actionsArray = typeof actions === 'string' ? JSON.parse(actions) : actions;
    if (Array.isArray(actionsArray)) {
      formattedActions = actionsArray.map(a => `- "${a}"`).join('\n');
    }
  } catch (e) {
    formattedActions = '- "continuar"\n- "derivar"';
  }

  const infoString = typeof company_info === 'object' && Object.keys(company_info).length > 0
    ? JSON.stringify(company_info, null, 2)
    : 'No hay información adicional registrada.';

  return `
## Identidad
Sos ${agent_name}, el asistente virtual de ${company_name}.
${company_description}

## Estilo de Comunicación
- Hablás en español ${tone}.
- Debes ser conciso, directo y útil.
- Si no sabes algo, admítelo y ofrece derivar la consulta.

## Información de la Empresa
${infoString}

## Acciones disponibles
${formattedActions}

${custom_prompt_additions ? `## Instrucciones Extra\n${custom_prompt_additions}` : ''}
`.trim();
}
