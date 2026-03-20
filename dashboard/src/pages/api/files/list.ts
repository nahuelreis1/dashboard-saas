import type { APIRoute } from 'astro';
import { sessionManager } from '../../../lib/session';

export const GET: APIRoute = async ({ cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session) return new Response('Unauthorized', { status: 401 });

  // Listado de archivos (Mocked, en producción vendría de DB o Drive API)
  const files = [
    {
      id: '1',
      name: 'manual_usuario.pdf',
      type: 'application/pdf',
      status: 'processed',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'precios_2025.csv',
      type: 'text/csv',
      status: 'processing',
      createdAt: new Date().toISOString()
    }
  ];

  return new Response(JSON.stringify({ files }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
