import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    const isAdminPage = request.nextUrl.pathname.startsWith("/admin");
    const isLoginPage = request.nextUrl.pathname === "/admin/login";

    // If trying to access admin pages
    if (isAdminPage) {
        // Allow login page without authentication
        if (isLoginPage) {
            // If already logged in, redirect to admin dashboard
            if (token) {
                return NextResponse.redirect(new URL("/admin", request.url));
            }
            return NextResponse.next();
        }

        // For other admin pages, require authentication
        if (!token) {
            const loginUrl = new URL("/admin/login", request.url);
            loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
