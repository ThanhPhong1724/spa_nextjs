// Script to seed 3 new blog posts
// Run with: npx ts-node prisma/seed-blogs.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const newBlogPosts = [
    {
        title: "Warum ist eine professionelle Hautanalyse so wertvoll?",
        titleEn: "Why is a Professional Skin Analysis So Valuable?",
        slug: "professionelle-hautanalyse-wertvoll",
        content: `Eine professionelle Hautanalyse zeigt genau, was Ihre Haut wirklich braucht.

Mit moderner Technologie wird der Hautzustand präzise gemessen und ausgewertet – darunter Talgproduktion, Hautglanz, Pigmentierung, Unreinheiten und die allgemeine Hautstruktur.

Auf Basis dieser Ergebnisse erhalten Sie klare, individuelle Empfehlungen für:
• die richtige Hautpflege
• passende Pflegeprodukte
• sinnvolle Anpassungen Ihrer Pflegegewohnheiten und Ihres Lebensstils

Gerade vor der Investition in hochwertige Kosmetik oder exklusive Hautbehandlungen bietet eine Hautanalyse einen entscheidenden Vorteil:

Sie liefert objektive Ausgangswerte, mit denen sich Ergebnisse transparent messen und vergleichen lassen.

So wissen Sie genau, wo Ihre Haut aktuell steht – und wie sie sich gezielt verbessern lässt.

👉 Die Hautanalyse kann auch separat gebucht werden.`,
        contentEn: `A professional skin analysis shows exactly what your skin really needs.

With modern technology, skin condition is precisely measured and evaluated – including sebum production, skin shine, pigmentation, impurities, and overall skin structure.

Based on these results, you receive clear, individual recommendations for:
• the right skincare
• suitable care products
• meaningful adjustments to your care habits and lifestyle

Especially before investing in high-quality cosmetics or exclusive skin treatments, a skin analysis offers a decisive advantage:

It provides objective baseline values with which results can be transparently measured and compared.

So you know exactly where your skin currently stands – and how it can be specifically improved.

👉 Skin analysis can also be booked separately.`,
        category: "Hautpflege",
        author: "Smiling Studio",
        status: "published"
    },
    {
        title: "Warum saubere Haut die Basis jeder wirksamen Gesichtspflege ist",
        titleEn: "Why Clean Skin is the Foundation of Every Effective Facial Care",
        slug: "saubere-haut-basis-gesichtspflege",
        content: `Schöne, strahlende Haut beginnt nicht mit teuren Cremes, sondern mit gründlich gereinigter Haut. Nur wenn die Haut sauber ist, können Pflegeprodukte ihre volle Wirkung entfalten.

Im Alltag sammeln sich Schmutz, Talg, Make-up-Reste und abgestorbene Hautzellen auf der Haut. Eine normale Reinigung zu Hause entfernt oft nur oberflächliche Rückstände – tief sitzende Unreinheiten bleiben bestehen und können den Teint fahl wirken lassen.

Eine professionelle Gesichtsreinigung entfernt diese Rückstände porentief, unterstützt die Hauterneuerung und bereitet die Haut optimal auf Wirkstoffe vor. So wirken Seren und Pflegeprodukte sichtbar effektiver.

## Fazit

Reine Haut ist kein Luxus, sondern die Grundlage gesunder und schöner Haut.

👉 Strahlende Haut beginnt immer mit sauberer Haut.`,
        contentEn: `Beautiful, radiant skin doesn't start with expensive creams, but with thoroughly cleansed skin. Only when the skin is clean can skincare products fully develop their effect.

In everyday life, dirt, sebum, makeup residue, and dead skin cells accumulate on the skin. Regular cleansing at home often only removes surface residue – deep-seated impurities remain and can make the complexion look dull.

A professional facial cleansing removes these residues deep into the pores, supports skin renewal, and optimally prepares the skin for active ingredients. This makes serums and skincare products visibly more effective.

## Conclusion

Pure skin is not a luxury, but the foundation of healthy and beautiful skin.

👉 Radiant skin always begins with clean skin.`,
        category: "Hautpflege",
        author: "Smiling Studio",
        status: "published"
    },
    {
        title: "Laserlicht zur Förderung des Haarwachstums – wie wirksam ist diese Technologie wirklich?",
        titleEn: "Laser Light for Promoting Hair Growth – How Effective is This Technology Really?",
        slug: "laserlicht-haarwachstum-technologie",
        content: `## Nicht jedes Gerät ist gleich

Ein entscheidender Faktor für den Erfolg ist die Qualität der Technologie:
• präzise definierte Wellenlängen
• gleichmäßige Lichtabgabe
• professionelle Geräte und korrekte Anwendung

## Wie funktioniert die Technik?

Die Laser-Lichttherapie basiert auf dem Prinzip der Photobiomodulation. Dabei dringen Lichtphotonen mit einer speziellen Wellenlänge (ca. 650nm) tief in die Kopfhaut ein.

Das Ergebnis ist vergleichbar mit einem „Energieschub" für die Zellen:
• **ATP-Boost:** Die Energieproduktion in den Haarfollikeln wird direkt gesteigert.
• **Verbesserte Mikrozirkulation:** Die Durchblutung wird angeregt, wodurch mehr Nährstoffe und Sauerstoff an die Haarwurzel gelangen.
• **Verlängerung der Anagenphase:** Die Wachstumsphase des Haares wird verlängert, was dünner werdendem Haar entgegenwirkt.

## USA als Vorreiter: Von der FDA anerkannt

Besonders in den USA ist diese Technik bereits der Goldstandard. Die amerikanische Gesundheitsbehörde FDA hat LLLT-Geräte bereits vor Jahren als sicher und wirksam zur Behandlung von erblich bedingtem Haarausfall zertifiziert.

Wer die aktuellen Fachartikel oder Interviews führender US-Dermatologen verfolgt, sieht schnell: Die Kombination aus Scalp Detox (tiefenwirksamer Reinigung) und Laser-Lichttherapie gilt als die effektivste non-invasive Methode für gesundes Haarwachstum.

💡 **Unser Experten-Tipp:** Vertrauen Sie nicht nur auf Werbeversprechen. Wir laden Sie ein, die zahlreichen medizinischen Fachpublikationen und Experten-Interviews von Ärzten aus den USA zu recherchieren. Die wissenschaftlichen Fakten sprechen für sich.

## Individuelle Faktoren

Der Erfolg einer Laserlicht-Behandlung hängt nicht von einem einzelnen Faktor ab, sondern von mehreren individuellen Voraussetzungen. Dazu zählen unter anderem genetische Veranlagung, Lebensstil, Ernährungsgewohnheiten sowie Stressbelastung.

Unsere Experten verfolgen kontinuierlich internationale Studien und aktuelle Forschungsergebnisse und setzen ausschließlich geprüfte Techniken und sichere Verfahren ein, um eine hohe Wirksamkeit bei maximaler Sicherheit für unsere Kundinnen und Kunden zu gewährleisten.

Für optimale Ergebnisse wird die Laserlicht-Technologie gezielt mit weiteren Maßnahmen kombiniert, wie z. B. Oxygen-Anwendungen. Ebenso entscheidend ist eine professionelle Tiefenreinigung der Kopfhaut, um die bestmöglichen Voraussetzungen für die Behandlung zu schaffen.

## Bereit für dein Haar-Update?

Im Smiling Studio kombinieren wir dieses weltweit geschätzte Expertenwissen in unserem **Scalp Detox & Growth Programm**. Wir reinigen nicht nur – wir aktivieren Ihr Haarwachstum mit modernster Technologie.

**Wichtig ist zudem realistische Erwartungshaltung:**

Die Behandlung erfordert Regelmäßigkeit, Geduld und eine individuelle Anpassung. Nachhaltige Ergebnisse entstehen über einen gewissen Zeitraum – erste Anwendungen sorgen jedoch bereits für ein frischeres Kopfhautgefühl und kräftiger wirkendes Haar.`,
        contentEn: `## Not Every Device is the Same

A decisive factor for success is the quality of the technology:
• precisely defined wavelengths
• even light delivery
• professional devices and correct application

## How Does the Technology Work?

Laser light therapy is based on the principle of photobiomodulation. Light photons with a special wavelength (approx. 650nm) penetrate deep into the scalp.

The result is comparable to an "energy boost" for the cells:
• **ATP Boost:** Energy production in hair follicles is directly increased.
• **Improved Microcirculation:** Blood circulation is stimulated, bringing more nutrients and oxygen to the hair root.
• **Extension of Anagen Phase:** The growth phase of hair is extended, counteracting thinning hair.

## USA as Pioneer: FDA Approved

Especially in the USA, this technique is already the gold standard. The American FDA certified LLLT devices years ago as safe and effective for treating hereditary hair loss.

Anyone following current professional articles or interviews with leading US dermatologists quickly sees: The combination of Scalp Detox (deep cleansing) and laser light therapy is considered the most effective non-invasive method for healthy hair growth.

💡 **Our Expert Tip:** Don't just trust advertising promises. We invite you to research the numerous medical publications and expert interviews from doctors in the USA. The scientific facts speak for themselves.`,
        category: "Haarpflege",
        author: "Smiling Studio",
        status: "published"
    }
];

async function main() {
    console.log('🌱 Seeding blog posts...');

    for (const post of newBlogPosts) {
        // Check if post already exists
        const existing = await prisma.post.findUnique({
            where: { slug: post.slug }
        });

        if (existing) {
            console.log(`⏭️  Post already exists: ${post.title}`);
            continue;
        }

        await prisma.post.create({
            data: post
        });
        console.log(`✅ Created: ${post.title}`);
    }

    console.log('🎉 Done seeding blog posts!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
