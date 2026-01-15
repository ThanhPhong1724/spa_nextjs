import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const isLoginPage = request.nextUrl.pathname === "/admin/login";

    // Check for session token - try both cookie names
    const sessionToken =
        request.cookies.get("__Secure-next-auth.session-token")?.value ||
        request.cookies.get("next-auth.session-token")?.value;

    const isAdminPage = request.nextUrl.pathname.startsWith("/admin");

    if (isAdminPage) {
        // Allow login page
        if (isLoginPage) {
            // If has session, redirect to admin
            if (sessionToken) {
                return NextResponse.redirect(new URL("/admin", request.url));
            }
            return NextResponse.next();
        }

        // For other admin pages, check session
        if (!sessionToken) {
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
