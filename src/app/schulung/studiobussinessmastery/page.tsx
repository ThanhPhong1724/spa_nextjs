import GruenderClient from './GruenderClient';

export const metadata = {
    title: "Expert-Gründerprogramm | Smiling Studio Schulung",
    description: "Business-Coaching für Beauty-Profis. Lerne nicht nur das Handwerk, sondern meistere das Geschäft dahinter.",
};

import { getPageContent } from "@/lib/get-page-content";

export default async function GruenderPage() {
    const content = await getPageContent("schulung_business_page");
    return <GruenderClient content={content} />;
}
