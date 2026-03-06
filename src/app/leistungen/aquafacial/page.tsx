import { getPageContent } from "@/lib/get-page-content";
import AquafacialClient from "./AquafacialClient";

export const metadata = {
    title: "AquaFacial Behandlung | Smiling Studio",
    description: "Tiefenreinigung und Anti-Aging in einer Behandlung. Für ein strahlendes und gesundes Hautbild.",
};

export default async function AquafacialPage() {
    const content = await getPageContent("aquafacial_page");
    return <AquafacialClient content={content} />;
}
