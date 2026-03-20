import type { APIRoute } from 'astro';
import { googleAuth } from '../../../lib/google';

export const GET: APIRoute = async ({ redirect }) => {
  const authUrl = googleAuth.getAuthUrl();
  return redirect(authUrl);
};
