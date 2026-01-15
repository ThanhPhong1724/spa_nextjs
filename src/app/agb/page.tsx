export const metadata = {
    title: "AGB | Smiling Studio",
    description: "Allgemeine Geschäftsbedingungen von Smiling Studio.",
};

export default function AGBPage() {
    return (
        <main className="pt-32 pb-20 bg-[#f8f7f6]">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif font-bold text-[#5c4033] mb-8">
                    Allgemeine Geschäftsbedingungen (AGB)
                </h1>

                <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] p-8 space-y-8">
                    {/* § 1 Geltungsbereich */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 1 Geltungsbereich
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Smiling Studio
                            (nachfolgend "Studio" genannt) und dem Kunden über die Erbringung von
                            Dienstleistungen im Bereich Kosmetik, Nageldesign, Wimpernverlängerung, Head Spa
                            und Permanent Make-up.
                        </p>
                    </section>

                    {/* § 2 Terminvereinbarung */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 2 Terminvereinbarung und Stornierung
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                Termine können telefonisch, per E-Mail oder über unsere Online-Buchung
                                vereinbart werden.
                            </p>
                            <p>
                                Wir bitten um rechtzeitige Absage mindestens 24 Stunden vor dem vereinbarten
                                Termin. Bei kurzfristiger Absage oder Nichterscheinen behalten wir uns vor,
                                eine Ausfallgebühr von bis zu 50% des Behandlungspreises zu berechnen.
                            </p>
                        </div>
                    </section>

                    {/* § 3 Preise und Zahlung */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 3 Preise und Zahlung
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                Es gelten die zum Zeitpunkt der Leistungserbringung aktuellen Preise gemäß
                                unserer Preisliste.
                            </p>
                            <p>
                                Die Bezahlung erfolgt direkt nach der Behandlung. Wir akzeptieren:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Barzahlung</li>
                                <li>Online-Banking</li>
                                <li>PayPal</li>
                            </ul>
                        </div>
                    </section>

                    {/* § 4 Gutscheine */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 4 Gutscheine
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                Gutscheine sind ab Ausstellungsdatum 3 Jahre gültig. Eine Barauszahlung
                                ist nicht möglich. Gutscheine sind übertragbar.
                            </p>
                        </div>
                    </section>

                    {/* § 5 Haftung */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 5 Haftung
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                Der Kunde ist verpflichtet, vor der Behandlung über bestehende Allergien,
                                Erkrankungen oder Unverträglichkeiten zu informieren.
                            </p>
                            <p>
                                Für Schäden, die durch falsche oder unvollständige Angaben des Kunden
                                entstehen, übernimmt das Studio keine Haftung.
                            </p>
                        </div>
                    </section>

                    {/* § 6 Datenschutz */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 6 Datenschutz
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
                            <a href="/datenschutz" className="text-[#d4a373] hover:underline">
                                Datenschutzerklärung
                            </a>
                            .
                        </p>
                    </section>

                    {/* § 7 Schlussbestimmungen */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 7 Schlussbestimmungen
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                Es gilt das Recht der Bundesrepublik Deutschland.
                            </p>
                            <p>
                                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die
                                Wirksamkeit der übrigen Bestimmungen davon unberührt.
                            </p>
                        </div>
                    </section>

                    {/* Stand */}
                    <div className="pt-6 border-t border-[#f4f3f0] text-sm text-[#897d61]">
                        Stand: Januar 2025
                    </div>
                </div>
            </div>
        </main>
    );
}

