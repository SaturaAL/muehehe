import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "admin_session";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME)?.value;
  const isLoggedIn = session === process.env.SESSION_SECRET;
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};