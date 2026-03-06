import { getPageContent } from "@/lib/get-page-content";
import NailsClient from "./NailsClient";

export const metadata = {
    title: "Nails | Smiling Studio",
    description: "Professionelle Nagelmodellage und Premium Fußpflege für gepflegte Hände und Füße.",
};

export default async function NailsPage() {
    const content = await getPageContent("nails_page");
    return <NailsClient content={content} />;
}
