import NailsKursClient from './NailsKursClient';

export const metadata = {
    title: "Nails Profi-Kurs | Smiling Studio Schulung",
    description: "5 Tage Intensiv-Kurs für Nageldesign. 100% Praxis, 1000+ Farben testen, individuelle Technik lernen.",
};

import { getPageContent } from "@/lib/get-page-content";

export default async function NailsKursPage() {
    const content = await getPageContent("schulung_nails_page");
    return <NailsKursClient content={content} />;
}
