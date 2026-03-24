import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { buildSystemPrompt } from '../../../lib/prompt-builder';
import { sessionManager } from '../../../lib/session';

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const tenantId = url.searchParams.get('tenant_id');
  const apiKey = request.headers.get('x-api-key');

  // ==========================================
  // LLAMADA DESDE n8n (Usa x-api-key header)
  // ==========================================
  if (apiKey) {
    // Importante: Configura N8N_API_KEY en tu .env en Coolify
    if (apiKey !== process.env.N8N_API_KEY) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    if (!tenantId) {
      return new Response(JSON.stringify({ error: 'tenant_id required' }), { status: 400 });
    }

    try {
      const { rows } = await db.query(
        `SELECT ac.*, t.id as tid
         FROM agent_config ac
         JOIN tenants t ON t.id = ac.tenant_id
         WHERE ac.tenant_id = $1`,
        [tenantId]
      );

      if (rows.length === 0) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
      }

      const config = rows[0];

      // Generar Base64 de Andreani
      let andreaniAuth = null;
      if (config.carrier_username && config.carrier_password) {
        const encoded = Buffer.from(
          `${config.carrier_username}:${config.carrier_password}`
        ).toString('base64');
        andreaniAuth = `Basic ${encoded}`;
      }

      return new Response(JSON.stringify({
        system_prompt: buildSystemPrompt({
          agent_name: config.agent_name,
          company_name: config.company_name,
          agent_role: config.agent_role,
          tone: config.tone,
          format_rules: config.format_rules,
          company_info: config.company_info,
          branches_info: config.branches_info,
          verification_protocol: config.verification_protocol,
          general_rules: config.general_rules
        }),
        drive_folder_id: config.drive_folder_id,
        andreani_auth: andreaniAuth,
        session_prefix: config.tenant_id
      }), {
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (e) {
      console.error('Error in n8n config fetch:', e);
      return new Response(JSON.stringify({ error: 'DB Error' }), { status: 500 });
    }
  }

  // ==========================================
  // LLAMADA DESDE EL FRONTEND (Usa cookies)
  // ==========================================
  const session = sessionManager.get(cookies);
  if (!session) return new Response('Unauthorized', { status: 401 });

  try {
    const { rows } = await db.query(
      'SELECT * FROM agent_config WHERE tenant_id = $1 LIMIT 1',
      [session.userId]
    );

    // Default payload if empty
    const config = rows[0] || {
      agent_name: 'Asistente',
      company_name: 'Mi Empresa',
      agent_role: '',
      tone: 'formal',
      format_rules: '',
      company_info: '',
      branches_info: '',
      verification_protocol: '',
      general_rules: ''
    };

    return new Response(JSON.stringify(config), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Error fetching config for frontend:', e);
    return new Response(JSON.stringify({ error: 'DB Error' }), { status: 500 });
  }
};

export const PUT: APIRoute = async ({ request, cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session) return new Response('Unauthorized', { status: 401 });

  try {
    const body = await request.json();
    
    // Mapeo simple para MVP, en prod deberias validar con zod.
    await db.query(`
      INSERT INTO agent_config (
        tenant_id, agent_name, company_name, agent_role, tone, format_rules,
        company_info, branches_info, verification_protocol, general_rules
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (tenant_id) DO UPDATE SET 
        agent_name = $2, company_name = $3, agent_role = $4, tone = $5, format_rules = $6,
        company_info = $7, branches_info = $8, verification_protocol = $9, general_rules = $10,
        updated_at = NOW()
    `, [
      session.userId, 
      body.agent_name || 'Asistente',
      body.company_name || 'Mi Empresa',
      body.agent_role || '',
      body.tone || 'formal',
      body.format_rules || '',
      body.company_info || '',
      body.branches_info || '',
      body.verification_protocol || '',
      body.general_rules || ''
    ]);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Error updating config:', e);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 500 });
  }
};
