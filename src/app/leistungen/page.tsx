import { getPageContent } from "@/lib/get-page-content";
import LeistungenClient from "@/components/LeistungenClient";



export default async function LeistungenPage() {
    const content = await getPageContent("services_page");

    return <LeistungenClient content={content} />;
}
