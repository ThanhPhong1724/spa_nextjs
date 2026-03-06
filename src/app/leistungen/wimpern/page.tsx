import { getPageContent } from "@/lib/get-page-content";
import WimpernClient from "./WimpernClient";

export const metadata = {
    title: "Wimpernverlängerung & Lash Lifting | Smiling Studio",
    description: "Voluminöse Wimpern oder natürlicher Schwung. Entdecke unsere Wimpern-Treatments.",
};

export default async function WimpernPage() {
    const content = await getPageContent("wimpern_page");
    return <WimpernClient content={content} />;
}
