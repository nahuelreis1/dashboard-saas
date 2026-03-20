import jwt from 'jsonwebtoken';
import type { AstroCookies } from 'astro';

const SESSION_SECRET = process.env.SESSION_SECRET || 'fallback-secret-at-least-32-chars-long';
const COOKIE_NAME = 'sb-session';

export interface Session {
  userId: string;
  email: string;
  name: string;
  accessToken?: string;
}

export const sessionManager = {
  create: async (cookies: AstroCookies, data: Session) => {
    const token = jwt.sign(data, SESSION_SECRET, { expiresIn: '7d' });
    
    cookies.set(COOKIE_NAME, token, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });
  },

  get: (cookies: AstroCookies): Session | null => {
    const token = cookies.get(COOKIE_NAME)?.value;
    if (!token) return null;

    try {
      return jwt.verify(token, SESSION_SECRET) as Session;
    } catch (e) {
      return null;
    }
  },

  destroy: (cookies: AstroCookies) => {
    cookies.delete(COOKIE_NAME, { path: '/' });
  }
};
