export const metadata = {
    title: "AGB | Smiling Studio",
    description: "Allgemeine Geschäftsbedingungen von Smiling Studio.",
};

export default function AGBPage() {
    return (
        <main className="pt-32 pb-20 bg-[#f8f7f6]">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif font-bold text-[#5c4033] mb-8">
                    Allgemeine Geschäftsbedingungen (AGB) – Smiling Studio
                </h1>

                <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] p-8 space-y-8">
                    {/* § 1 Geltungsbereich */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 1 Geltungsbereich
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und Leistungen zwischen Smiling Studio (nachfolgend „Studio" genannt) und dem Kunden. Das Leistungsspektrum umfasst insbesondere Kosmetik, Nageldesign, Wimpernverlängerung, Head Spa und Permanent Make-up.
                        </p>
                    </section>

                    {/* § 2 Terminvereinbarung */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 2 Terminvereinbarung, Stornierung und Ausfallgebühr
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                <strong>1.</strong> Termine können telefonisch, per E-Mail, über Social-Media-Kanäle oder das Online-Buchungssystem vereinbart werden. Ein Vertrag kommt zustande, sobald der Termin vom Studio bestätigt wurde.
                            </p>
                            <p>
                                <strong>2.</strong> Vereinbarte Termine sind verbindlich. Wir bitten um eine Absage spätestens 24 Stunden vor dem Termin.
                            </p>
                            <p>
                                <strong>3.</strong> Bei einer Absage weniger als 24 Stunden vor dem Termin oder bei Nichterscheinen ohne Absage (No-Show) behält sich das Studio das Recht vor, eine Ausfallgebühr in Höhe von 50 % des Preises der gebuchten Behandlung in Rechnung zu stellen. Dem Kunden bleibt der Nachweis vorbehalten, dass kein oder ein wesentlich geringerer Schaden entstanden ist.
                            </p>
                            <p>
                                <strong>4.</strong> Bei Verspätungen des Kunden kann die Behandlungszeit verkürzt werden, um den nachfolgenden Terminplan einzuhalten. Der volle Behandlungspreis bleibt dennoch fällig.
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
                                <strong>1.</strong> Es gelten die zum Zeitpunkt der Leistungserbringung aktuellen Preise gemäß der im Studio ausliegenden Preisliste oder der Website.
                            </p>
                            <p>
                                <strong>2.</strong> Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
                            </p>
                            <p>
                                <strong>3.</strong> Die Bezahlung erfolgt unmittelbar nach der Behandlung. Wir akzeptieren:
                            </p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Barzahlung</li>
                                <li>Online-Banking / Kartenzahlung (sofern verfügbar)</li>
                                <li>PayPal</li>
                            </ul>
                        </div>
                    </section>

                    {/* § 4 Gutscheine */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 4 Gutscheine
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Gutscheine des Studios sind ab Ausstellungsdatum 3 Jahre gültig (gesetzliche Verjährungsfrist). Eine Barauszahlung des Gutscheinwerts ist ausgeschlossen. Gutscheine sind auf andere Personen übertragbar.
                        </p>
                    </section>

                    {/* § 5 Mitwirkungspflicht des Kunden & Haftung */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 5 Mitwirkungspflicht des Kunden & Haftung
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                <strong>1.</strong> Der Kunde ist verpflichtet, das Studio vor Beginn der Behandlung wahrheitsgemäß über bestehende Allergien, Infektionskrankheiten, Medikamenteneinnahme, Hautunverträglichkeiten oder eine bestehende Schwangerschaft zu informieren.
                            </p>
                            <p>
                                <strong>2.</strong> Das Studio übernimmt keine Haftung für Schäden oder unzureichende Ergebnisse, die auf unvollständigen oder falschen Angaben des Kunden beruhen.
                            </p>
                            <p>
                                <strong>3.</strong> Das Studio haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen. Für mitgebrachte Kleidung, Schmuck oder Wertgegenstände der Kunden wird keine Haftung übernommen.
                            </p>
                        </div>
                    </section>

                    {/* § 6 Mängelansprüche */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 6 Mängelansprüche (Nachbesserung) & Rückerstattung
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                <strong>1.</strong> Sollte eine Dienstleistung einen Mangel aufweisen (z. B. vorzeitiges Lösen der Wimpernverlängerung), ist der Kunde verpflichtet, diesen Mangel innerhalb von 5 Tagen nach der Behandlung schriftlich oder telefonisch zu melden.
                            </p>
                            <p>
                                <strong>2.</strong> Bei berechtigter Reklamation hat das Studio das Recht auf kostenlose Nachbesserung.
                            </p>
                            <p>
                                <strong>3.</strong> Spätere Reklamationen oder Mängel, die auf unsachgemäße Nachsorge (z. B. Kontakt mit Öl, Saunabesuch entgegen der Anweisung) zurückzuführen sind, sind von der kostenlosen Nachbesserung ausgeschlossen.
                            </p>
                            <p>
                                <strong>4.</strong> Dienstleistungen: Da es sich um individuell erbrachte Dienstleistungen handelt, ist eine Rückerstattung des gezahlten Betrags grundsätzlich ausgeschlossen.
                            </p>
                        </div>
                    </section>

                    {/* § 7 Jugendschutz */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 7 Jugendschutz
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Behandlungen an Personen unter 18 Jahren (insbesondere Permanent Make-up) werden nur durchgeführt, wenn eine schriftliche Einverständniserklärung sowie eine Ausweiskopie des gesetzlichen Vertreters vorliegen.
                        </p>
                    </section>

                    {/* § 8 Datenschutz */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 8 Datenschutz
                        </h2>
                        <p className="text-[#555] leading-relaxed">
                            Das Studio erhebt und verarbeitet personenbezogene Daten nur im Rahmen der gesetzlichen Bestimmungen (DSGVO). Detaillierte Informationen finden Sie in unserer separaten{" "}
                            <a href="/privacy" className="text-[#d4a373] hover:underline">
                                Datenschutzerklärung
                            </a>.
                        </p>
                    </section>

                    {/* § 9 Schlussbestimmungen */}
                    <section>
                        <h2 className="text-xl font-bold text-[#5c4033] mb-4">
                            § 9 Schlussbestimmungen
                        </h2>
                        <div className="text-[#555] leading-relaxed space-y-4">
                            <p>
                                <strong>1.</strong> Es gilt das Recht der Bundesrepublik Deutschland.
                            </p>
                            <p>
                                <strong>2.</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
                            </p>
                        </div>
                    </section>

                    {/* Stand */}
                    <div className="pt-6 border-t border-[#f4f3f0] text-sm text-[#897d61]">
                        Stand: Februar 2026
                    </div>
                </div>
            </div>
        </main>
    );
}
