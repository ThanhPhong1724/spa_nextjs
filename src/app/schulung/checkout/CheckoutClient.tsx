"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

type PaymentMethod = 'paypal' | 'bank' | null;

// SVG Icons
const CartIcon = () => (
    <svg className="w-12 h-12 text-[#d4a373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CreditCardIcon = () => (
    <svg className="w-8 h-8 text-[#d4a373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);

const BankIcon = () => (
    <svg className="w-8 h-8 text-[#d4a373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const LockIcon = () => (
    <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

export default function CheckoutClient() {
    const { items, totalPrice, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
    const [orderComplete, setOrderComplete] = useState(false);
    const [orderId] = useState(() => `SS-${Date.now().toString(36).toUpperCase()}`);

    if (items.length === 0 && !orderComplete) {
        return (
            <main className="pt-32 pb-20 bg-[#f8f7f6] min-h-screen">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-4">
                        <CartIcon />
                    </div>
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
                    <div className="flex justify-center mb-6">
                        <CheckCircleIcon />
                    </div>
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
                                <CreditCardIcon />
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
                                <BankIcon />
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
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        Jetzt sicher mit PayPal bezahlen
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleBankTransfer}
                                        className="w-full bg-[#d4a373] text-white py-4 rounded-full font-bold hover:bg-[#c49363] transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        Per Banküberweisung bezahlen
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Security Note */}
                        <p className="text-center text-xs text-[#888] mt-6">
                            <LockIcon />
                            Alle Zahlungen sind SSL-verschlüsselt und sicher.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
