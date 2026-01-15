"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastProvider } from "@/components/Toast";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { data: session, status } = useSession();
    const router = useRouter();

    const menuItems = [
        { icon: "dashboard", label: "Dashboard", href: "/admin" },
        { icon: "article", label: "Blog Posts", href: "/admin/posts" },
        { icon: "contacts", label: "Leads & Requests", href: "/admin/leads" },
        { icon: "edit_document", label: "Page Content", href: "/admin/content" },
        { icon: "settings", label: "Settings", href: "/admin/settings" },
    ];

    // Redirect to login if not authenticated (except on login page)
    useEffect(() => {
        if (status === "unauthenticated" && pathname !== "/admin/login") {
            router.push("/admin/login");
        }
    }, [status, pathname, router]);

    // Don't show layout on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    // Show loading state while checking session
    if (status === "loading") {
        return (
            <div className="flex h-screen items-center justify-center bg-[#f8f7f6]">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#eeb32b] border-r-transparent"></div>
                    <p className="mt-4 text-[#897d61]">Loading...</p>
                </div>
            </div>
        );
    }

    // Don't render if not authenticated
    if (status === "unauthenticated") {
        return null;
    }

    return (
        <ToastProvider>
            <div className="flex h-screen bg-[#f8f7f6]">
                {/* Sidebar */}
                <aside className="w-64 bg-[#181611] text-white flex-shrink-0 hidden md:flex flex-col">
                    <div className="p-6 border-b border-white/10">
                        <h2 className="text-xl font-bold text-[#eeb32b]">Lotus Admin</h2>
                        <p className="text-xs text-white/50">Management Console</p>
                    </div>

                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                        ? "bg-[#eeb32b] text-[#181611] font-bold"
                                        : "text-white/80 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-white/10">
                        <button
                            onClick={() => signOut({ callbackUrl: "/admin/login" })}
                            className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-white/5 rounded-lg transition-all"
                        >
                            <span className="material-symbols-outlined">logout</span>
                            Sign Out
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* Mobile Header */}
                    <header className="bg-white border-b border-[#e6e2db] p-4 flex md:hidden justify-between items-center">
                        <span className="font-bold text-[#181611]">Lotus Admin</span>
                        <button className="text-[#181611]">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </header>

                    <div className="flex-1 overflow-auto p-8">
                        {children}
                    </div>
                </main>
            </div>
        </ToastProvider>
    );
}
