"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type GutscheinClientProps = {
    content?: any;
};

export default function GutscheinClient({ content }: GutscheinClientProps) {
    const { t } = useLanguage();

    // Use CMS image if available, otherwise fallback to the original hardcoded one
    const qrImage = content?.payment_qr?.qr_image || "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://paypal.me/hoangrealt";

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero */}
            <section className="bg-[#5c4033] py-20 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#d4a373] font-bold tracking-widest uppercase text-xs">Verschenken Sie Entspannung</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">ONLINE GUTSCHEIN</h1>
                    <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
                        Das perfekte Geschenk für Ihre Liebsten – ein Gutschein für Wellness und Schönheit.
                    </p>
                </div>
            </section>

            {/* Instructions */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-6">
                            So kaufen Sie Ihren Gutschein online:
                        </h2>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d4a373] text-white font-bold flex items-center justify-center">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#5c4033] mb-2">Betrag via PayPal senden</h3>
                                    <p className="text-[#6b5344]">
                                        Überweisen Sie den gewünschten Betrag an{" "}
                                        <strong className="text-[#d4a373]">hoang_real@yahoo.de</strong>
                                        {" "}(oder QR-Code auf dem Bildschirm scannen).
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d4a373] text-white font-bold flex items-center justify-center">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#5c4033] mb-2">Angaben hinzufügen</h3>
                                    <p className="text-[#6b5344] mb-3">
                                        Bitte geben Sie im Notizfeld folgende Infos an:
                                    </p>
                                    <ul className="text-[#6b5344] space-y-1 ml-4 list-disc">
                                        <li>Name des Gutscheinempfängers</li>
                                        <li>E-Mail-Adresse (für den Gutscheinversand) oder Selbstabholung</li>
                                        <li>Handynummer (für Rückfragen)</li>
                                    </ul>
                                    <div className="mt-4 p-4 bg-[#f5ebe0] rounded-lg">
                                        <p className="text-sm text-[#6b5344]">
                                            <strong>📌 Beispiel:</strong><br />
                                            Max Mustermann | max@example.de | 0176 12345678<br />
                                            <span className="text-[#8b7355]">oder</span><br />
                                            Max Mustermann | Selbstabholung | 0176 12345678
                                        </p>
                                    </div>
                                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                        <p className="text-sm text-amber-800">
                                            <strong>⚠️ Hinweis:</strong> Ohne diese Angaben kann sich die Bearbeitung
                                            Ihres Gutscheins verzögern.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d4a373] text-white font-bold flex items-center justify-center">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#5c4033] mb-2">Erhalt</h3>
                                    <p className="text-[#6b5344]">
                                        Nach Zahlungseingang senden wir Ihnen den Gutschein umgehend zu oder
                                        bereiten ihn zur Abholung vor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="mt-10 p-6 bg-[#f5ebe0] rounded-xl text-center">
                            <h3 className="font-bold text-[#5c4033] mb-4">PayPal QR-Code</h3>
                            <img
                                src={qrImage}
                                alt="PayPal QR Code"
                                className="w-48 h-48 mx-auto rounded-xl"
                            />
                            <p className="text-sm text-[#8b7355] mt-4">
                                hoang_real@yahoo.de
                            </p>
                        </div>

                        {/* Note */}
                        <div className="mt-8 p-4 bg-[#5c4033] text-white rounded-xl">
                            <p className="text-sm">
                                <strong>Bitte beachten:</strong> Die Zustellung des Online-Gutscheins erfolgt per E-Mail –
                                Montag bis Samstag zwischen 10:00 Uhr und 18:00 Uhr.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#5c4033] mb-4">
                        Fragen zum Gutschein?
                    </h2>
                    <p className="text-[#6b5344] mb-8">
                        Kontaktieren Sie uns gerne bei Fragen.
                    </p>
                    <a
                        href="tel:01638562022"
                        className="inline-flex items-center gap-2 bg-[#d4a373] hover:bg-[#c99362] text-white px-8 py-4 rounded-xl font-bold transition-all"
                    >
                        <span className="material-symbols-outlined">call</span>
                        0163 856 2022
                    </a>
                </div>
            </section>
        </div>
    );
}
