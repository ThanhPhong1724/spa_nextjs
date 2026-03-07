import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Providers from "@/components/Providers";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Smiling Studio",
  description: "Innovative Beauty & Head Spa Treatments – einzigartig in Wiesbaden. Ein Erlebnis, das man einmal probiert und garantiert mit einem Lächeln verlässt.",
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5CELS0MMSR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5CELS0MMSR');
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} font-sans antialiased text-[#181611]`} style={{ fontFamily: 'var(--font-montserrat), sans-serif' }} suppressHydrationWarning>
        <Providers>
          <LayoutWrapper footerContent={await getPageContent('global')}>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
