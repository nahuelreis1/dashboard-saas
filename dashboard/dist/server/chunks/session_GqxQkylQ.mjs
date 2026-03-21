import jwt from 'jsonwebtoken';

const SESSION_SECRET = process.env.SESSION_SECRET || "fallback-secret-at-least-32-chars-long";
const COOKIE_NAME = "sb-session";
const sessionManager = {
  create: async (cookies, data) => {
    const token = jwt.sign(data, SESSION_SECRET, { expiresIn: "7d" });
    cookies.set(COOKIE_NAME, token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    });
  },
  get: (cookies) => {
    const token = cookies.get(COOKIE_NAME)?.value;
    if (!token) return null;
    try {
      return jwt.verify(token, SESSION_SECRET);
    } catch (e) {
      return null;
    }
  },
  destroy: (cookies) => {
    cookies.delete(COOKIE_NAME, { path: "/" });
  }
};

export { sessionManager as s };
