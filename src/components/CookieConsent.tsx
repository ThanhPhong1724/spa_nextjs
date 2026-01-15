"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CookiePreferences {
    essential: boolean; // Always true, cannot be disabled
    marketing: boolean;
    functional: boolean;
    analytics: boolean;
}

const COOKIE_CONSENT_KEY = "cookie_consent";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        essential: true,
        marketing: false,
        functional: false,
        analytics: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!savedConsent) {
            setShowBanner(true);
        } else {
            setPreferences(JSON.parse(savedConsent));
        }
    }, []);

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
        setShowBanner(false);
        setShowSettings(false);
    };

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            essential: true,
            marketing: true,
            functional: true,
            analytics: true,
        };
        setPreferences(allAccepted);
        savePreferences(allAccepted);
    };

    const handleRejectAll = () => {
        const onlyEssential: CookiePreferences = {
            essential: true,
            marketing: false,
            functional: false,
            analytics: false,
        };
        setPreferences(onlyEssential);
        savePreferences(onlyEssential);
    };

    const handleSaveSelection = () => {
        savePreferences(preferences);
    };

    if (!showBanner && !showSettings) return null;

    return (
        <>
            {/* Cookie Banner */}
            {showBanner && !showSettings && (
                <div className="fixed bottom-0 left-0 right-0 bg-[#181611] text-white py-3 px-4 z-50 shadow-2xl">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-center sm:text-left">
                            Diese Website verwendet Cookies, um ein verbessertes Nutzererlebnis zu bieten.
                            Per Klick auf „Zustimmen" erklären Sie sich mit der Verwendung von Cookies einverstanden.{" "}
                            <Link href="/datenschutz" className="underline hover:text-[#eeb32b]">
                                Datenschutzerklärung
                            </Link>
                        </p>
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <button
                                onClick={() => setShowSettings(true)}
                                className="px-4 py-2 text-sm border border-white/30 rounded hover:bg-white/10 transition-colors"
                            >
                                Einstellungen
                            </button>
                            <button
                                onClick={handleRejectAll}
                                className="px-4 py-2 text-sm border border-white/30 rounded hover:bg-white/10 transition-colors"
                            >
                                Alle ablehnen
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-4 py-2 text-sm bg-[#eeb32b] text-[#181611] font-bold rounded hover:bg-[#d9a020] transition-colors"
                            >
                                Zustimmen
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Modal */}
            {showSettings && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col shadow-2xl">
                        {/* Header */}
                        <div className="p-6 border-b border-[#f4f3f0] flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold text-[#181611]">Cookie-Einstellungen</h2>
                                <p className="text-sm text-[#897d61] mt-1">
                                    Wählen Sie aus, welche Cookies Sie zulassen möchten.
                                </p>
                            </div>
                            <button
                                onClick={() => { setShowSettings(false); setShowBanner(true); }}
                                className="text-[#897d61] hover:text-[#181611]"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.294 6l.706.706L12.705 12 18 17.294l-.706.706L12 12.705 6.706 18 6 17.294 11.295 12 6 6.706 6.706 6 12 11.295 17.294 6z" />
                                </svg>
                            </button>
                        </div>

                        {/* Cookie Sections */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Essential - Always enabled */}
                            <CookieSection
                                title="Unbedingt erforderliche Cookies"
                                description="Diese Cookies werden für grundlegende Funktionen wie Sicherheit, Identitätsprüfung und Netzwerkmanagement benötigt. Sie können daher nicht deaktiviert werden."
                                checked={true}
                                disabled={true}
                                onChange={() => { }}
                            />

                            {/* Marketing */}
                            <CookieSection
                                title="Marketing-Cookies"
                                description="Diese Cookies werden verwendet, um die Effektivität von Werbung zu messen, einen personalisierten Service zu bieten und Werbeanzeigen an Besucherbedürfnisse anzupassen."
                                checked={preferences.marketing}
                                disabled={false}
                                onChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                            />

                            {/* Functional */}
                            <CookieSection
                                title="Funktionale Cookies"
                                description="Diese Cookies werden verwendet, um Nutzerangaben zu speichern und ein verbessertes und personalisiertes Nutzererlebnis anzubieten."
                                checked={preferences.functional}
                                disabled={false}
                                onChange={(checked) => setPreferences({ ...preferences, functional: checked })}
                            />

                            {/* Analytics */}
                            <CookieSection
                                title="Analytics-Cookies"
                                description="Diese Cookies werden verwendet, um zu verstehen, wie Besucher mit unserer Website interagieren, um Fehler zu entdecken und verbesserte Analysedaten zu bieten."
                                checked={preferences.analytics}
                                disabled={false}
                                onChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                            />
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-[#f4f3f0]">
                            <button
                                onClick={handleSaveSelection}
                                className="w-full bg-[#181611] text-white py-3 rounded-xl font-bold hover:bg-[#333] transition-colors"
                            >
                                Auswahl bestätigen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Cookie Section Component
function CookieSection({
    title,
    description,
    checked,
    disabled,
    onChange,
}: {
    title: string;
    description: string;
    checked: boolean;
    disabled: boolean;
    onChange: (checked: boolean) => void;
}) {
    return (
        <div className="border-b border-[#f4f3f0] pb-6 last:border-0 last:pb-0">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h3 className="font-bold text-[#181611]">{title}</h3>
                    <p className="text-sm text-[#897d61] mt-1">{description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                    <input
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={(e) => onChange(e.target.checked)}
                        className="sr-only peer"
                    />
                    <div className={`w-12 h-6 rounded-full transition-colors flex items-center
                        ${disabled ? "bg-[#eeb32b] cursor-not-allowed" : checked ? "bg-[#181611]" : "bg-[#e6e2db]"}
                    `}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-0.5
                            ${checked ? "translate-x-6" : "translate-x-0"}
                        `}>
                            {checked && (
                                <svg className="w-5 h-5 p-1 text-[#181611]" viewBox="0 0 11 8" fill="currentColor">
                                    <path d="M3.8 5L1.2 2.5 0 3.7 3.8 7.5 10 1.2 8.8 0z" />
                                </svg>
                            )}
                            {!checked && (
                                <svg className="w-5 h-5 p-1 text-[#897d61]" viewBox="0 0 11 2" fill="currentColor">
                                    <path d="M0 0H10V2H0z" />
                                </svg>
                            )}
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}
