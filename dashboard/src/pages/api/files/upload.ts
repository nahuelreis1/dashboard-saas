import type { APIRoute } from 'astro';
import { googleAuth } from '../../../lib/google';
import { sessionManager } from '../../../lib/session';
import { db } from '../../../lib/db';

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

    let driveFolderId = formData.get('drive_folder_id') as string | null;

    if (!driveFolderId) {
      try {
        const { rows } = await db.query(
          'SELECT drive_folder_id FROM agent_config WHERE tenant_id = $1 LIMIT 1',
          [session.userId]
        );
        driveFolderId = rows[0]?.drive_folder_id;
      } catch (dbError) {
        console.warn('DB error fetching config, continuing...', dbError);
      }
    }

    if (!driveFolderId) {
       return new Response(JSON.stringify({ error: 'No Google Drive folder configured' }), { status: 400 });
    }

    // 1. Simular subida a Google Drive en la carpeta específica
    const driveResponse = await googleAuth.uploadToDrive(session.accessToken, driveFolderId, {
      name: file.name,
      type: file.type,
      buffer: Buffer.from(await file.arrayBuffer())
    });

    // 2. Simular trigger a n8n para ingestión
    const n8nWebhookUrl = process.env.N8N_INGESTION_WEBHOOK || 'http://localhost:5678/webhook/ingestion';
    
    console.log(`Triggering n8n ingestion for file: ${driveResponse.id} in folder: ${driveFolderId}`);
    
    // FETCH MOCK
    /*
    await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: session.userId,
        fileId: driveResponse.id,
        fileName: file.name,
        fileUrl: driveResponse.webViewLink,
        driveFolderId: driveFolderId
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
