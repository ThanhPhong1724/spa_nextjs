"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

type PaymentMethod = 'paypal' | 'bank' | null;

export default function CheckoutClient() {
    const { items, totalPrice, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
    const [orderComplete, setOrderComplete] = useState(false);
    const [orderId] = useState(() => `SS-${Date.now().toString(36).toUpperCase()}`);

    if (items.length === 0 && !orderComplete) {
        return (
            <main className="pt-32 pb-20 bg-[#f8f7f6] min-h-screen">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <p className="text-4xl mb-4">🛒</p>
                    <h1 className="text-2xl font-serif font-bold text-[#5c4033] mb-4">
                        Ihr Warenkorb ist leer
                    </h1>
                    <Link
                        href="/schulung"
                        className="inline-block bg-[#d4a373] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49363] transition-colors"
                    >
                        Zurück zu den Kursen
                    </Link>
                </div>
            </main>
        );
    }

    if (orderComplete) {
        return (
            <main className="pt-32 pb-20 bg-[#f8f7f6] min-h-screen">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <p className="text-6xl mb-6">✅</p>
                    <h1 className="text-3xl font-serif font-bold text-[#5c4033] mb-4">
                        Vielen Dank für Ihre Bestellung!
                    </h1>
                    <p className="text-[#666] mb-6">
                        Ihre Bestellnummer: <strong className="text-[#5c4033]">{orderId}</strong>
                    </p>
                    {paymentMethod === 'bank' && (
                        <div className="bg-white rounded-xl p-6 text-left mb-6">
                            <h3 className="font-bold text-[#5c4033] mb-4">Ihre Zahlungsinformationen für die Überweisung:</h3>
                            <div className="space-y-2 text-[#555]">
                                <p><strong>Empfänger:</strong> Smiling Studio</p>
                                <p><strong>IBAN:</strong> DE89 3704 0044 0532 0130 00</p>
                                <p><strong>BIC:</strong> COBADEFFXXX</p>
                                <p><strong>Verwendungszweck:</strong> {orderId}</p>
                            </div>
                            <p className="mt-4 text-sm text-[#888]">
                                Bitte überweisen Sie den Betrag innerhalb von 3 Werktagen.
                                Nach Erhalt der Zahlung erhalten Sie eine Bestätigungs-E-Mail von uns.
                            </p>
                        </div>
                    )}
                    <Link
                        href="/"
                        className="inline-block bg-[#d4a373] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c49363] transition-colors"
                    >
                        Zurück zur Startseite
                    </Link>
                </div>
            </main>
        );
    }

    const handlePayPal = () => {
        // In production, redirect to PayPal with amount
        window.open(`https://paypal.me/SmilingStudio/${totalPrice}`, '_blank');
        clearCart();
        setOrderComplete(true);
    };

    const handleBankTransfer = () => {
        clearCart();
        setOrderComplete(true);
    };

    return (
        <main className="pt-32 pb-20 bg-[#f8f7f6] min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                {/* Breadcrumb */}
                <nav className="text-sm text-[#666] mb-8">
                    <Link href="/schulung" className="hover:text-[#d4a373]">Schulung</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#5c4033]">Kasse</span>
                </nav>

                <h1 className="text-3xl font-serif font-bold text-[#5c4033] mb-8">
                    Kasse
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h2 className="font-bold text-[#5c4033] mb-4">Bestellübersicht</h2>
                        <div className="space-y-4 mb-6">
                            {items.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#5c4033]">{item.name}</h3>
                                        <p className="text-sm text-[#666]">Anzahl: {item.quantity}</p>
                                    </div>
                                    <p className="font-bold text-[#d4a373]">
                                        {(item.price * item.quantity).toLocaleString('de-DE')} €
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex justify-between text-lg font-bold">
                                <span>Gesamt:</span>
                                <span className="text-[#d4a373]">{totalPrice.toLocaleString('de-DE')} €</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h2 className="font-bold text-[#5c4033] mb-4">
                            Wählen Sie Ihre Zahlungsmethode
                        </h2>
                        <p className="text-[#666] text-sm mb-6">
                            Vielen Dank für Ihre Bestellung! Bitte wählen Sie eine der folgenden Optionen:
                        </p>

                        <div className="space-y-4">
                            {/* PayPal */}
                            <button
                                onClick={() => setPaymentMethod('paypal')}
                                className={`w-full p-4 rounded-xl border-2 transition-colors text-left flex items-center gap-4 ${paymentMethod === 'paypal'
                                        ? 'border-[#d4a373] bg-[#faf8f5]'
                                        : 'border-gray-200 hover:border-[#d4a373]'
                                    }`}
                            >
                                <span className="text-2xl">💳</span>
                                <div>
                                    <p className="font-semibold text-[#5c4033]">PayPal</p>
                                    <p className="text-sm text-[#666]">Schnell und sicher. Sie werden zu PayPal weitergeleitet.</p>
                                </div>
                            </button>

                            {/* Bank Transfer */}
                            <button
                                onClick={() => setPaymentMethod('bank')}
                                className={`w-full p-4 rounded-xl border-2 transition-colors text-left flex items-center gap-4 ${paymentMethod === 'bank'
                                        ? 'border-[#d4a373] bg-[#faf8f5]'
                                        : 'border-gray-200 hover:border-[#d4a373]'
                                    }`}
                            >
                                <span className="text-2xl">🏦</span>
                                <div>
                                    <p className="font-semibold text-[#5c4033]">Banküberweisung (Vorkasse)</p>
                                    <p className="text-sm text-[#666]">Sie erhalten unsere Bankverbindung per E-Mail.</p>
                                </div>
                            </button>
                        </div>

                        {/* Confirm Button */}
                        {paymentMethod && (
                            <div className="mt-6">
                                {paymentMethod === 'paypal' ? (
                                    <button
                                        onClick={handlePayPal}
                                        className="w-full bg-[#0070ba] text-white py-4 rounded-full font-bold hover:bg-[#005ea6] transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>💳</span>
                                        Jetzt sicher mit PayPal bezahlen
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleBankTransfer}
                                        className="w-full bg-[#d4a373] text-white py-4 rounded-full font-bold hover:bg-[#c49363] transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>🏦</span>
                                        Per Banküberweisung bezahlen
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Security Note */}
                        <p className="text-center text-xs text-[#888] mt-6">
                            🔒 Alle Zahlungen sind SSL-verschlüsselt und sicher.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
