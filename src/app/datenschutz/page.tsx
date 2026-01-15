export const metadata = {
    title: "Datenschutzerklärung | Smiling Studio",
    description: "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten.",
};

export default function DatenschutzPage() {
    return (
        <main className="pt-32 pb-20 bg-[#f8f7f6]">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif font-bold text-[#181611] mb-8">Datenschutzerklärung</h1>

                {/* Section 1 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#181611] mb-4">1. Datenschutz auf einen Blick</h2>

                    <h3 className="text-lg font-bold text-[#181611] mt-6 mb-2">Allgemeine Hinweise</h3>
                    <p className="text-[#555] mb-4">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>

                    <h3 className="text-lg font-bold text-[#181611] mt-6 mb-2">Datenerfassung auf dieser Website</h3>

                    <h4 className="font-bold text-[#181611] mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                    <p className="text-[#555] mb-4">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                    </p>

                    <h4 className="font-bold text-[#181611] mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
                    <p className="text-[#555] mb-4">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="text-[#555] mb-4">
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>

                    <h4 className="font-bold text-[#181611] mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h4>
                    <p className="text-[#555] mb-4">
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>

                    <h4 className="font-bold text-[#181611] mt-4 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                    <p className="text-[#555] mb-4">
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#181611] mb-4">2. Hosting</h2>
                    <p className="text-[#555] mb-4">
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                    </p>
                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Vercel</h3>
                    <p className="text-[#555] mb-4">
                        Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Wenn Sie unsere Website besuchen, werden mit Hilfe von Vercel das Nutzerverhalten, die Besucherquellen, die Region der Websitebesucher und die Besucherzahlen analysiert.
                    </p>
                </section>

                {/* Section 3 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#181611] mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Datenschutz</h3>
                    <p className="text-[#555] mb-4">
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                    <p className="text-[#555] mb-4">
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <address className="text-[#555] mb-4 not-italic">
                        Smiling Studio<br />
                        Musterstraße 123<br />
                        12345 Musterstadt<br /><br />
                        Telefon: +49 123 456789<br />
                        E-Mail: info@smilingstudio.de
                    </address>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Speicherdauer</h3>
                    <p className="text-[#555] mb-4">
                        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                    </p>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p className="text-[#555] mb-4">
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                </section>

                {/* Section 4 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#181611] mb-4">4. Datenerfassung auf dieser Website</h2>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Cookies</h3>
                    <p className="text-[#555] mb-4">
                        Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                    </p>
                    <p className="text-[#555] mb-4">
                        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden. Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                    </p>
                    <p className="text-[#555] mb-4">
                        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                    </p>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Kontaktformular</h3>
                    <p className="text-[#555] mb-4">
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                </section>

                {/* Section 5 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#181611] mb-4">5. Soziale Medien</h2>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Instagram</h3>
                    <p className="text-[#555] mb-4">
                        Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                    </p>
                    <p className="text-[#555] mb-4">
                        Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie.
                    </p>
                </section>

                {/* Section 6 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-[#181611] mb-4">6. Plugins und Tools</h2>

                    <h3 className="text-lg font-bold text-[#181611] mt-4 mb-2">Google Maps</h3>
                    <p className="text-[#555] mb-4">
                        Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className="text-[#555] mb-4">
                        Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                    </p>
                    <p className="text-[#555] mb-4">
                        Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                        <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#eeb32b] hover:underline">
                            https://policies.google.com/privacy?hl=de
                        </a>
                    </p>
                </section>

                {/* SSL Notice */}
                <section className="mb-12 bg-white p-6 rounded-xl border border-[#e6e2db]">
                    <h3 className="text-lg font-bold text-[#181611] mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                    <p className="text-[#555]">
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                </section>
            </div>
        </main>
    );
}
