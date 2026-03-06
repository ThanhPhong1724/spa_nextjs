import { getPageContent } from "@/lib/get-page-content";
import HeadspaClient from "./HeadspaClient";

export const metadata = {
    title: "Head Spa | Smiling Studio",
    description: "Tiefenentspannung und Pflege für Ihre Kopfhaut mit unseren exklusiven Head Spa Treatments.",
};

export default async function HeadspaPage() {
    const content = await getPageContent("headspa_page");
    return <HeadspaClient content={content} />;
}
