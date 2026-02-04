export const metadata = {
    title: "Datenschutzerklärung | Smiling Studio",
    description: "Datenschutzerklärung von Smiling Studio - Informationen zum Schutz Ihrer Daten.",
};

export default function PrivacyPage() {
    return (
        <main className="pt-32 pb-20 bg-[#f8f7f6]">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif font-bold text-[#5c4033] mb-8">Datenschutzerklärung</h1>

                <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] p-8 space-y-10">
                    {/* 1. Datenschutz auf einen Blick */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-lg font-semibold text-[#5c4033] mb-3">Allgemeine Hinweise</h3>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                        </p>
                        <h3 className="text-lg font-semibold text-[#5c4033] mb-3">Datenerfassung auf dieser Website</h3>
                        <p className="text-[#555] leading-relaxed">
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
                            Smiling Studio<br />
                            Dotzheimerstr. 68, 65197 Wiesbaden<br />
                            E-Mail: info@smilingstudio.com
                        </p>
                    </section>

                    <hr className="border-[#e6e2db]" />

                    {/* 2. Hosting */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-4">2. Hosting</h2>
                        <p className="text-[#555] leading-relaxed">
                            Wir hosten die Inhalte unserer Website bei: <strong>Strato</strong>. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                        </p>
                    </section>

                    <hr className="border-[#e6e2db]" />

                    {/* 3. Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-4">3. Cookies</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Unsere Website verwendet „Cookies". Das sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                        </p>
                        <ul className="text-[#555] space-y-2 list-disc list-inside">
                            <li><strong>Notwendige Cookies:</strong> Erforderlich für den technischen Betrieb der Seite (Art. 6 Abs. 1 lit. f DSGVO).</li>
                            <li><strong>Analyse-/Marketing-Cookies:</strong> Werden nur mit Ihrer ausdrücklichen Einwilligung verwendet (Art. 6 Abs. 1 lit. a DSGVO).</li>
                        </ul>
                        <p className="text-[#555] leading-relaxed mt-4">
                            Sie können Ihren Browser so einstellen, dass Sie Cookies ablehnen oder nur im Einzelfall erlauben.
                        </p>
                    </section>

                    <hr className="border-[#e6e2db]" />

                    {/* 4. Soziale Medien */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-4">4. Soziale Medien (Instagram, Facebook, TikTok)</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Wir binden auf unserer Website Funktionen und Inhalte von Social-Media-Plattformen ein. Wenn Sie diese nutzen (z. B. auf einen Button klicken), werden Daten an die jeweiligen Anbieter übertragen.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-[#5c4033]">Instagram</h4>
                                <p className="text-[#555]">
                                    Diensteanbieter: Meta Platforms Ireland Limited, Irland.<br />
                                    Datenschutzerklärung: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#d4a373] hover:underline">https://instagram.com/about/legal/privacy/</a>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#5c4033]">Facebook</h4>
                                <p className="text-[#555]">
                                    Diensteanbieter: Meta Platforms Ireland Limited, Irland.<br />
                                    Datenschutzerklärung: <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#d4a373] hover:underline">https://www.facebook.com/about/privacy/</a>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#5c4033]">TikTok</h4>
                                <p className="text-[#555]">
                                    Diensteanbieter: TikTok Technology Limited, Irland.<br />
                                    Datenschutzerklärung: <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#d4a373] hover:underline">https://www.tiktok.com/legal/privacy-policy</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-[#e6e2db]" />

                    {/* 5. Google Maps */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-4">5. Google Maps</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Diese Seite nutzt über eine Schnittstelle (API) den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                        </p>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                        </p>
                        <p className="text-[#555] leading-relaxed">
                            Die Nutzung von Google Maps erfolgt im Interesse einer leichten Auffindbarkeit unseres Studios in Wiesbaden. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Mehr Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#d4a373] hover:underline">https://policies.google.com/privacy</a>
                        </p>
                    </section>

                    <hr className="border-[#e6e2db]" />

                    {/* 6. Kontaktformular */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-4">6. Kontaktformular und E-Mail</h2>
                        <p className="text-[#555] leading-relaxed">
                            Wenn Sie uns Anfragen per Kontaktformular oder E-Mail zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert (Art. 6 Abs. 1 lit. b DSGVO). Wir geben diese Daten nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </section>

                    <hr className="border-[#e6e2db]" />

                    {/* 7. Betroffenenrechte */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#5c4033] mb-4">7. Ihre Rechte (Betroffenenrechte)</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Sie haben jederzeit das Recht auf:
                        </p>
                        <ul className="text-[#555] space-y-2 list-disc list-inside">
                            <li>Auskunft über Ihre gespeicherten Daten.</li>
                            <li>Berichtigung, Sperrung oder Löschung Ihrer Daten.</li>
                            <li>Widerruf einer bereits erteilten Einwilligung.</li>
                            <li>Beschwerde bei der zuständigen Aufsichtsbehörde (Der Hessische Beauftragte für Datenschutz und Informationsfreiheit).</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
