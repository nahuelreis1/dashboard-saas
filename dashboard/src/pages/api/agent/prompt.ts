import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { buildSystemPrompt } from '../../../lib/prompt-builder';
import { sessionManager } from '../../../lib/session';

export const GET: APIRoute = async ({ cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session) return new Response('Unauthorized', { status: 401 });

  try {
    const { rows } = await db.query(
      'SELECT config FROM agent_configs WHERE user_id = $1 LIMIT 1',
      [session.userId]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'No config found' }), { status: 404 });
    }

    const systemPrompt = buildSystemPrompt(rows[0].config);

    return new Response(JSON.stringify({ systemPrompt }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Error fetching prompt:', e);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
