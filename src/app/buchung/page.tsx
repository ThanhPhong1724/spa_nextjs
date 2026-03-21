import { Metadata } from "next";
import BuchungClient from "./BuchungClient";

export const metadata: Metadata = {
    title: "Online Buchung | Smiling Studio",
    description: "Buchen Sie Ihren Wohlfühlmoment online – schnell, einfach und jederzeit verfügbar.",
};

export default function BuchungPage() {
    return <BuchungClient />;
}
