import CheckoutClient from './CheckoutClient';

export const metadata = {
    title: "Kasse | Smiling Studio Schulung",
    description: "Schließen Sie Ihre Bestellung ab. PayPal oder Banküberweisung.",
};

export default function CheckoutPage() {
    return <CheckoutClient />;
}
