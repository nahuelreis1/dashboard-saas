import type { APIRoute } from 'astro';
import { googleAuth } from '../../../lib/google';
import { sessionManager } from '../../../lib/session';

export const POST: APIRoute = async ({ request, cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session || !session.accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized or missing token' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
    }

    // 1. Simular subida a Google Drive
    const driveResponse = await googleAuth.uploadToDrive(session.accessToken, {
      name: file.name,
      type: file.type,
      buffer: Buffer.from(await file.arrayBuffer())
    });

    // 2. Simular trigger a n8n para ingestión
    const n8nWebhookUrl = process.env.N8N_INGESTION_WEBHOOK || 'http://localhost:5678/webhook/ingestion';
    
    console.log(`Triggering n8n ingestion for file: ${driveResponse.id}`);
    
    // FETCH MOCK
    /*
    await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: session.userId,
        fileId: driveResponse.id,
        fileName: file.name,
        fileUrl: driveResponse.webViewLink
      })
    });
    */

    return new Response(JSON.stringify({
      success: true,
      fileId: driveResponse.id,
      url: driveResponse.webViewLink,
      message: 'File uploaded and ingestion triggered'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Upload error:', e);
    return new Response(JSON.stringify({ error: 'Upload failed' }), { status: 500 });
  }
};
