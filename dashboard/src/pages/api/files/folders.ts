import type { APIRoute } from 'astro';
import { sessionManager } from '../../../lib/session';
import { googleAuth } from '../../../lib/google';

/**
 * @swagger
 * /api/files/folders:
 *   get:
 *     summary: List all Google Drive folders for the authenticated user
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: List of folders
 *       401:
 *         description: Unauthorized
 */
export const GET: APIRoute = async ({ cookies }) => {
  try {
    const session = sessionManager.get(cookies);
    
    if (!session || !session.accessToken) {
      return new Response(JSON.stringify({ error: 'Unauthorized. Missing access token.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const folders = await googleAuth.listFolders(session.accessToken);
    
    return new Response(JSON.stringify({ success: true, folders }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching folders:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch folders' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
