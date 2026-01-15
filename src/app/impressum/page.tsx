export const metadata = {
    title: "Impressum | Smiling Studio",
    description: "Impressum und rechtliche Informationen von Smiling Studio.",
};

export default function ImpressumPage() {
    return (
        <main className="pt-32 pb-20 bg-[#f8f7f6]">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif font-bold text-[#5c4033] mb-8">Impressum</h1>

                <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] p-8 space-y-8">
                    {/* Angaben gemäß § 5 TMG */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            Angaben gemäß § 5 TMG
                        </h2>
                        <address className="not-italic text-[#555] leading-relaxed">
                            <strong>Smiling Studio</strong><br />
                            Dotzheimerstr. 68<br />
                            65197 Wiesbaden<br />
                            Deutschland
                        </address>
                    </section>

                    {/* Kontakt */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">Kontakt</h2>
                        <div className="text-[#555] space-y-2">
                            <p>
                                <strong>Telefon:</strong>{" "}
                                <a href="tel:01638562022" className="text-[#d4a373] hover:underline">
                                    0163 856 2022
                                </a>
                            </p>
                            <p>
                                <strong>E-Mail:</strong>{" "}
                                <a href="mailto:info@smilingstudio@gmail.com" className="text-[#d4a373] hover:underline">
                                    info@smilingstudio@gmail.com
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Umsatzsteuer-ID */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG
                        </h2>
                        <p className="text-[#555]">
                            [Umsatzsteuer-ID wird hier eingefügt]
                        </p>
                    </section>

                    {/* Verantwortlich für den Inhalt */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                        </h2>
                        <address className="not-italic text-[#555] leading-relaxed">
                            [Name des Verantwortlichen]<br />
                            Dotzheimerstr. 68<br />
                            65197 Wiesbaden
                        </address>
                    </section>

                    {/* Streitschlichtung */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            EU-Streitschlichtung
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#d4a373] hover:underline"
                            >
                                https://ec.europa.eu/consumers/odr/
                            </a>
                            <br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    {/* Verbraucherstreitbeilegung */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            Verbraucherstreitbeilegung/Universalschlichtungsstelle
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

