import SchulungClient from './SchulungClient';

export const metadata = {
    title: "Schulung & Ausbildung | Smiling Studio",
    description: "Profi-Ausbildung in Beauty, Nails, Head Spa und mehr. 15 Jahre Erfahrung für deinen Erfolg.",
};

import { getPageContent } from "@/lib/get-page-content";

export default async function SchulungPage() {
    const content = await getPageContent("schulung_page");
    return <SchulungClient content={content} />;
}
