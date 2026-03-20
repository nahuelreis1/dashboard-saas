import type { APIRoute } from 'astro';
import { googleAuth } from '../../../lib/google';
import { sessionManager } from '../../../lib/session';
import { db } from '../../../lib/db';

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response(JSON.stringify({ error: 'Missing code' }), { status: 400 });
  }

  try {
    // 1. Intercambiar código por tokens
    const tokens = await googleAuth.exchangeCodeForTokens(code);
    
    // 2. Mock de registro/actualización de usuario en DB
    const { id, email, name } = tokens.user;
    
    // En un caso real:
    // await db.query(
    //   'INSERT INTO users (google_id, email, name) VALUES ($1, $2, $3) ON CONFLICT (email) DO UPDATE SET name = $3 RETURNING *',
    //   [id, email, name]
    // );

    // 3. Iniciar sesión (guardar en cookies)
    await sessionManager.create(cookies, {
      userId: id,
      email,
      name,
      accessToken: tokens.access_token
    });

    // 4. Redirigir al dashboard
    return redirect('/dashboard');
  } catch (error) {
    console.error('Error during Google Auth callback:', error);
    return new Response(JSON.stringify({ error: 'Auth failed' }), { status: 500 });
  }
};
