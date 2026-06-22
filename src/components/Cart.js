import React from "react";
import { useCart } from "../utils/cartContext";

const Cart = () => {
  const { items, updateQty, removeItem, clearCart } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const deliveryFee = items.length > 0 ? 49 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      {/* Hero */}
      <section className="bg-orange-500 px-6 py-10 text-white">
        <p className="mb-2 text-xs tracking-[0.2em] uppercase text-white/70">
          Your Order
        </p>

        <h1 className="text-3xl font-bold md:text-4xl">
          {items.length > 0 ? (
            <>
              Your <span className="text-yellow-200 italic">Cart</span>
            </>
          ) : (
            "Cart is Empty 🍽️"
          )}
        </h1>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row">
        {/* Left - Items */}
        <div className="flex-1">
          {items.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-md">
              <div className="mb-4 text-6xl">🛒</div>

              <h2 className="mb-2 text-xl font-semibold">Nothing here yet!</h2>

              <p className="mb-6 text-sm text-slate-500">
                Looks like you haven't added anything to your cart.
              </p>

              <button
                onClick={() => (window.location.href = "/")}
                className="rounded-full bg-orange-500 px-6 py-2 text-white transition hover:bg-orange-600"
              >
                Browse Restaurants
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    {/* Emoji */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                      {item.emoji || "🍽️"}
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold">{item.name}</h3>

                      <p className="truncate text-sm text-slate-500">
                        {item.restaurant}
                      </p>

                      <p className="mt-1 font-semibold text-orange-500">
                        ₹{(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="h-8 w-8 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        −
                      </button>

                      <span className="w-4 text-center">{item.qty}</span>

                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="h-8 w-8 rounded-full bg-orange-500 text-white hover:bg-orange-600"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-lg text-slate-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={clearCart}
                className="mt-4 rounded-full border px-5 py-2 text-sm hover:bg-gray-100"
              >
                Clear Cart
              </button>
            </>
          )}
        </div>

        {/* Right - Summary */}
        {items.length > 0 && (
          <div className="w-full lg:w-80">
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>
                    Subtotal ({items.reduce((sum, item) => sum + item.qty, 0)}{" "}
                    items)
                  </span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-orange-500">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-orange-500 py-2 text-white hover:bg-orange-600">
                Proceed to Checkout →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
