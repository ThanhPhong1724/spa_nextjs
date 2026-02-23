import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Providers from "@/components/Providers";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Smiling Studio",
  description: "A sanctuary of peace in the heart of the city. Premium spa and salon services.",
};

import { getPageContent } from "@/lib/get-page-content";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${libreBaskerville.variable} font-serif antialiased text-[#181611]`} suppressHydrationWarning>
        <Providers>
          <LayoutWrapper footerContent={await getPageContent('global')}>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
