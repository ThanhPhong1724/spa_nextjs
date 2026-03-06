import { getPageContent } from "@/lib/get-page-content";
import AugenbrauenClient from "./AugenbrauenClient";

export const metadata = {
    title: "Augenbrauen | Smiling Studio",
    description: "Perfekt geformte Augenbrauen durch professionelles Zupfen und Laminieren.",
};

export default async function AugenbrauenPage() {
    const content = await getPageContent("augenbrauen_page");
    return <AugenbrauenClient content={content} />;
}
