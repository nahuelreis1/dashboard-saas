import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { sessionManager } from '../../../lib/session';

export const GET: APIRoute = async ({ cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session) return new Response('Unauthorized', { status: 401 });

  try {
    const { rows } = await db.query(
      'SELECT config FROM agent_configs WHERE user_id = $1 LIMIT 1',
      [session.userId]
    );

    const config = rows[0]?.config || {
      name: 'Nuevo Agente',
      role: 'Asistente Virtual',
      company_name: 'Mi Empresa',
      tone: 'professional',
      main_goal: 'Ayudar a los clientes con sus dudas.',
      additional_instructions: '',
      knowledge_base_ref: ''
    };

    return new Response(JSON.stringify(config), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Error fetching config:', e);
    return new Response(JSON.stringify({ error: 'DB Error' }), { status: 500 });
  }
};

export const PUT: APIRoute = async ({ request, cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session) return new Response('Unauthorized', { status: 401 });

  try {
    const config = await request.json();

    // Actualizar o Insertar la config del agente
    await db.query(
      'INSERT INTO agent_configs (user_id, config) VALUES ($1, $2) ON CONFLICT (user_id) DO UPDATE SET config = $2',
      [session.userId, config]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Error updating config:', e);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 500 });
  }
};
