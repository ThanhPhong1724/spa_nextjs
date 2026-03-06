import BeautyExpertClient from './BeautyExpertClient';

export const metadata = {
    title: "Head-to-Toe Beauty Expert | Smiling Studio Schulung",
    description: "Pediküre, Head Spa & Wimpernverlängerung in einem Kurs. 7 Tage Intensiv-Training.",
};

import { getPageContent } from "@/lib/get-page-content";

export default async function BeautyExpertPage() {
    const content = await getPageContent("schulung_beauty_page");
    return <BeautyExpertClient content={content} />;
}
