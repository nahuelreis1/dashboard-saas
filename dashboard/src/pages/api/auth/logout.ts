import type { APIRoute } from 'astro';
import { sessionManager } from '../../../lib/session';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  sessionManager.destroy(cookies);
  return redirect('/login');
};
