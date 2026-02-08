"use client";

import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function CartModal() {
    const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#f5ebe0] shadow-2xl z-50 flex flex-col">
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-[#ff8b69] to-[#e87a5a] flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white flex-1 text-center">
                        <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Warenkorb
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-white hover:text-white/80 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="text-center text-[#6b5344] py-12">
                            <svg className="w-16 h-16 mx-auto mb-4 text-[#ff8b69]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="font-medium">Ihr Warenkorb ist leer</p>
                            <p className="text-sm text-[#6b5344]/70 mt-2">Entdecken Sie unsere Kurse!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map(item => (
                                <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-[#ff8b69]/10">
                                    <div className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[#5c4033]">{item.name}</h3>
                                            <p className="text-[#ff8b69] font-semibold">{item.price.toLocaleString('de-DE')} €</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 bg-[#ff8b69]/10 text-[#ff8b69] rounded-full hover:bg-[#ff8b69]/20 transition-colors flex items-center justify-center font-bold"
                                                >
                                                    −
                                                </button>
                                                <span className="w-8 text-center font-bold text-[#5c4033]">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 bg-[#ff8b69]/10 text-[#ff8b69] rounded-full hover:bg-[#ff8b69]/20 transition-colors flex items-center justify-center font-bold"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Subtotal per item */}
                                    <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-sm text-[#6b5344]">Zwischensumme:</span>
                                        <span className="font-bold text-[#ff8b69]">{(item.price * item.quantity).toLocaleString('de-DE')} €</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-6 bg-white border-t border-[#ff8b69]/10 space-y-4">
                        <div className="flex justify-between items-center text-lg">
                            <span className="font-bold text-[#5c4033]">Gesamt:</span>
                            <span className="text-2xl font-bold text-[#ff8b69]">{totalPrice.toLocaleString('de-DE')} €</span>
                        </div>
                        <Link
                            href="/schulung/checkout"
                            onClick={() => setIsCartOpen(false)}
                            className="block w-full bg-gradient-to-r from-[#ff8b69] to-[#e87a5a] text-white text-center py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all"
                        >
                            Zur Kasse
                        </Link>
                        <button
                            onClick={clearCart}
                            className="w-full text-[#6b5344] hover:text-red-500 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Warenkorb leeren
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
