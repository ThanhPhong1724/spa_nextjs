import { getPageContent } from "@/lib/get-page-content";
import InnovativeClient from "./InnovativeClient";

export const metadata = {
    title: "Innovative Treatments | Smiling Studio",
    description: "Entdecke unsere innovativen Treatments für maximale Entspannung und Pflege.",
};

export default async function InnovativeTreatmentsPage() {
    const content = await getPageContent("innovative_treatments_page");
    return <InnovativeClient content={content} />;
}
