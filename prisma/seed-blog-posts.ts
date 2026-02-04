import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const blogPosts = [
    {
        title: "Gründe, warum Massage mehr als nur Wellness ist 💎",
        titleEn: "Reasons why Massage is more than just Wellness 💎",
        slug: "massage-mehr-als-wellness",
        category: "Head Spa",
        author: "Smiling Studio",
        status: "published",
        content: `<h2>1. Bessere Durchblutung (Blutgefäße) 🩸</h2>
<p>Die Massage aktiviert die Mikrozirkulation in der Lederhaut. Deine Zellen werden mit frischem Sauerstoff geflutet – für einen natürlichen Glow ohne Make-up.</p>

<h2>2. Weniger Stress (Nerven) ⚡</h2>
<p>Durch gezielte Griffe wird das Nervensystem beruhigt. Stresshormone sinken, Endorphine steigen. Tiefe Entspannung für Geist und Gesichtsmuskulatur.</p>

<h2>3. Sanfte Haut (Drüsen) 💦</h2>
<p>Die Stimulation der Talg- und Schweißdrüsen unterstützt den natürlichen Hydrolipidfilm. Deine Haut wird spürbar weicher, geschmeidiger und widerstandsfähiger.</p>

<h2>4. Asiatische Akupressur & Kräuterkraft 🌿</h2>
<p>Traditionelle asiatische Druckpunktmassage löst Energieblockaden direkt an der Quelle. In Kombination mit unserem speziellen Ingwer-Kräuteröl werden Verspannungen gelöst und Kopfschmerzen effektiv gelindert – eine natürliche Alternative, ganz ohne Medikamente.</p>

<p><strong>👉 Gönn deinem Kopf eine Pause.</strong></p>`,
        contentEn: `<h2>1. Better Circulation (Blood Vessels) 🩸</h2>
<p>Massage activates microcirculation in the dermis. Your cells are flooded with fresh oxygen – for a natural glow without makeup.</p>

<h2>2. Less Stress (Nerves) ⚡</h2>
<p>Through targeted techniques, the nervous system is calmed. Stress hormones decrease, endorphins rise. Deep relaxation for mind and facial muscles.</p>

<h2>3. Soft Skin (Glands) 💦</h2>
<p>Stimulation of sebaceous and sweat glands supports the natural hydrolipid film. Your skin becomes noticeably softer, smoother and more resilient.</p>

<h2>4. Asian Acupressure & Herbal Power 🌿</h2>
<p>Traditional Asian pressure point massage releases energy blockages at the source. Combined with our special ginger-herbal oil, tensions are released and headaches effectively relieved – a natural alternative, completely without medication.</p>

<p><strong>👉 Give your head a break.</strong></p>`,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=500&fit=crop"
    },
    {
        title: "Wellness trifft Heilkunst: Warum dein Kopf ein Detox braucht 🧖‍♀️",
        titleEn: "Wellness meets Healing Arts: Why your head needs a Detox 🧖‍♀️",
        slug: "kopf-detox-wellness-heilkunst",
        category: "Head Spa",
        author: "Smiling Studio",
        status: "published",
        content: `<p><strong>Gesundes Haar beginnt nicht bei der Länge, sondern an der Wurzel.</strong></p>

<p>Ein professioneller Haar-Detox ist ein modernes Pflegeritual, das Reinigung, Entspannung und Achtsamkeit verbindet. Durch gezielte Anwendungen wird die Kopfhaut von Rückständen befreit und die Durchblutung angeregt.</p>

<h3>🔹 Tiefenreinigung</h3>
<p>Die Haarsauna entgiftet und hydratisiert das Haar bis in die Tiefe.</p>

<h3>🔹 Natürliche Heilung</h3>
<p>Wir nutzen Ingwer und Kräuter statt Medikamente, um Verspannungen zu lösen.</p>

<h3>🔹 Nerven-Wellness</h3>
<p>Die Massage beruhigt dein Nervensystem sofort.</p>

<p><strong>Erlebe die perfekte Symbiose aus Reinigung und Entspannung. Dein Kopf wird es dir danken!</strong></p>`,
        contentEn: `<p><strong>Healthy hair doesn't start with length, but at the root.</strong></p>

<p>A professional hair detox is a modern care ritual that combines cleansing, relaxation and mindfulness. Through targeted applications, the scalp is freed from residue and blood circulation is stimulated.</p>

<h3>🔹 Deep Cleansing</h3>
<p>The hair sauna detoxifies and hydrates hair to the core.</p>

<h3>🔹 Natural Healing</h3>
<p>We use ginger and herbs instead of medication to release tensions.</p>

<h3>🔹 Nerve Wellness</h3>
<p>The massage calms your nervous system immediately.</p>

<p><strong>Experience the perfect symbiosis of cleansing and relaxation. Your head will thank you!</strong></p>`,
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=500&fit=crop"
    },
    {
        title: "Angst vor der falschen Form? Bei uns steht Natürlichkeit an erster Stelle",
        titleEn: "Fear of the wrong shape? We put naturalness first",
        slug: "permanent-makeup-natuerlichkeit",
        category: "Permanent Make-up",
        author: "Smiling Studio",
        status: "published",
        content: `<p>Viele Kundinnen kommen mit denselben Sorgen zu uns:</p>
<ul>
<li>Angst vor einer unpassenden Form.</li>
<li>Angst, dass das Gesicht zu hart, streng oder älter wirkt.</li>
<li>Und die Angst, dass das Ergebnis nicht mehr rückgängig zu machen ist.</li>
</ul>

<p><strong>Diese Sorgen nehmen wir sehr ernst.</strong></p>

<p>Bei Smiling Studio gestalten wir jede Augenbraue individuell – abgestimmt auf deine persönliche Knochenstruktur und basierend auf der Golden Ratio.</p>

<p>Die Symmetrie der Augenbrauen wird mit einem elektronischen Messgerät millimetergenau ausgemessen und harmonisch an deine Gesichtsform sowie deinen persönlichen Stil angepasst.</p>

<p><strong>Wir beginnen erst dann mit der Behandlung, wenn du dich zu 100 % in die gewählte Form verliebt hast.</strong></p>
<p>Du hast jederzeit die volle Kontrolle über den gesamten Prozess.</p>

<p><em>Natürlichkeit ist kein Zufall – sie ist unser Markenzeichen.</em></p>

<p>👉 <strong>Buche jetzt deine kostenlose Beratung bei Smiling Studio Wiesbaden.</strong></p>`,
        contentEn: `<p>Many customers come to us with the same concerns:</p>
<ul>
<li>Fear of an unsuitable shape.</li>
<li>Fear that the face will look too harsh, severe or older.</li>
<li>And the fear that the result cannot be undone.</li>
</ul>

<p><strong>We take these concerns very seriously.</strong></p>

<p>At Smiling Studio, we design each eyebrow individually – tailored to your personal bone structure and based on the Golden Ratio.</p>

<p>The symmetry of the eyebrows is measured with millimeter precision using an electronic measuring device and harmoniously adapted to your face shape and personal style.</p>

<p><strong>We only start the treatment when you are 100% in love with the chosen shape.</strong></p>
<p>You have full control over the entire process at all times.</p>

<p><em>Naturalness is not a coincidence – it is our trademark.</em></p>

<p>👉 <strong>Book your free consultation at Smiling Studio Wiesbaden now.</strong></p>`,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=500&fit=crop"
    },
    {
        title: "Pflegetipps für eine langanhaltende Wimpernverlängerung",
        titleEn: "Care tips for long-lasting eyelash extensions",
        slug: "wimpernverlaengerung-pflegetipps",
        category: "Wimpern",
        author: "Smiling Studio",
        status: "published",
        content: `<p>Für ein optimales und langanhaltendes Ergebnis empfehlen wir:</p>

<ul>
<li>✅ <strong>Kein Kontakt mit Wasser oder Dampf</strong> in den ersten 24 Stunden</li>
<li>✅ <strong>Keine ölhaltigen Kosmetika</strong> im Augenbereich</li>
<li>✅ <strong>Verzicht auf mechanische Belastung</strong> (Reiben, Ziehen)</li>
<li>✅ <strong>Make-up und Eyeliner möglichst vermeiden</strong>, da sich Make-up-Reste leicht in den Wimpern absetzen. Diese Rückstände können die Wimpernbasis verhärten, die Wimpern schneller verschmutzen und zu vorzeitigem Ausfallen führen.</li>
</ul>

<h3>Beim Abschminken besonders vorsichtig sein:</h3>
<p>Nicht reiben, nicht ziehen und darauf achten, dass Make-up-Entferner nicht direkt in die Wimpern gelangt, um ein Verrutschen oder Lösen der Extensions zu vermeiden.</p>

<h3>Wichtiger Hinweis:</h3>
<p>Lösen sich einzelne Wimpern oder halten sie nicht mehr fest, lasse sie bitte im Studio professionell entfernen oder bitte eine andere Person um Hilfe.</p>

<p><strong>⚠️ Bitte niemals selbst daran ziehen oder reißen, da dies die eigenen Naturwimpern beschädigen und zu vermehrtem Ausfall führen kann.</strong></p>`,
        contentEn: `<p>For optimal and long-lasting results, we recommend:</p>

<ul>
<li>✅ <strong>No contact with water or steam</strong> in the first 24 hours</li>
<li>✅ <strong>No oil-based cosmetics</strong> in the eye area</li>
<li>✅ <strong>Avoid mechanical stress</strong> (rubbing, pulling)</li>
<li>✅ <strong>Avoid make-up and eyeliner if possible</strong>, as make-up residue easily settles in the lashes. This residue can harden the lash base, make lashes dirty faster and lead to premature shedding.</li>
</ul>

<h3>Be especially careful when removing make-up:</h3>
<p>Don't rub, don't pull and make sure that make-up remover doesn't get directly into the lashes to avoid slipping or loosening of extensions.</p>

<h3>Important note:</h3>
<p>If individual lashes come loose or no longer hold, please have them professionally removed at the studio or ask another person for help.</p>

<p><strong>⚠️ Please never pull or tear them yourself, as this can damage your own natural lashes and lead to increased loss.</strong></p>`,
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&h=500&fit=crop"
    },
    {
        title: "Woran erkennt man ein professionelles Studio?",
        titleEn: "How to recognize a professional studio?",
        slug: "professionelles-studio-erkennen",
        category: "Tipps",
        author: "Smiling Studio",
        status: "published",
        content: `<p><strong>Ein professionelles Studio ist mehr als nur ein schöner Raum.</strong></p>

<h3>Beratung</h3>
<p>Professionalität beginnt bei der Beratung: aufmerksam, ehrlich und individuell. Jede Kundin wird gesehen, gehört und respektiert.</p>

<h3>Behandlung</h3>
<p>Während der Behandlung herrschen Ruhe und Fokus. Keine Ablenkung, keine privaten Gespräche – nur präzise Arbeit und volle Aufmerksamkeit.</p>

<h3>Hygiene</h3>
<p>Hygiene und Ordnung sind selbstverständlich. Saubere Arbeitsprozesse und hochwertige Produkte stehen für Qualität und Verantwortung.</p>

<h3>Atmosphäre</h3>
<p>Ein professionelles Studio bietet faire Preise und eine Atmosphäre, in der man sich wohlfühlt.</p>

<p><em>Denn wahre Qualität zeigt sich nicht nur im Ergebnis, sondern im gesamten Erlebnis.</em></p>`,
        contentEn: `<p><strong>A professional studio is more than just a beautiful room.</strong></p>

<h3>Consultation</h3>
<p>Professionalism starts with the consultation: attentive, honest and individual. Every customer is seen, heard and respected.</p>

<h3>Treatment</h3>
<p>During the treatment, there is calm and focus. No distractions, no private conversations – just precise work and full attention.</p>

<h3>Hygiene</h3>
<p>Hygiene and order are a matter of course. Clean work processes and high-quality products stand for quality and responsibility.</p>

<h3>Atmosphere</h3>
<p>A professional studio offers fair prices and an atmosphere where you feel comfortable.</p>

<p><em>Because true quality is not only shown in the result, but in the entire experience.</em></p>`,
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=500&fit=crop"
    }
];

async function seedBlogPosts() {
    console.log('🚀 Seeding blog posts...');

    for (const post of blogPosts) {
        const existing = await prisma.post.findUnique({
            where: { slug: post.slug }
        });

        if (existing) {
            console.log(`⏭️ Post "${post.title}" already exists, skipping...`);
            continue;
        }

        await prisma.post.create({
            data: post
        });
        console.log(`✅ Created post: ${post.title}`);
    }

    console.log('🎉 Blog posts seeding complete!');
}

seedBlogPosts()
    .catch((e) => {
        console.error('Error seeding blog posts:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
