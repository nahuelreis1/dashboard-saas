import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const n8nWebhookUrl = 'https://n8n.nrlabs.com.ar/webhook/agentino-lead';
    const secretKey = import.meta.env.AGENTINO_N8N_LEAD_SECRET;

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secretKey && { 'x-api-key': secretKey }),
      },
      body: JSON.stringify(body),
    });

    if (!n8nResponse.ok) {
      console.error(`Error from n8n: ${n8nResponse.status} ${n8nResponse.statusText}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
