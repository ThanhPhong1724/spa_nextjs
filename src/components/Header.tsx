"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();

    const isHome = pathname === "/";

    // Determine styles based on page and scroll state
    const isTransparent = isHome && !scrolled;

    // Text colors
    const textColorClass = isTransparent ? "text-white" : "text-[#ff8b69]";
    const hoverColorClass = isTransparent ? "hover:text-[#ff8b69]" : "hover:text-[#d4a373]";

    // Background colors
    const headerBgClass = isTransparent
        ? "bg-transparent"
        : "bg-white shadow-md";

    const navigation = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.services"), href: "/leistungen" },
        { label: t("nav.pricelist"), href: "/price-list" },
        { label: t("nav.news"), href: "/news" },
        { label: t("nav.offers"), href: "/angebote" },
        { label: t("nav.voucher"), href: "/gutschein" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/logo.jpg"
                            alt="Smiling Studio"
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-base font-bold transition-all hover:-translate-y-0.5 ${textColorClass} ${isTransparent ? "hover:text-white/80" : "hover:text-[#d4a373]"}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        {/* Language Switcher (Flags) */}
                        <div className="flex items-center gap-3 p-1">
                            <button
                                onClick={() => setLanguage("de")}
                                className={`w-9 h-6 rounded-sm flex items-center justify-center overflow-hidden transition-opacity ${language === "de"
                                    ? "opacity-100"
                                    : "opacity-50 hover:opacity-100"
                                    }`}
                                title="Deutsch"
                            >
                                <img
                                    src="https://flagcdn.com/w40/de.png"
                                    srcSet="https://flagcdn.com/w80/de.png 2x"
                                    width="36"
                                    height="24"
                                    alt="Deutsch"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                            <button
                                onClick={() => setLanguage("en")}
                                className={`w-9 h-6 rounded-sm flex items-center justify-center overflow-hidden transition-opacity ${language === "en"
                                    ? "opacity-100"
                                    : "opacity-50 hover:opacity-100"
                                    }`}
                                title="English"
                            >
                                <img
                                    src="https://flagcdn.com/w40/gb.png"
                                    srcSet="https://flagcdn.com/w80/gb.png 2x"
                                    width="36"
                                    height="24"
                                    alt="English"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </div>


                        {/* Mobile Menu Button */}
                        <button
                            className={`lg:hidden p-3 rounded-lg transition-colors ${textColorClass} hover:bg-black/5`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
                                {mobileMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100 bg-white absolute left-0 right-0 shadow-xl p-4">
                        <nav className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-3 text-base font-bold text-[#ff8b69] hover:bg-[#ff8b69]/5 rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
