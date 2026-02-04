"use client";

import { useCart } from '@/contexts/CartContext';

export default function CartModal() {
    const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-[#5c4033]">Warenkorb</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 py-12">
                            <p className="text-4xl mb-4">🛒</p>
                            <p>Ihr Warenkorb ist leer</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map(item => (
                                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#5c4033]">{item.name}</h3>
                                        <p className="text-[#d4a373] font-bold">{item.price.toLocaleString('de-DE')} €</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-auto text-red-500 hover:text-red-700"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-6 border-t border-gray-200 space-y-4">
                        <div className="flex justify-between text-lg font-bold">
                            <span>Gesamt:</span>
                            <span className="text-[#d4a373]">{totalPrice.toLocaleString('de-DE')} €</span>
                        </div>
                        <a
                            href="/schulung/checkout"
                            className="block w-full bg-[#d4a373] text-white text-center py-3 rounded-full font-semibold hover:bg-[#c49363] transition-colors"
                        >
                            Zur Kasse
                        </a>
                        <button
                            onClick={clearCart}
                            className="w-full text-gray-500 hover:text-gray-700 text-sm"
                        >
                            Warenkorb leeren
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
