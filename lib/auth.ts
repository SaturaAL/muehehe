import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

export async function createSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, process.env.SESSION_SECRET!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export { COOKIE_NAME };