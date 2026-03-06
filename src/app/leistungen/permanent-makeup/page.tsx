import { getPageContent } from "@/lib/get-page-content";
import PermanentMakeupClient from "./PermanentMakeupClient";

export const metadata = {
    title: "Permanent Make Up | Smiling Studio",
    description: "Perfekte Konturen für Augenbrauen, Lippen und Augen. Langanhaltende Schönheit.",
};

export default async function PermanentMakeupPage() {
    const content = await getPageContent("permanent_makeup_page");
    return <PermanentMakeupClient content={content} />;
}
