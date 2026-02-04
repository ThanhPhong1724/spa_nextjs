"use client";

import { SessionProvider } from "next-auth/react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import CartModal from "@/components/CartModal";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider refetchOnWindowFocus={false} refetchWhenOffline={false}>
            <LanguageProvider>
                <CartProvider>
                    {children}
                    <CartModal />
                </CartProvider>
            </LanguageProvider>
        </SessionProvider>
    );
}
