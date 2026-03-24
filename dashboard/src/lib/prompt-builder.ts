export interface AgentConfig {
  agent_name?: string;
  company_name: string;
  agent_role?: string;
  tone?: string;
  format_rules?: string;
  company_info?: string;
  branches_info?: string;
  verification_protocol?: string;
  general_rules?: string;
}

export function buildSystemPrompt(config: AgentConfig): string {
  const {
    agent_name = 'Asistente',
    company_name,
    agent_role = '',
    tone = 'formal',
    format_rules = '',
    company_info = '',
    branches_info = '',
    verification_protocol = '',
    general_rules = ''
  } = config;

  const sections: string[] = [];

  sections.push(`## Identidad y Rol
Eres ${agent_name}, el asistente virtual de ${company_name}.
${agent_role}`.trim());

  sections.push(`## Tono de Comunicación
Tu estilo debe ser ${tone}.`);

  if (company_info && company_info.trim()) {
    sections.push(`## Información de la Empresa\n${company_info.trim()}`);
  }

  if (branches_info && branches_info.trim()) {
    sections.push(`## Sucursales\n${branches_info.trim()}`);
  }

  if (verification_protocol && verification_protocol.trim()) {
    sections.push(`## Protocolo de Verificación\n${verification_protocol.trim()}`);
  }

  if (general_rules && general_rules.trim()) {
    sections.push(`## Reglas Generales\n${general_rules.trim()}`);
  }

  if (format_rules && format_rules.trim()) {
    sections.push(`## Reglas de Formato de Salida\n${format_rules.trim()}`);
  }

  sections.push(`## Herramientas Disponibles
Puedes utilizar las siguientes herramientas para obtener información adicional si es necesario:
- **obtener_productos_agenteZenvia**: Buscar y listar productos disponibles.
- **get_orders**: Consultar la lista de pedidos de un cliente.
- **get_order**: Consultar el detalle de un pedido específico.
- **get_tracking**: Consultar el estado de seguimiento de un envío.
- **ToS**: Consultar los términos y condiciones de la empresa.
- **Calculator**: Realizar cálculos matemáticos si es necesario para presupuestos o descuentos.`);

  sections.push(`## Acciones Disponibles y Flujo
Debes clasificar la intención de tu respuesta usando una de las siguientes acciones. Solo puedes usar una de estas:
- "continuar": Para mantener la conversación normal, responder preguntas o pedir más datos.
- "derivar": Cuando el usuario pide hablar con un humano, necesita un vendedor, o hay un problema complejo.
- "finalizar": Cuando la consulta fue resuelta completamente y el usuario se despide.
- "encuesta": Si deseas enviar una breve encuesta de satisfacción tras resolver un problema.
- "presupuesto": Cuando se le envía un resumen de cotización o presupuesto de productos.

**Ejemplos de Acciones:**
- Si te preguntan "Hola, ¿cómo estás?", la acción es "continuar".
- Si el usuario dice "Quiero hablar con un asesor real", la acción es "derivar".
- Si el usuario dice "Gracias, eso era todo, adiós", la acción es "finalizar".
- Si el usuario pide "Cotizame 3 unidades del producto X", la acción es "presupuesto".`);

  sections.push(`## Formato de Respuesta — CRÍTICO
DEBES DEVOLVER EXCLUSIVAMENTE UN JSON VÁLIDO. NO devuelvas texto fuera del JSON, ni bloques de markdown tipo \`\`\`json.
Estructura obligatoria:
{
  "respuesta": "El mensaje que leerá el usuario, formateado según tu tono y reglas.",
  "accion": "Una de las acciones permitidas (continuar, derivar, finalizar, encuesta, presupuesto)"
}`);

  sections.push(`La fecha actual es: {{$now}}`);

  return sections.join('\n\n').trim();
}
