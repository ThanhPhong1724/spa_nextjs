"use client";

import { SessionProvider } from "next-auth/react";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider refetchOnWindowFocus={false} refetchWhenOffline={false}>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </SessionProvider>
    );
}
