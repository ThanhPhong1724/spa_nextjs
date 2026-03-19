"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    de: {
        // Navigation
        "nav.home": "HOME",
        "nav.services": "LEISTUNGEN",
        "nav.pricelist": "PREISLISTE",
        "nav.news": "NEWS",
        "nav.offers": "ANGEBOTE",
        "nav.voucher": "ONLINE GUTSCHEIN",
        "nav.booking": "Termin",
        "nav.booking_full": "Termin buchen",

        // Home Hero
        "hero.welcome": "Willkommen bei",
        "hero.studio": "Smiling Studio",
        "hero.description": "Mit über 10 Jahren Erfahrung und kontinuierlicher Weiterbildung gewährleisten wir höchste Qualität und herausragende Ergebnisse. Genießen Sie den einzigartigen Service in einem Ambiente, das Ihnen ein Lächeln ins Gesicht zaubert.",
        "hero.discover": "Leistungen entdecken",
        "hero.scroll": "Scroll",

        // Studio Section
        "studio.title": "Ihr Ort für Entspannung & Schönheit",
        "studio.subtitle": " ",

        // Services
        "services.title": "Unsere Leistungen",
        "services.subtitle": "",
        "services.view_all": "Alle Leistungen ansehen",
        "services.book_now": "Jetzt buchen",
        "services.consultation": "Beratung buchen",
        "services.headspa": "HEADSPA",
        "services.headspa_desc": "Ganzheitliche Kopfhautpflege und Entspannung für Körper und Geist.",
        "services.pmu": "PERMANENT MAKE UP",
        "services.pmu_desc": "Natürliche Schönheit mit modernsten Techniken und höchster Präzision.",
        "services.nails": "NAILS",
        "services.nails_desc": "Kreative Nageldesigns und professionelle Fußpflege für gepflegte Hände und Füße.",
        "services.lashes": "WIMPERN",
        "services.lashes_desc": "Voluminöse Wimpern für einen ausdrucksstarken Blick.",
        "services.brows": "AUGENBRAUEN",
        "services.brows_desc": "Perfekt geformte Augenbrauen für einen ausdrucksstarken Look.",

        // Reviews
        "reviews.title": "Das sagen unsere Kunden",
        "reviews.subtitle": "Bewertungen",

        // CTA
        "cta.title": "Bereit für Ihre Verwandlung?",
        "cta.description": "Buchen Sie noch heute Ihren Termin und erleben Sie den Smiling Studio Unterschied.",
        "cta.offers": "Angebote ansehen",

        // Footer
        "footer.contact": "Kontakt",
        "footer.hours": "Öffnungszeiten",
        "footer.follow": "Folgen Sie uns",
        "footer.payment": "Zahlungsarten",
        "footer.map": "Karte anzeigen",
        "footer.rights": "Alle Rechte vorbehalten.",
        "footer.home": "Startseite",
        "footer.imprint": "Impressum",
        "footer.terms": "AGB",
        "footer.privacy": "Datenschutzerklärung",

        // Leistungen Page
        "leistungen.title": "Unsere Leistungen",
        "leistungen.subtitle": "Entdecken Sie unser vielfältiges Angebot",
        "leistungen.cta_title": "Haben Sie Fragen?",
        "leistungen.cta_desc": "Kontaktieren Sie uns für eine kostenlose Beratung.",
        "leistungen.contact_us": "Kontakt aufnehmen",


        // Price List Page
        "pricelist.title": "PREISLISTE",
        "pricelist.subtitle": "Transparente Preise",
        "pricelist.note": "Alle Preise verstehen sich inklusive Mehrwertsteuer",
        "pricelist.book_cta": "Bereit für Ihre Behandlung?",

        // FAQ
        "pricelist.faq_title": "Häufig gestellte Fragen",
        "pricelist.faq_q1": "Wie viele Tage im Voraus sollte ich einen Termin buchen?",
        "pricelist.faq_a1": "In der Regel sind 2–3 Tage im Voraus noch Termine verfügbar. Vor Feiertagen oder Urlaubszeiten empfehlen wir, mindestens 1 Woche vorher zu buchen. Wir sind sehr flexibel und versuchen immer, die beste Lösung für unsere Kundinnen und Kunden zu finden.",
        "pricelist.faq_q2": "Ich kann meinen Termin nicht wahrnehmen. Wie storniere oder verschiebe ich ihn?",
        "pricelist.faq_a2": "Bitte informieren Sie uns so früh wie möglich. Eine kostenfreie Stornierung oder Umbuchung ist bis 24 Stunden vor dem Termin möglich. Bei kurzfristigeren Absagen berechnen wir 50% des Behandlungspreises.",
        "pricelist.faq_q3": "Werde ich vor der Behandlung ausführlich beraten?",
        "pricelist.faq_a3": "Ja. Vor jeder Behandlung erhalten Sie eine umfassende Beratung. Ein Aufklärungsbogen stellt sicher, dass Nebenwirkungen, Verhaltensregeln sowie relevante Angaben zu Medikamenten oder bestehenden Erkrankungen berücksichtigt werden.",

        // News Page
        "news.title": "Neuigkeiten",
        "news.subtitle": "Bleiben Sie informiert",
        "news.read_more": "Weiterlesen",
        "news.no_posts": "Aktuell keine Neuigkeiten verfügbar.",

        // Impressum
        "impressum.title": "Impressum",
        "impressum.owner": "Inhaberin",
        "impressum.address": "Anschrift",
        "impressum.contact": "Kontakt",
        "impressum.tax": "Steuernummer",

        // AGB
        "agb.title": "Allgemeine Geschäftsbedingungen",
        "agb.general": "Allgemeines",
        "agb.booking": "Terminvereinbarung",
        "agb.cancellation": "Stornierung",
        "agb.payment": "Zahlung",
        "agb.liability": "Haftung",

        // Datenschutz
        "datenschutz.title": "Datenschutzerklärung",
        "datenschutz.intro": "Wir freuen uns über Ihr Interesse an unserer Website.",
        "datenschutz.responsible": "Verantwortlicher",
        "datenschutz.collection": "Datenerhebung",
        "datenschutz.cookies": "Cookies",
        "datenschutz.rights": "Ihre Rechte",

        // Common
        "common.back": "Zurück",
        "common.more_info": "Mehr erfahren",
        "common.our_services": "Unsere Leistungen",
        "common.faq_title": "Häufig gestellte Fragen",
        "common.download": "Download",

        // Aquafacial Page
        "aquafacial.badge": "Exklusives Highlight",
        "aquafacial.highlight_title": "Hautanalyse &\nGlow-Technologie",
        "aquafacial.highlight_desc": "Starten Sie mit einer professionellen Hautanalyse – für Klarheit über Ihren Hautzustand und für gezielte & wirksame Pflege.",
        "aquafacial.slogan": "Maximale Wirkung – kein Verzicht.",
        "aquafacial.intro": "Verstopfte Poren blockieren Ihre Pflegeerfolge.",
        "aquafacial.intro2": "Erleben Sie die {0}10 Funktionen{1} modernster Technologie für Ihren perfekten Glow:",
        "aquafacial.f1": "Haut Analyse",
        "aquafacial.f2": "Sanfte Exfoliation",
        "aquafacial.f3": "Tiefenreinigung",
        "aquafacial.f4": "Porenverfeinerung",
        "aquafacial.f5": "Lifting",
        "aquafacial.f6": "Straffung",
        "aquafacial.f7": "Sauerstoff-Boost",
        "aquafacial.f8": "Feuchtigkeits-Boost",
        "aquafacial.f9": "Milderung feiner Linien",
        "aquafacial.f10": "Optimierte Wirkstoffaufnahme",
        "aquafacial.faq_q1": "Was ist eine Hautanalyse?",
        "aquafacial.faq_a1": "Bei der Hautanalyse wird Ihre Haut gemessen und analysiert – z. B. hinsichtlich Fettgehalt, Glanz, Pigmentierung und Hautunreinheiten. Die Ergebnisse helfen, Pflege, Produkte und Behandlungen gezielt auszuwählen und deren Wirkung messbar zu machen. Die Hautanalyse kann auch separat gebucht werden.",
        "aquafacial.faq_q2": "Warum ist diese Behandlung sinnvoll?",
        "aquafacial.faq_a2": "Die tägliche Reinigung entfernt oberflächliche Verschmutzungen, erreicht jedoch nicht die verhornte Hautschicht, die wie eine Barriere wirkt und die Aufnahme von Pflegeprodukten mindert.\n\nMit High-Tech-Elementen wie Bubble Cleaning, EMS Nano-Crystal, Oxygen und Thermo-Rollern wird die Haut intensiv gepflegt. Durch eine präzise Hautanalyse erhalten Sie individuelle Empfehlungen für Pflege, Produkte und Ernährung – für nachhaltige Ergebnisse.\n\nEin besonderes Erlebnis für Frauen und Männer, die ihre Haut, ihre Ausstrahlung wertschätzen und sich bewusst etwas Gutes tun möchten. ✨",
        "aquafacial.faq_q3": "Sind Ergebnisse sichtbar?",
        "aquafacial.faq_a3": "JA! Direkt nach der Behandlung folgt der Scan. Erlebe den Vorher-Nachher-Beweis live auf dem Monitor. Ein sichtbares Resultat – Maximale Transparenz für eine Investition – Einfach preiswert.",
        "aquafacial.faq_q4": "Ist die Behandlung schmerzhaft?",
        "aquafacial.faq_a4": "Nein. AquaFacial ist angenehm und entspannend.",
        "aquafacial.faq_q5": "Wie oft sollte AquaFacial durchgeführt werden?",
        "aquafacial.faq_a5": "Je nach Hautzustand alle 3–4 Wochen oder nach individueller Empfehlung.",
        "aquafacial.faq_q6": "Für welche Hauttypen ist AquaFacial geeignet?",
        "aquafacial.faq_a6": "Für alle Hauttypen, auch für empfindliche Haut. Die Behandlung sowie die verwendeten Produkte werden individuell auf den Hauttyp abgestimmt – basierend auf einer Hautanalyse vor der Behandlung.",
        "aquafacial.faq_q7": "Warum gibt es zwei Pakete BALANCE & ADVANCED?",
        "aquafacial.faq_a7": "Ganz einfach: Deine Haut ist individuell. Nach unserer präzisen Hautanalyse empfehlen wir dir genau die intensiven Schritte, die du wirklich brauchst – sei es ein intensives Peeling oder eine Lichttherapie. Da nicht jede Haut sofort für intensive Treatments bereit ist, starten wir immer mit dem Essential-Paket. So garantieren wir maximale Sicherheit und beste Ergebnisse.",
        "aquafacial.faq_q8": "Was unterscheidet die Bubble-Cleaning-Funktion von herkömmlichen Porenreinigern?",
        "aquafacial.faq_a8": "Die professionelle Bubble-Cleaning-Technologie arbeitet mit präzise regulierter Saugstärke und Geschwindigkeit, individuell angepasst an jeden Hauttyp. Gleichzeitig werden während der Reinigung pflegende Wirkstoffe zugeführt. So wird die Haut gründlich gereinigt, ohne sie auszutrocknen oder das Feuchtigkeitsgleichgewicht zu stören – im Gegensatz zu vielen handelsüblichen Geräten.",

        // Permanent Makeup Page
        "pmu.intro_title": "Zeitlose Schönheit, jeden Tag.",
        "pmu.intro_desc": "Wach auf und sei fertig! Dank 15-jähriger Expertise und kontinuierlicher Weiterbildung bieten wir Ihnen die besten und sichersten Verfahren der Branche. Wir minimieren jedes Risiko und setzen auf innovative Methoden für ein täuschend echtes Finish. Qualität, die man sieht – präzise, langanhaltend und perfekt auf dich abgestimmt.",
        "pmu.brows": "Perfekte Form & Fülle.",
        "pmu.lips": "Sanfte Farbe & klare Konturen.",
        "pmu.eyes": "Ausdrucksstarker Blick ohne Schminken.",
        "pmu.consult_desc": "Wir bieten eine kostenfreie Beratung, bei der Form, Farbwunsch und Hautzustand individuell analysiert werden – für maximale Sicherheit ohne finanzielles Risiko.",
        "pmu.consult_cta": "Sichern Sie sich jetzt Ihre kostenlose Beratung!",
        "pmu.faq_q1": "Warum Smiling Studio?",
        "pmu.faq_a1": "Langjährige Erfahrung, fundierte Hautkenntnisse und regelmäßige Schulungen in Asien & Europa ermöglichen uns, Risiken zu minimieren und natürlich wirkende Ergebnisse bei verschiedenen Hauttypen zu erzielen.",
        "pmu.faq_q2": "Wie lange hält Permanent Make-up?",
        "pmu.faq_a2": "In der Regel 3–5 Jahre, abhängig von Hauttyp, Hautfarbe und äußeren Einflüssen wie Sonne, Pflege und Lebensstil.",
        "pmu.faq_q3": "Wie viele Behandlungen sind notwendig?",
        "pmu.faq_a3": "Meist 1–2 Behandlungen im Abstand von ca. 4 Wochen, je nach Hautstruktur und individueller Farbaufnahme.",
        "pmu.faq_q4": "Wie wird sichergestellt, dass Form und Farbe zu mir passen?",
        "pmu.faq_a4": "Form und Farbe werden vor der Behandlung individuell vorgezeichnet. Die Pigmentierung beginnt erst nach deiner vollständigen Zustimmung.",
        "pmu.faq_q5": "Was erwartet mich bei der Beratung?",
        "pmu.faq_a5": "Bei der Beratung informieren wir Sie nicht nur über mögliche Risiken, sondern analysieren auch ehrlich, ob Ihre Wünsche und Erwartungen realistisch und umsetzbar sind. Wir beraten Sie offen und transparent, damit Sie keine falschen Erwartungen haben und kein Geld unnötig ausgeben.",
        "pmu.faq_q6": "Tut Permanent Make-up weh?",
        "pmu.faq_a6": "Dank moderner, oberflächlicher Technik ist die Behandlung kaum schmerzhaft und in der Regel gut verträglich.",

        // Wimpern Page
        "wimpern.s1_title": "Wimpernverlängerung",
        "wimpern.s1_desc": "Typgerechte Wimpernverlängerung für mehr Volumen und einen frischen, eleganten Blick.",
        "wimpern.s2_title": "Wimpernwelle (Wimpernlifting)",
        "wimpern.s2_desc": "Ideal bei langen Naturwimpern: Ein Lifting, das ohne Wimpernzange auskommt und eure natürliche Schönheit betont.",
        "wimpern.faq_q1": "Warum sollten Sie unser Studio wählen?",
        "wimpern.faq_a1": "Über 10 Jahre Erfahrung, eine große Auswahl an ultrafeinen bis modischen Wimpernarten, sorgfältige Beratung zur passenden Augenform und Technik, die Ihre Naturwimpern schützt. Bei uns gilt: schön, leicht und haltbar – aber niemals schädlich für Ihre echten Wimpern.",
        "wimpern.faq_q2": "Was macht eine gute Wimpernverlängerung aus?",
        "wimpern.faq_a2": "Eine hochwertige Verlängerung ist: schön geformt, leicht und reizfrei, sieht auch nach 3–4 Wochen noch ordentlich aus – nicht chaotisch, ca. 50% bleiben erhalten, und das Wichtigste: Ihre Naturwimpern bleiben gesund und unbeschädigt.",
        "wimpern.faq_q3": "Wie entferne ich Wimpernverlängerungen richtig?",
        "wimpern.faq_a3": "Nicht selbst ziehen! Wir nutzen einen professionellen Remover, der den Kleber sanft auflöst – schnell, ohne Reizung und ohne Verlust der Naturwimpern.",
        "wimpern.faq_q4": "Brauche ich Mascara bei Extensions?",
        "wimpern.faq_a4": "Nein. Mascara verklebt die Extensions und beim Abschminken wird die Klebequalität beeinträchtigt, wodurch sowohl die Haltbarkeit als auch die Form der Wimpern beeinflusst werden.",
        "wimpern.faq_q5": "Wie lange hält eine Wimpernwelle (Wimpernlifting)?",
        "wimpern.faq_a5": "Eine Wimpernwelle hält im Durchschnitt ca. 4 Wochen, je nach Haarstruktur und Pflege.",

        // Nails Page
        "nails.s1_title": "NAGELMODELLAGE",
        "nails.s1_desc": "Mehr als 900 Farben und Designs ohne Grenzen – von klassisch bis extravagant. Wir gestalten Ihre Nägel mit höchster Sorgfalt für jeden individuellen Look.",
        "nails.s2_title": "PREMIUM FUßPFLEGE",
        "nails.s2_desc": "Exklusive Fußpflege mit modernem Dampfgerät: Sanfte Tiefenentspannung, geöffnete Poren und maximale Pflegeaufnahme – für ein spürbar gepflegtes und entspanntes Hautgefühl.",
        "nails.faq_q1": "Warum sollten Sie uns wählen?",
        "nails.faq_a1": "Über 10 Jahre Erfahrung, mehr als 900 Farben & Designs, Garantie auf unsere Arbeiten – und wir nehmen uns Zeit für eine sorgfältige, nicht überhastete Behandlung.",
        "nails.faq_q2": "Gibt es kostenlose Reparaturen?",
        "nails.faq_a2": "Ja – immer kostenlos, sogar nach 3 oder 4 Wochen. Egal aus welchem Grund.",
        "nails.faq_q3": "Was ist das Besondere an unserer Fußpflege?",
        "nails.faq_a3": "Wir arbeiten mit Dampfgerät und Silikon-Socken, damit die Haut sich entspannt, die Poren sich öffnen und die Pflege tiefer einzieht – für besonders weiche, gepflegte Füße.",

        // Augenbrauen Page
        "augenbrauen.s1_title": "Zupfen & Färben",
        "augenbrauen.s1_desc": "Sanftes Formen und präzises Färben der Augenbrauen für einen gepflegten, ausdrucksstarken Look – abgestimmt auf Ihre Gesichtsform und Haarfarbe.",
        "augenbrauen.s2_title": "Laminieren",
        "augenbrauen.s2_desc": "Für vollere, perfekt geformte Brauen mit natürlichem Glanz und langanhaltendem Ergebnis.",

        // Innovative Treatments Page
        "it.intro": "Erlebe eine einzigartige Kombination aus kraftvoller Oxygen-Power, hochwirksamen EMS-Nano-Crystals und Licht Therapie, die deine Pflege auf ein neues Level hebt",
        "it.intro_bold": "für unreine Haut, vitale Kopfhaut und unterstütztes Haarwachstum.",
        "it.sticker": "Sichtbare Ergebnisse dank",
        "it.sticker2": "Vorher-/Nachher-Analyse",
        "it.osd_bubble": "Sanftes Vakuum mit Bubble-Technologie entfernt Talg & Rückstände.",
        "it.osd_oxygen": "Reiner Sauerstoff vitalisiert die Kopfhaut und fördert die Durchblutung.",
        "it.osd_serum": "Einschleusung exklusiver Nährstoffe direkt bis zur Haarwurzel.",
        "it.osd_result_label": "Das Ergebnis",
        "it.osd_result": "Spürbar befreite, revitalisierte Kopfhaut –",
        "it.osd_result2": "für sichtbar kräftigeres und gesünder wirkendes Haar.",
        "it.mn_f1": "Kopfhaut-Regeneration",
        "it.mn_f2": "Haarwachstum-Impuls",
        "it.mn_f3": "Haarstruktur-Stärkung",
        "it.mn_f4": "Wissenschaftlich fundiert",
        "it.glow_subtitle": "Schluss mit rauer Haut. Willkommen sanfte Seidigkeit.",
        "it.glow_s1": "Sanftes Peeling",
        "it.glow_s1_desc": "Entfernt Verhornungen, klärt die Poren und fördert die Hauterneuerung – ideal für raue Areale wie Oberarme, Oberschenkel oder Rücken.",
        "it.glow_s2_desc": "Tiefenreinigung mit Sauerstoff-Bläschen.",
        "it.glow_s3_desc": "Konzentrierter Sauerstoff zur Vitalisierung und Regeneration der Haut.",
        "it.glow_s4_desc": "Nano-Kristalle & EMS-Impulse für die tiefe Wirkstoffaufnahme.",
        "it.glow_s5_desc": "Unterstützt die Hautregeneration und stimuliert die Collagenproduktion.",
        "it.glow_s6_desc": "Abschlusspflege zur Beruhigung, Mattierung und zum Schutz vor neuen Unreinheiten.",
        "it.experts_title": "Expertenmeinungen und Studien",
        "it.vid1_label": "Wirksamkeit bestätigt",
        "it.vid2_label": "Technologie erklärt",
        "it.vid3_label": "Arzt-Bestätigung",
        "it.info_title": "Informationsblatt",
        "it.faq_q1": "Für wen ist die Oxygen Infusion besonders sinnvoll?",
        "it.faq_a1": `Wenn die tägliche Haarpflege zu Hause nicht mehr ausreicht, ist es vielleicht Zeit für professionelle Unterstützung.

                    Eine Oxygen Infusion ist dabei mehr als nur eine Behandlung – sie ist auch Wertschätzung für sich selbst, besonders wenn sich die Haare schwer, fettig oder kraftlos anfühlen.

                    Die Behandlung:
                    • entfernt Ablagerungen und Silikonreste
                    • reinigt die Kopfhaut tief mit moderner Oxygen-Technologie
                    • schleust hochwertige Wirkstoffe gezielt in die Kopfhaut ein
                    • kann die Durchblutung der Haarwurzel fördern

                    Das Ergebnis: eine frische, gut versorgte Kopfhaut, kräftigere Haarwurzeln, mehr Fülle und Volumen im Haar sowie bessere Voraussetzungen für gesundes Haarwachstum.

                    So entsteht eine saubere, gut versorgte Kopfhaut, die bessere Voraussetzungen für kräftigeres und gesünderes Haarwachstum schafft und dazu beitragen kann, das Risiko von lichtem Haar oder Haarverlust zu reduzieren.

                    Viele Kund*innen empfinden die Behandlung zudem als wohltuende Auszeit – ein Moment der Entspannung, Verwöhnung und Selbstfürsorge.

                    Die Realität ist: Wer nichts versucht, verändert nichts.
                    Selbst wenn sich der Haarausfall nur teilweise reduziert und neues Haar kräftiger nachwächst, investieren Sie aktiv in Ihr Wohlbefinden, Ihre Ausstrahlung und Ihr Selbstvertrauen, anstatt dem Haarverlust einfach zuzusehen.`,
        "it.faq_q2": "Woher weiß ich, ob das GlowMe Treatment für meine Haut geeignet ist?",
        "it.faq_a2": "Kontaktieren Sie uns gerne für eine kostenlose Beratung. Sie können uns vorab Bilder per WhatsApp senden, damit wir den aktuellen Hautzustand einschätzen und Sie individuell beraten können. Bei entzündeter Haut oder offenen Wunden empfehlen wir grundsätzlich, vorab einen Arzt aufzusuchen.",
        "it.faq_q3": "Ich finde keinen Preis für GlowMe & Microneedling-warum?",
        "it.faq_a3": "Da jede Haut und jede Kopfhaut unterschiedlich ist, wird der Behandlungsaufwand individuell bestimmt. Nach Zusendung einiger Fotos können wir den Zustand und die Größe des Areals einschätzen und Ihnen einen passenden Preis nennen.",
        "it.faq_q4": "Wie viele Behandlungen pro Treatment sind notwendig",
        "it.faq_a4": `Der Erfolg hängt von verschiedenen Faktoren ab – zum Beispiel von Ernährung, Schlaf, Stress, Ihrer Kopfhaut- bzw. Hautpflegeroutine sowie vom individuellen Zustand Ihrer Haut oder Kopfhaut.

                    Schon nach der ersten Behandlung erhalten Sie wertvolle Hinweise und Wissen, wie Sie Ihre Haut oder Kopfhaut zu Hause besser pflegen und unterstützen können.

                    Wie viele Behandlungen sinnvoll sind, ist immer eine individuelle Entscheidung. Wir setzen unsere Kund*innen niemals unter Druck, mehrere Termine als Pflicht zu buchen.

                    Gerade bei Haarbehandlungen lohnt es sich, sich selbst eine einfache Frage zu stellen: Warten Sie auf ein 100%-Wunder, das es tatsächlich kaum gibt, oder sichern Sie sich lieber jedes einzelne Prozent an Haardichte, das heute möglich ist? Entscheiden Sie selbst: Wollen Sie die Kontrolle über Ihre Ausstrahlung zurückgewinnen, oder schauen Sie weiter zu, wie die Bürste voller wird? Jedes gerettete Haar zählt für Ihre Zukunft.

                    Es geht vielmehr um eine persönliche Entscheidung – eine Investition in Gesundheit, Beauty und Ihr eigenes Wohlbefinden, die auch von Ihrer Lebenssituation und Ihrem Budget abhängen kann.`,
        "it.faq_q5": "Welche Behandlung eignet sich bei dünner werdendem oder lichtem Haar?",
        "it.faq_a5": `Bei Haarausfall oder dünner werdendem Haar können sowohl ein Detox-Treatment der Kopfhaut als auch Microneedling unterstützend wirken, um die Haarwurzel zu stärken und das Haarwachstum zu stimulieren.

                    Detox-Kopfhautbehandlung
                    Dieses Treatment reinigt die Kopfhaut tief von Ablagerungen, Silikonresten und überschüssigem Talg. Dadurch wird die Kopfhaut erfrischt und die Haarwurzel kann Nährstoffe besser aufnehmen – eine wichtige Grundlage für gesünderes Haarwachstum.

                    Microneedling der Kopfhaut
                    Beim Microneedling entstehen feine Mikrokanäle in der Kopfhaut, wodurch die Durchblutung und Regeneration der Haarfollikel angeregt wird. Gleichzeitig können Wirkstoffe gezielter und tiefer in die Haut eindringen, um das Haarwachstum zu unterstützen.

                    In vielen Fällen empfehlen wir, zunächst mit einem Detox-Treatment zu beginnen. Es ist sanfter und schafft die Basis für eine gesunde Kopfhaut.
                    Microneedling kann anschließend eine intensivere Option sein, erfordert jedoch auch mehr Aufmerksamkeit in der Nachpflege, da bei jeder Behandlung mit Mikroverletzungen ein gewisses Infektionsrisiko besteht und eine gute Pflege der Kopfhaut wichtig ist.

                    Wer auf das 100%ige Wunder wartet, verliert meistens nur Zeit – und noch mehr Haare. Therapie bedeutet, den Status Quo zu verbessern. Wenn Ihr Haar durch unsere Hilfe nur 5 % oder 10 % gesünder wächst, ist das bereits ein Sieg über den genetischen oder hormonellen Verfall.

                    Letztlich hängt die Entscheidung immer davon ab, wie wichtig Ihnen das Thema Haarausfall ist und wie aktiv Sie in Ihre Haar- und Kopfhautgesundheit investieren möchten.`,
        "it.faq_q6": "Sind die Behandlungen schmerzhaft oder invasiv?",
        "it.faq_a6": "Nein. Beide Anwendungen sind sanft, angenehm und nicht invasiv. Es ist keine Ausfallzeit erforderlich.",
        "it.faq_q7": "Wie oft sollten die Behandlungen durchgeführt werden?",
        "it.faq_a7": "Für optimale Ergebnisse empfehlen wir eine regelmäßige Anwendung, abgestimmt auf die individuellen Bedürfnisse der Kopfhaut. Die Häufigkeit hängt vollständig von der individuellen Reaktion der Haare sowie vom Zustand der Kopfhaut ab.",
        "it.faq_q8": "Hilft das Treatment wirklich dabei, die Haardichte sichtbar zu steigern?",
        "it.faq_a8": "Absolut. Die Wirksamkeit dieser Technologien ist weltweit anerkannt und wurde sogar bereits im US-Fernsehen als wegweisende Methode für die Haarpflege vorgestellt.",
        "it.faq_q9": "Tut Scalp Microneedling weh?",
        "it.faq_a9": "Die Behandlung ist in der Regel gut verträglich. Sie spüren ein leichtes Kribbeln oder feines Piksen auf der Kopfhaut, das jedoch nur kurzzeitig auftritt. Dank moderner Technik und kontrollierter Anwendung bleibt die Behandlung angenehm und sicher.",
        "it.faq_q10": "Ist Scalp Microneedling gefährlich oder verursacht es starke Verletzungen?",
        "it.faq_a10": "Nein, die Methode ist wissenschaftlich untersucht und wird auch in milden Varianten für die Heimanwendung angeboten – sie gilt daher nicht als übermäßig riskant. Es entstehen keine tiefen oder starken Verletzungen, sondern feine, oberflächliche Mikroimpulse, die die natürlichen Hautprozesse aktivieren. Im Studio arbeiten wir mit professioneller Geschwindigkeit und präzise eingestellter Eindringtiefe – in Kombination mit hochwertigen Wirkstoff-Seren. Strenge Hygienestandards und eine sterile Arbeitsweise minimieren das Risiko deutlich und ermöglichen eine sichere, kontrollierte sowie effektivere Anwendung als bei der Selbstanwendung zu Hause.",

        // HeadSpa Page
        "headspa.typewriter": "Entspannung für Körper und Geist",
        "headspa.packages_title": "RELAX & GLOW PACKAGES",
        "headspa.pkg1_name": "Signature Asian Head Calm",
        "headspa.pkg1_desc": "Durch die gezielte Stimulation traditioneller Druckpunkte lösen wir tief sitzende Blockaden und Verspannungen. Ideal für Stressabbau, mentale Klarheit und ganzheitliches Wohlbefinden.",
        "headspa.pkg2_name": "Headspa Essential\n(60 Min.)",
        "headspa.pkg2_desc": "Basispaket mit Kopfhautpflege, Kopfmassage, Haarsauna und Dekolleté-Massage – für ganzheitliche Entspannung und Pflege.",
        "headspa.pkg3_name": "Headspa Deluxe\n(90 Min.)",
        "headspa.pkg3_desc": "Inklusive Hot-Stone-Nackenmassage, Gesichts-Tiefenreinigung und Lichttherapie für Klärung und Regeneration der Haut.",
        "headspa.pkg4_name": "Headspa Together",
        "headspa.pkg4_desc": "Gemeinsam entspannen und genießen – das Headspa-Erlebnis für zwei, ob Freundinnen, Mutter & Tochter oder als Paar.",
        "headspa.faq_q1": "Warum unser Headspa?",
        "headspa.faq_a1": "Ein exklusives, ganzheitliches Headspa-Konzept – von professioneller Kopfhautpflege bis zu tiefgehender Entspannung in stilvollem Ambiente, auch als Erlebnis für zwei.",
        "headspa.faq_q2": "Was macht unsere Kopfmassage besonders?",
        "headspa.faq_a2": "Unsere Kopfmassage folgt den Prinzipien der asiatischen Naturheilkunde und verbindet achtsame Berührungen mit gezielten Druckpunkten – für spürbare Entspannung und neues inneres Gleichgewicht.",

        // Angebote Page
        "angebote.title": "Jetzt Vorteil sichern",
        "angebote.download": "Downloaden",
        "angebote.how_title": "So funktioniert\u0027s",
        "angebote.step1": "Laden Sie das gewünschte Angebot als Bild herunter.",
        "angebote.step2": "Zeigen Sie das Bild bei Ihrem Termin im Studio vor.",
        "angebote.step3": "Lösen Sie den Gutschein ein und sparen Sie sofort!",

        // Gutschein Page
        "gutschein.title": "ONLINE GUTSCHEIN",
        "gutschein.subtitle": "Die perfeckte Lösung für jeden Anlass",
        "gutschein.subtitle2": "schnell, persönlich & flexibel.",
        "gutschein.step1_title": "Betrag via PayPal senden",
        "gutschein.step1_desc": "Überweisen Sie den gewünschten Betrag an",
        "gutschein.step1_suffix": "(oder QR-Code auf dem Bildschirm scannen).",
        "gutschein.step2_title": "Angaben hinzufügen",
        "gutschein.step2_desc": "Bitte geben Sie im Notizfeld folgende Infos an:",
        "gutschein.step2_l1": "Name des Gutscheinempfängers",
        "gutschein.step2_l2": "E-Mail-Adresse (für den Gutscheinversand) oder Selbstabholung",
        "gutschein.step2_l3": "Handynummer (für Rückfragen)",
        "gutschein.step2_example": "Beispiel:",
        "gutschein.step2_ex1": "Max Mustermann | max@example.de | 0176 12345678",
        "gutschein.step2_ex2": "oder",
        "gutschein.step2_ex3": "Max Mustermann | Selbstabholung | 0176 12345678",
        "gutschein.step2_warning": "Ohne diese Angaben kann sich die Bearbeitung Ihres Gutscheins verzögern",
        "gutschein.step3_title": "Erhalt",
        "gutschein.step3_desc": "Nach Zahlungseingang senden wir Ihnen den Gutschein umgehend zu oder bereiten ihn zur Abholung vor.",
        "gutschein.paypal_badge": "Sichere Zahlung via PayPal",
        "gutschein.notice": "Bitte beachten:",
        "gutschein.notice_text": "Die Zustellung des Online-Gutscheins erfolgt per E-Mail – Montag bis Samstag zwischen 10:00 Uhr und 18:00 Uhr.",
        "gutschein.cash_badge": "Barzahlung",
        "gutschein.cash_title": "Möchten Sie einen Gutschein abholen und bar bezahlen?",
        "gutschein.cash_desc": "Senden Sie uns bitte eine Nachricht mit dem Namen des Empfängers und dem gewünschten Betrag. Wir bereiten alles für Sie vor – Sie können den Gutschein bei uns abholen und bar bezahlen.",
        "gutschein.cash_cta": "Jetzt per WhatsApp anfragen",

        // Schulung Page
        "schulung.hero_title": "Ihre Beauty-Karriere",
        "schulung.hero_title2": "15 Jahre Vorsprung ab Tag 1!",
        "schulung.hero_desc": "Wir lehren Ihnen das Handwerk und das komplette System dahinter. Sichern Sie sich einen krisensicheren Beruf, der Ihnen langfristige Stabilität und echte Karrierechancen bietet. Keine Umwege – nur echte Praxis.",
        "schulung.benefits_title": "IHR ERFOLGSPAKET",
        "schulung.b1_title": "Maximale Praxis",
        "schulung.b1_desc": "Unbegrenztes Üben an Modellen, bis jeder Handgriff sitzt.",
        "schulung.b2_title": "Schluss mit Fehlkäufen",
        "schulung.b2_desc": "Wir zeigen Ihnen genau, was Sie wirklich brauchen. Vermeide 100% typische Anfängerfehler",
        "schulung.b3_title": "Best-Preis-Netzwerk",
        "schulung.b3_desc": "Zugriff auf unsere Netzwerke für Profi-Zubehör – garantiert beste Preise und höchste Qualität.",
        "schulung.b4_title": "Business & Media Skills",
        "schulung.b4_desc": "Von Steuer-Basics und Studio-Verwaltung bis zur perfekten Social-Media-Präsentation.",
        "schulung.b5_title": "Karriere-Boost",
        "schulung.b5_desc": "Wir unterstützen Sie bei der Jobsuche oder bei Ihrer Gründung.",
        "schulung.b6_title": "Unser Versprechen",
        "schulung.b6_desc": "Wir haben die Fehler der letzten 15 Jahre gemacht, damit Sie sie nicht machen müssen.",
        "schulung.courses_title": "Unsere Kurse",
        "schulung.courses_desc": "Wählen Sie den Kurs, der zu Ihren Zielen passt. Wir beraten Sie persönlich und erstellen eine Route, die auf Ihre Lebenssituation und Ihr Investment zugeschnitten ist.",
        "schulung.courses_note": "Kursbeginn und Dauer individuell anpassbar",
        "schulung.c1_name": "NAILS PROFI-KURS",
        "schulung.c1_desc": "Detail-Training mit 100% Praxis an echten Modellen. Teste über 1.000 Farben und Profi-Equipment.",
        "schulung.c1_dur": "2 Kursstufen",
        "schulung.c1_f1": "100% Praxis",
        "schulung.c1_f2": "1.000+ Farben testen",
        "schulung.c1_f3": "Individuelle Technik",
        "schulung.c1_f4": "Profi-Speed Training",
        "schulung.c2_name": "BEAUTY-TRIO",
        "schulung.c2_desc": "Pediküre, Head Spa & Wimpernverlängerung – drei gefragte Services in einem Kurs.",
        "schulung.c2_dur": "7 Tage Intensiv",
        "schulung.c2_f1": "3 Services in 1",
        "schulung.c2_f2": "Sofort profitabel",
        "schulung.c2_f3": "Größere Zielgruppe",
        "schulung.c2_f4": "Maximale Bindung",
        "schulung.c3_name": "STUDIO BUSINESS MASTERY",
        "schulung.c3_desc": "Meistere Marketing, Buchhaltungs-Know-how und Management – Expertise aus 15 Jahren Praxis.",
        "schulung.c3_dur": "3 Tage",
        "schulung.c3_f1": "Business-Plan",
        "schulung.c3_f2": "Social Media Power",
        "schulung.c3_f3": "Fertige Website",
        "schulung.c3_f4": "Steuer-Basics",
        "schulung.details": "Details",
        "schulung.contact": "Kontakt",
        "schulung.selfstudy_title": "Selbststudium oder Profi-Schulung?",
        "schulung.selfstudy_1": "Selbststudium kostet Sie Zeit, Kunden und Ihren Ruf.",
        "schulung.selfstudy_2": "Zwei Stunden pro Behandlung? Kein rentables Business.",
        "schulung.selfstudy_3": "Ohne Struktur und Tempo können Sie gegen erfahrene Studios nicht bestehen.",
        "schulung.selfstudy_4": "Eine professionelle Ausbildung macht Sie von Anfang an konkurrenzfähig.",
        "schulung.faq_title": "FAQ – Häufig gestellte Fragen",
        "schulung.faq_q1": "Warum ein Handwerk?",
        "schulung.faq_a1": "Weil Sie damit die volle Kontrolle über Ihr Leben haben: KI-sicher (Handwerk ist echte Kunst), krisensicher (keine Angst vor Kurzarbeit), flexibel für die Familie, ein finanzielles Plus als Zusatzeinkommen und überall gefragt mit Ihrem Zertifikat.",
        "schulung.faq_q2": "Warum unsere Schulung?",
        "schulung.faq_a2": "Wir verkaufen keine Theorie, sondern deine Abkürzung zum Erfolg. Profitiere von 15 Jahren Markterfahrung, individuelle Technik statt starres Schema F, modernes Business-Know-how inklusive Social-Media-Marketing, und Innovation statt Stillstand mit Trends wie Original Head Spa.",
        "schulung.faq_q3": "Wer ist für diese Programme geeignet?",
        "schulung.faq_a3": "Unsere Schulungen richten sich an Quereinsteiger (berufliche Neuorientierung), Beauty-Profis (Portfolio erweitern), und nebenberufliche Gründer (flexibles Zusatzeinkommen). Egal ob Vollzeit-Karriere oder zweites Standbein.",
        "schulung.faq_q4": "Brauche ich besonderes Talent oder Begabung?",
        "schulung.faq_a4": "Nein! Erfolg basiert zu 90% auf Technik, Übung und Präzision. Unsere Programme sind so aufgebaut, dass wir Ihnen die handwerklichen Fähigkeiten Schritt für Schritt beibringen. Mit Geduld und professioneller Anleitung kann jeder diese Kunst erlernen.",
        "schulung.faq_q5": "Ich bin schon etwas älter. Kann ich noch erfolgreich gründen?",
        "schulung.faq_a5": "Definitiv ja! In der Beauty-Branche zählen Erfahrung, Empathie und Professionalität oft mehr als das Alter. Reife Persönlichkeiten strahlen oft Ruhe und Vertrauenswürdigkeit aus, die Kunden sehr schätzen. Es ist nie zu spät!",
        "schulung.faq_q6": "Kann ich Online- und Offline-Lernen kombinieren?",
        "schulung.faq_a6": "Ja, wir bieten flexible Lernmodelle an. Theoretische Grundlagen können bequem online erarbeitet werden. Praktische Module finden offline in unserem Studio statt, da die feine Handarbeit direkte Korrektur erfordert.",
        "schulung.faq_q7": "Was passiert, wenn ich während des Kurses krank werde?",
        "schulung.faq_a7": "Wir verstehen, dass unvorhersehbare Dinge passieren können. Bei wichtigen Gründen (z.B. Krankheit) bieten wir nach Absprache die Möglichkeit, den Kurs zu unterbrechen und später fortzusetzen.",
        "schulung.faq_q8": "Gibt es eine Rückerstattung?",
        "schulung.faq_a8": "Sobald der Kurs begonnen und Lehrmaterialien ausgehändigt wurden, ist eine Rückerstattung in der Regel ausgeschlossen. Wir empfehlen vorab ein Beratungsgespräch, um sicherzustellen, dass der Kurs perfekt zu Ihren Zielen passt.",
        "schulung.faq_q9": "Wie funktioniert die Jobvermittlung?",
        "schulung.faq_a9": "Jobvermittlung bedeutet bei uns: Networking (breites Netzwerk an Partner-Studios) und Existenzgründung (Tipps zu Marketing, Preisgestaltung und Kundenakquise für Selbstständige).",
        "schulung.faq_q10": "Was lerne ich über die Gründung meines eigenen Studios?",
        "schulung.faq_a10": "Sie lernen, Wettbewerber strategisch zu analysieren und sich klar zu positionieren. Wir bereiten Sie fachlich und unternehmerisch vor – mit Marketing, Kundenakquise, Branding und effizienter Studioführung bei optimierten Kosten.",
        "schulung.more_questions": "Haben Sie weitere Fragen?",
        "schulung.whatsapp_cta": "Kontaktieren Sie uns per WhatsApp!",
    },
    en: {
        // Navigation
        "nav.home": "HOME",
        "nav.services": "SERVICES",
        "nav.pricelist": "PRICES",
        "nav.news": "NEWS",
        "nav.offers": "OFFERS",
        "nav.voucher": "GIFT CARD",
        "nav.booking": "Book",
        "nav.booking_full": "Book Appointment",

        // Home Hero
        "hero.welcome": "Welcome to",
        "hero.studio": "Smiling Studio",
        "hero.description": "With over 10 years of experience and continuous training, we guarantee the highest quality and outstanding results. Enjoy our unique service in an ambiance that puts a smile on your face.",
        "hero.discover": "Discover Services",
        "hero.scroll": "Scroll",

        // Studio Section
        "studio.title": "A Place to Feel Good",
        "studio.subtitle": "Our Studio",

        // Services
        "services.title": "Services",
        "services.subtitle": "Our Treatments",
        "services.view_all": "View All Services",
        "services.book_now": "Book Now",
        "services.consultation": "Book Consultation",
        "services.headspa": "HEADSPA",
        "services.headspa_desc": "Holistic scalp care and relaxation for body and mind.",
        "services.pmu": "PERMANENT MAKE UP",
        "services.pmu_desc": "Natural beauty with state-of-the-art techniques and highest precision.",
        "services.nails": "NAILS",
        "services.nails_desc": "Creative nail designs and professional foot care for well-groomed hands and feet.",
        "services.lashes": "EYELASHES",
        "services.lashes_desc": "Voluminous lashes for an expressive look.",
        "services.brows": "EYEBROWS",
        "services.brows_desc": "Perfectly shaped eyebrows for an expressive look.",

        // Reviews
        "reviews.title": "What Our Clients Say",
        "reviews.subtitle": "Reviews",

        // CTA
        "cta.title": "Ready for Your Transformation?",
        "cta.description": "Book your appointment today and experience the Smiling Studio difference.",
        "cta.offers": "View Offers",

        // Footer
        "footer.contact": "Contact",
        "footer.hours": "Opening Hours",
        "footer.follow": "Follow Us",
        "footer.payment": "Payment Methods",
        "footer.map": "View Map",
        "footer.rights": "All rights reserved.",
        "footer.home": "Home",
        "footer.imprint": "Imprint",
        "footer.terms": "Terms",
        "footer.privacy": "Privacy Policy",

        // Leistungen Page
        "leistungen.title": "Our Services",
        "leistungen.subtitle": "Discover our diverse offering",
        "leistungen.cta_title": "Have Questions?",
        "leistungen.cta_desc": "Contact us for a free consultation.",
        "leistungen.contact_us": "Contact Us",


        // Price List Page
        "pricelist.title": "PRICE LIST",
        "pricelist.subtitle": "Transparent Prices",
        "pricelist.note": "All prices include VAT",
        "pricelist.book_cta": "Ready for your treatment?",

        // FAQ
        "pricelist.faq_title": "Frequently Asked Questions",
        "pricelist.faq_q1": "How many days in advance should I book an appointment?",
        "pricelist.faq_a1": "Usually, appointments are available 2–3 days in advance. Before holidays or vacation periods, we recommend booking at least 1 week in advance. We are very flexible and always try to find the best solution for our customers.",
        "pricelist.faq_q2": "I cannot keep my appointment. How do I cancel or reschedule?",
        "pricelist.faq_a2": "Please inform us as soon as possible. Free cancellation or rescheduling is possible up to 24 hours before the appointment. For cancellations on shorter notice, we charge 50% of the treatment price.",
        "pricelist.faq_q3": "Will I receive a detailed consultation before the treatment?",
        "pricelist.faq_a3": "Yes. Before every treatment, you will receive a comprehensive consultation. An informed consent form ensures that side effects, behavioral guidelines, and relevant information about medications or existing conditions are taken into account.",

        // News Page
        "news.title": "News",
        "news.subtitle": "Stay informed",
        "news.read_more": "Read more",
        "news.no_posts": "No news available at the moment.",

        // Impressum
        "impressum.title": "Imprint",
        "impressum.owner": "Owner",
        "impressum.address": "Address",
        "impressum.contact": "Contact",
        "impressum.tax": "Tax Number",

        // AGB
        "agb.title": "Terms and Conditions",
        "agb.general": "General",
        "agb.booking": "Booking",
        "agb.cancellation": "Cancellation",
        "agb.payment": "Payment",
        "agb.liability": "Liability",

        // Datenschutz
        "datenschutz.title": "Privacy Policy",
        "datenschutz.intro": "We appreciate your interest in our website.",
        "datenschutz.responsible": "Responsible Party",
        "datenschutz.collection": "Data Collection",
        "datenschutz.cookies": "Cookies",
        "datenschutz.rights": "Your Rights",

        // Common
        "common.back": "Back",
        "common.more_info": "Learn more",
        "common.our_services": "Our Services",
        "common.faq_title": "Frequently Asked Questions",
        "common.download": "Download",

        // Aquafacial Page
        "aquafacial.badge": "Exclusive Highlight",
        "aquafacial.highlight_title": "Skin Analysis &\nGlow Technology",
        "aquafacial.highlight_desc": "Start with a professional skin analysis – for clarity about your skin condition and targeted, effective care.",
        "aquafacial.slogan": "Maximum effect – no compromise.",
        "aquafacial.intro": "Clogged pores block your skincare results.",
        "aquafacial.intro2": "Experience the {0}10 functions{1} of cutting-edge technology for your perfect glow:",
        "aquafacial.f1": "Skin Analysis",
        "aquafacial.f2": "Gentle Exfoliation",
        "aquafacial.f3": "Deep Cleansing",
        "aquafacial.f4": "Pore Refinement",
        "aquafacial.f5": "Lifting",
        "aquafacial.f6": "Firming",
        "aquafacial.f7": "Oxygen Boost",
        "aquafacial.f8": "Hydration Boost",
        "aquafacial.f9": "Fine Line Reduction",
        "aquafacial.f10": "Optimized Active Ingredient Absorption",
        "aquafacial.faq_q1": "What is a skin analysis?",
        "aquafacial.faq_a1": "During the skin analysis, your skin is measured and analyzed – e.g., regarding oil content, shine, pigmentation, and blemishes. The results help to specifically select care, products, and treatments, and to measure their effectiveness. The skin analysis can also be booked separately.",
        "aquafacial.faq_q2": "Why is this treatment beneficial?",
        "aquafacial.faq_a2": "Daily cleansing removes surface impurities but doesn't reach the keratinized skin layer that acts as a barrier and reduces the absorption of skincare products.\n\nWith high-tech elements like Bubble Cleaning, EMS Nano-Crystal, Oxygen, and Thermo-Rollers, the skin is intensively cared for. Through precise skin analysis, you receive individual recommendations for care, products, and nutrition – for sustainable results.\n\nA special experience for women and men who value their skin, their radiance, and want to consciously treat themselves. ✨",
        "aquafacial.faq_q3": "Are results visible?",
        "aquafacial.faq_a3": "YES! Immediately after the treatment, the scan follows. Experience the before-and-after proof live on the monitor. A visible result – Maximum transparency for an investment – Simply affordable.",
        "aquafacial.faq_q4": "Is the treatment painful?",
        "aquafacial.faq_a4": "No. AquaFacial is pleasant and relaxing.",
        "aquafacial.faq_q5": "How often should AquaFacial be performed?",
        "aquafacial.faq_a5": "Depending on skin condition, every 3–4 weeks or as individually recommended.",
        "aquafacial.faq_q6": "Which skin types is AquaFacial suitable for?",
        "aquafacial.faq_a6": "For all skin types, including sensitive skin. The treatment and products used are individually tailored to the skin type – based on a skin analysis before the treatment.",
        "aquafacial.faq_q7": "Why are there two packages BALANCE & ADVANCED?",
        "aquafacial.faq_a7": "Simply put: Your skin is individual. After our precise skin analysis, we recommend exactly the intensive steps you really need – whether it's an intensive peeling or light therapy. Since not every skin is immediately ready for intensive treatments, we always start with the Essential package. This guarantees maximum safety and best results.",
        "aquafacial.faq_q8": "What distinguishes the Bubble Cleaning function from conventional pore cleansers?",
        "aquafacial.faq_a8": "The professional Bubble Cleaning technology works with precisely regulated suction strength and speed, individually adapted to each skin type. At the same time, nourishing active ingredients are added during cleansing. This thoroughly cleanses the skin without drying it out or disturbing its moisture balance – unlike many commercial devices.",

        // Permanent Makeup Page
        "pmu.intro_title": "Timeless Beauty, Every Day.",
        "pmu.intro_desc": "Wake up and be ready! With 15 years of expertise and continuous training, we offer you the best and safest procedures in the industry. We minimize every risk and rely on innovative methods for a deceptively real finish. Quality you can see – precise, long-lasting, and perfectly tailored to you.",
        "pmu.brows": "Perfect shape & fullness.",
        "pmu.lips": "Soft color & clear contours.",
        "pmu.eyes": "Expressive look without makeup.",
        "pmu.consult_desc": "We offer a complimentary consultation where shape, color preference, and skin condition are individually analyzed – ensuring maximum safety with no financial risk.",
        "pmu.consult_cta": "Book your free consultation now!",
        "pmu.faq_q1": "Why should I choose you?",
        "pmu.faq_a1": "Years of experience, in-depth skin knowledge, and regular training in Asia & Europe enable us to minimize risks and achieve natural-looking results for various skin types.",
        "pmu.faq_q2": "How long does permanent makeup last?",
        "pmu.faq_a2": "Generally 3–5 years, depending on skin type, skin color, and external factors such as sun exposure, care, and lifestyle.",
        "pmu.faq_q3": "How many treatments are necessary?",
        "pmu.faq_a3": "Usually 1–2 treatments at approximately 4-week intervals, depending on skin structure and individual color absorption.",
        "pmu.faq_q4": "How is it ensured that the shape and color suit me?",
        "pmu.faq_a4": "Shape and color are individually sketched before the treatment. Pigmentation only begins after your complete approval.",
        "pmu.faq_q5": "What can I expect at the consultation?",
        "pmu.faq_a5": "During the consultation, we not only inform you about possible risks but also honestly analyze whether your wishes and expectations are realistic and achievable. We advise openly and transparently so you don't have false expectations and don't spend money unnecessarily.",
        "pmu.faq_q6": "Does permanent makeup hurt?",
        "pmu.faq_a6": "Thanks to modern, superficial technique, the treatment is barely painful and generally well tolerated.",

        // Wimpern Page
        "wimpern.s1_title": "Eyelash Extensions",
        "wimpern.s1_desc": "Customized eyelash extensions for more volume and a fresh, elegant look.",
        "wimpern.s2_title": "Lash Lift (Lash Perm)",
        "wimpern.s2_desc": "Ideal for long natural lashes: A lift that works without an eyelash curler and enhances your natural beauty.",
        "wimpern.faq_q1": "Why should you choose our studio?",
        "wimpern.faq_a1": "Over 10 years of experience, a wide selection of ultra-fine to fashionable lash types, careful consultation on the right eye shape, and techniques that protect your natural lashes. Our motto: beautiful, lightweight, and durable – but never harmful to your real lashes.",
        "wimpern.faq_q2": "What makes a good eyelash extension?",
        "wimpern.faq_a2": "A high-quality extension is: beautifully shaped, lightweight and irritation-free, still looks neat after 3–4 weeks – not chaotic, about 50% remain intact, and most importantly: your natural lashes stay healthy and undamaged.",
        "wimpern.faq_q3": "How do I properly remove eyelash extensions?",
        "wimpern.faq_a3": "Don't pull them out yourself! We use a professional remover that gently dissolves the adhesive – quickly, without irritation, and without losing your natural lashes.",
        "wimpern.faq_q4": "Do I need mascara with extensions?",
        "wimpern.faq_a4": "No. Mascara clumps the extensions, and during removal, the adhesive quality is compromised, affecting both the durability and shape of the lashes.",
        "wimpern.faq_q5": "How long does a lash lift (lash perm) last?",
        "wimpern.faq_a5": "A lash lift lasts on average about 4 weeks, depending on hair structure and care.",

        // Nails Page
        "nails.s1_title": "NAIL DESIGN",
        "nails.s1_desc": "More than 900 colors and limitless designs – from classic to extravagant. We craft your nails with the utmost care for every individual look.",
        "nails.s2_title": "PREMIUM PEDICURE",
        "nails.s2_desc": "Exclusive foot care with a modern steam device: Gentle deep relaxation, opened pores, and maximum care absorption – for a noticeably well-groomed and relaxed skin feeling.",
        "nails.faq_q1": "Why should you choose us?",
        "nails.faq_a1": "Over 10 years of experience, more than 900 colors & designs, guarantee on our work – and we take our time for a careful, unhurried treatment.",
        "nails.faq_q2": "Are there free repairs?",
        "nails.faq_a2": "Yes – always free, even after 3 or 4 weeks. Regardless of the reason.",
        "nails.faq_q3": "What's special about our pedicure?",
        "nails.faq_a3": "We work with a steam device and silicone socks so the skin relaxes, pores open, and the care penetrates deeper – for particularly soft, well-groomed feet.",

        // Augenbrauen Page
        "augenbrauen.s1_title": "Plucking & Tinting",
        "augenbrauen.s1_desc": "Gentle shaping and precise tinting of eyebrows for a well-groomed, expressive look – tailored to your face shape and hair color.",
        "augenbrauen.s2_title": "Lamination",
        "augenbrauen.s2_desc": "For fuller, perfectly shaped brows with natural shine and long-lasting results.",

        // Innovative Treatments Page
        "it.intro": "Experience a unique combination of powerful Oxygen Power, highly effective EMS Nano-Crystals, and Light Therapy that takes your care to a new level",
        "it.intro_bold": "for blemished skin, vital scalp, and supported hair growth.",
        "it.sticker": "Visible results thanks to",
        "it.sticker2": "Before/After Analysis",
        "it.osd_bubble": "Gentle vacuum with bubble technology removes sebum & residues.",
        "it.osd_oxygen": "Pure oxygen vitalizes the scalp and promotes blood circulation.",
        "it.osd_serum": "Infusion of exclusive nutrients directly to the hair root.",
        "it.osd_result_label": "The Result",
        "it.osd_result": "Noticeably freed, revitalized scalp –",
        "it.osd_result2": "for visibly stronger and healthier-looking hair.",
        "it.mn_f1": "Scalp Regeneration",
        "it.mn_f2": "Hair Growth Impulse",
        "it.mn_f3": "Hair Structure Strengthening",
        "it.mn_f4": "Scientifically Proven",
        "it.glow_subtitle": "Say goodbye to rough skin. Welcome silky smoothness.",
        "it.glow_s1": "Gentle Peeling",
        "it.glow_s1_desc": "Removes keratinization, clears pores and promotes skin renewal – ideal for rough areas like upper arms, thighs or back.",
        "it.glow_s2_desc": "Deep cleansing with oxygen bubbles.",
        "it.glow_s3_desc": "Concentrated oxygen for skin vitalization and regeneration.",
        "it.glow_s4_desc": "Nano-crystals & EMS impulses for deep active ingredient absorption.",
        "it.glow_s5_desc": "Supports skin regeneration and stimulates collagen production.",
        "it.glow_s6_desc": "Finishing care to soothe, mattify, and protect against new blemishes.",
        "it.experts_title": "Expert Opinions and Studies",
        "it.vid1_label": "Efficacy Confirmed",
        "it.vid2_label": "Technology Explained",
        "it.vid3_label": "Doctor Confirmation",
        "it.info_title": "Information Sheet",
        "it.faq_q1": "Who is Oxygen Scalp Detox suitable for?",
        "it.faq_a1": "This treatment is ideal for dry, sensitive or unbalanced scalp, as well as for feelings of tightness, itching or product buildup.",
        "it.faq_q2": "How do I know if my skin is suitable for the treatment?",
        "it.faq_a2": "Please contact us for a free consultation. You can send us photos via WhatsApp in advance so we can assess the current skin condition and advise you individually. For inflamed skin or open wounds, we generally recommend seeing a doctor beforehand.",
        "it.faq_q3": "I can't find a price for Body Glow – why?",
        "it.faq_a3": "Every skin is different. After sending photos, the duration of treatment and the exact price are individually calculated based on the size and condition of the affected skin area.",
        "it.faq_q4": "How many Body Glow treatments are necessary?",
        "it.faq_a4": "Success depends on various factors – such as nutrition, sleep, stress, skincare routine, and individual skin condition and structure. Our expert will advise you comprehensively and create an individual plan tailored precisely to your skin. Visible improvements are already noticeable after the first session – documented by a professional before/after skin analysis.",
        "it.faq_q5": "Do the treatments help with hair loss?",
        "it.faq_a5": "Both treatments serve cosmetic scalp care. They can counteract hair loss by activating the scalp and strengthening the hair root base.",
        "it.faq_q6": "Are the treatments painful or invasive?",
        "it.faq_a6": "No. Both treatments are gentle, pleasant, and non-invasive. No downtime is required.",
        "it.faq_q7": "How often should the treatments be performed?",
        "it.faq_a7": "For optimal results, we recommend regular application, tailored to the individual needs of the scalp. The frequency depends entirely on the individual hair response and scalp condition.",
        "it.faq_q8": "Does the treatment really help visibly increase hair density?",
        "it.faq_a8": "Absolutely. The effectiveness of these technologies is recognized worldwide and has even been featured on US television as a groundbreaking method for hair care.",
        "it.faq_q9": "Does Scalp Microneedling hurt?",
        "it.faq_a9": "The treatment is generally well tolerated. You may feel a slight tingling or fine pricking on the scalp, but this only occurs briefly. Thanks to modern technology and controlled application, the treatment remains pleasant and safe.",
        "it.faq_q10": "Is Scalp Microneedling dangerous or does it cause severe injuries?",
        "it.faq_a10": "No, the method is scientifically studied and is also offered in mild variants for home use – it is therefore not considered excessively risky. No deep or severe injuries occur, but rather fine, superficial micro-impulses that activate natural skin processes. In the studio, we work with professional speed and precisely adjusted penetration depth – combined with high-quality active ingredient serums. Strict hygiene standards and sterile working practices significantly minimize risk and enable a safer, more controlled, and more effective application than at-home use.",

        // HeadSpa Page
        "headspa.typewriter": "Relaxation for Body and Mind",
        "headspa.packages_title": "RELAX & GLOW PACKAGES",
        "headspa.pkg1_name": "Signature Asian Head Calm",
        "headspa.pkg1_desc": "Through targeted stimulation of traditional pressure points, we release deeply seated blockages and tension. Ideal for stress relief, mental clarity, and holistic well-being.",
        "headspa.pkg2_name": "Headspa Essential\n(60 Min.)",
        "headspa.pkg2_desc": "Basic package with scalp care, head massage, hair sauna, and décolleté massage – for holistic relaxation and care.",
        "headspa.pkg3_name": "Headspa Deluxe\n(90 Min.)",
        "headspa.pkg3_desc": "Including hot stone neck massage, facial deep cleansing, and light therapy for skin clarification and regeneration.",
        "headspa.pkg4_name": "Headspa Together",
        "headspa.pkg4_desc": "Relax and enjoy together – the HeadSpa experience for two, whether friends, mother & daughter, or as a couple.",
        "headspa.faq_q1": "Why our Headspa?",
        "headspa.faq_a1": "An exclusive, holistic HeadSpa concept – from professional scalp care to deep relaxation in a stylish ambiance, also as an experience for two.",
        "headspa.faq_q2": "What makes our head massage special?",
        "headspa.faq_a2": "Our head massage follows the principles of Asian natural healing and combines mindful touches with targeted pressure points – for noticeable relaxation and a new inner balance.",

        // Angebote Page
        "angebote.title": "Secure Your Advantage Now",
        "angebote.download": "Download",
        "angebote.how_title": "How It Works",
        "angebote.step1": "Download the desired offer as an image.",
        "angebote.step2": "Show the image at your appointment in the studio.",
        "angebote.step3": "Redeem the voucher and save immediately!",

        // Gutschein Page
        "gutschein.title": "ONLINE GIFT CARD",
        "gutschein.subtitle": "The perfect solution for every occasion",
        "gutschein.subtitle2": "fast, personal & flexible.",
        "gutschein.step1_title": "Send Amount via PayPal",
        "gutschein.step1_desc": "Transfer the desired amount to",
        "gutschein.step1_suffix": "(or scan the QR code on screen).",
        "gutschein.step2_title": "Add Details",
        "gutschein.step2_desc": "Please include the following information in the notes field:",
        "gutschein.step2_l1": "Name of the gift card recipient",
        "gutschein.step2_l2": "Email address (for voucher delivery) or self-pickup",
        "gutschein.step2_l3": "Mobile number (for inquiries)",
        "gutschein.step2_example": "Example:",
        "gutschein.step2_ex1": "Max Mustermann | max@example.de | 0176 12345678",
        "gutschein.step2_ex2": "or",
        "gutschein.step2_ex3": "Max Mustermann | Self-pickup | 0176 12345678",
        "gutschein.step2_warning": "Without this information, processing of your gift card may be delayed",
        "gutschein.step3_title": "Receipt",
        "gutschein.step3_desc": "After receipt of payment, we will send you the gift card immediately or prepare it for pickup.",
        "gutschein.paypal_badge": "Secure Payment via PayPal",
        "gutschein.notice": "Please note:",
        "gutschein.notice_text": "Online gift card delivery is by email – Monday to Saturday between 10:00 AM and 6:00 PM.",
        "gutschein.cash_badge": "Cash Payment",
        "gutschein.cash_title": "Would you like to pick up a gift card and pay in cash?",
        "gutschein.cash_desc": "Please send us a message with the recipient's name and the desired amount. We'll prepare everything for you – you can pick up the gift card at our studio and pay in cash.",
        "gutschein.cash_cta": "Inquire via WhatsApp now",

        // Schulung Page
        "schulung.hero_title": "Your Beauty Career",
        "schulung.hero_title2": "15 Years Head Start from Day 1!",
        "schulung.hero_desc": "We teach you the craft and the complete system behind it. Secure a recession-proof profession that offers long-term stability and real career opportunities. No detours, only real practice.",
        "schulung.benefits_title": "Your Success Package",
        "schulung.b1_title": "Maximum Practice",
        "schulung.b1_desc": "Unlimited practice on models until every technique is perfect.",
        "schulung.b2_title": "No More Bad Purchases",
        "schulung.b2_desc": "We show you exactly what you really need. Avoid 100% of typical beginner mistakes.",
        "schulung.b3_title": "Best-Price Network",
        "schulung.b3_desc": "Access to our networks for professional supplies – guaranteed best prices and highest quality.",
        "schulung.b4_title": "Business & Media Skills",
        "schulung.b4_desc": "From tax basics and studio management to the perfect social media presentation.",
        "schulung.b5_title": "Career Boost",
        "schulung.b5_desc": "We support you in your job search or your own startup.",
        "schulung.b6_title": "Our Promise",
        "schulung.b6_desc": "We've made the mistakes of the last 15 years so YOU don't have to.",
        "schulung.courses_title": "Our Courses",
        "schulung.courses_desc": "Choose the course that fits your goals. We advise you personally and create a route tailored to your life situation and investment.",
        "schulung.courses_note": "Course start and duration individually adjustable",
        "schulung.c1_name": "NAILS PRO COURSE",
        "schulung.c1_desc": "Detail training with 100% practice on real models. Test over 1,000 colors and professional equipment.",
        "schulung.c1_dur": "2 Course Levels",
        "schulung.c1_f1": "100% Practice",
        "schulung.c1_f2": "1,000+ Colors to Test",
        "schulung.c1_f3": "Individual Technique",
        "schulung.c1_f4": "Pro Speed Training",
        "schulung.c2_name": "BEAUTY TRIO",
        "schulung.c2_desc": "Pedicure, Head Spa & Eyelash Extensions – three in-demand services in one course.",
        "schulung.c2_dur": "7 Days Intensive",
        "schulung.c2_f1": "3 Services in 1",
        "schulung.c2_f2": "Immediately Profitable",
        "schulung.c2_f3": "Larger Target Audience",
        "schulung.c2_f4": "Maximum Retention",
        "schulung.c3_name": "STUDIO BUSINESS MASTERY",
        "schulung.c3_desc": "Master marketing, accounting know-how and management – expertise from 15 years of practice.",
        "schulung.c3_dur": "3 Days",
        "schulung.c3_f1": "Business Plan",
        "schulung.c3_f2": "Social Media Power",
        "schulung.c3_f3": "Ready-Made Website",
        "schulung.c3_f4": "Tax Basics",
        "schulung.details": "Details",
        "schulung.contact": "Contact",
        "schulung.selfstudy_title": "Self-Study or Professional Training?",
        "schulung.selfstudy_1": "Self-study costs you time, clients and your reputation.",
        "schulung.selfstudy_2": "Two hours per treatment? Not a profitable business.",
        "schulung.selfstudy_3": "Without structure and speed, you can't compete against experienced studios.",
        "schulung.selfstudy_4": "Professional training makes you competitive – from day one",
        "schulung.faq_title": "FAQ – Frequently Asked Questions",
        "schulung.faq_q1": "Why a skilled trade?",
        "schulung.faq_a1": "Because it gives you full control over your life: AI-proof (craftsmanship is real art), recession-proof (no fear of furlough), flexible for family, financial boost as additional income, and in demand everywhere with your certificate.",
        "schulung.faq_q2": "Why our training?",
        "schulung.faq_a2": "We don't sell theory, but your shortcut to success. Benefit from 15 years of market experience, individual technique instead of rigid templates, modern business know-how including social media marketing, and innovation instead of stagnation with trends like Original Head Spa.",
        "schulung.faq_q3": "Who are these programs suitable for?",
        "schulung.faq_a3": "Our training courses are aimed at career changers (professional reorientation), beauty professionals (expanding portfolio), and part-time founders (flexible additional income). Whether full-time career or second career.",
        "schulung.faq_q4": "Do I need special talent or aptitude?",
        "schulung.faq_a4": "No! Success is 90% based on technique, practice, and precision. Our programs are designed to teach you the craft skills step by step. With patience and professional guidance, anyone can learn this art.",
        "schulung.faq_q5": "I'm already a bit older. Can I still start a successful business?",
        "schulung.faq_a5": "Definitely yes! In the beauty industry, experience, empathy, and professionalism often count more than age. Mature personalities often radiate calmness and trustworthiness that clients greatly appreciate. It's never too late!",
        "schulung.faq_q6": "Can I combine online and offline learning?",
        "schulung.faq_a6": "Yes, we offer flexible learning models. Theoretical foundations can be conveniently worked on online. Practical modules take place offline in our studio, as fine handicraft requires direct correction.",
        "schulung.faq_q7": "What happens if I become ill during the course?",
        "schulung.faq_a7": "We understand that unforeseen things can happen. For important reasons (e.g., illness), we offer the possibility, by arrangement, to pause the course and resume later.",
        "schulung.faq_q8": "Is there a refund?",
        "schulung.faq_a8": "Once the course has started and teaching materials have been handed out, a refund is generally excluded. We recommend a consultation beforehand to ensure the course is a perfect fit for your goals.",
        "schulung.faq_q9": "How does job placement work?",
        "schulung.faq_a9": "Job placement for us means: networking (broad network of partner studios) and entrepreneurship support (tips on marketing, pricing, and client acquisition for the self-employed).",
        "schulung.faq_q10": "What will I learn about starting my own studio?",
        "schulung.faq_a10": "You will learn to strategically analyze competitors and clearly position yourself. We prepare you professionally and entrepreneurially – with marketing, client acquisition, branding, and efficient studio management at optimized costs.",
        "schulung.more_questions": "Do you have more questions?",
        "schulung.whatsapp_cta": "Contact us via WhatsApp!",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("de");

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
