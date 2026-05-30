import React, { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Butter Chicken",
    restaurant: "Spice Garden",
    price: 320,
    qty: 1,
    emoji: "🍛",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    price: 280,
    qty: 2,
    emoji: "🍕",
  },
  {
    id: 3,
    name: "Veg Biryani",
    restaurant: "Biryani House",
    price: 220,
    qty: 1,
    emoji: "🍚",
  },
];

const Cart = () => {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = items.length > 0 ? 49 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#fff",
        minHeight: "100vh",
        color: "#111",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background: "#534AB7",
          color: "#fff",
          padding: "40px 2rem 36px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "10px",
            fontWeight: 500,
          }}
        >
          Your Order
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          {items.length > 0 ? (
            <>
              Your{" "}
              <span style={{ color: "#FAC775", fontStyle: "italic" }}>
                Cart
              </span>
            </>
          ) : (
            "Cart is Empty 🍽️"
          )}
        </h1>
      </section>

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "40px 2rem 64px",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* Cart Items */}
        <div style={{ flex: "1 1 420px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
              <span
                style={{
                  fontSize: "64px",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                🛒
              </span>
              <h2
                style={{
                  fontSize: "1.4rem",
                  color: "#444",
                  marginBottom: "8px",
                }}
              >
                Nothing here yet!
              </h2>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  marginBottom: "24px",
                }}
              >
                Looks like you haven't added anything to your cart.
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                style={{
                  padding: "8px 28px",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "1.5px solid #534AB7",
                  borderRadius: "20px",
                  background: "#534AB7",
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Browse Restaurants
              </button>
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "rgb(237, 233, 233)",
                    borderRadius: "1rem",
                    boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
                    padding: "1.25rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  {/* Emoji */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      flexShrink: 0,
                    }}
                  >
                    {item.emoji}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#333",
                        margin: "0 0 4px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#888",
                        margin: "0 0 8px",
                      }}
                    >
                      {item.restaurant}
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#534AB7",
                        margin: 0,
                      }}
                    >
                      ₹{(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>

                  {/* Qty Controls */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      flexShrink: 0,
                    }}
                  >
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        border: "1.5px solid #534AB7",
                        background: "transparent",
                        color: "#534AB7",
                        fontSize: "18px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "inherit",
                        lineHeight: 1,
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        minWidth: "16px",
                        textAlign: "center",
                      }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        border: "none",
                        background: "#534AB7",
                        color: "#fff",
                        fontSize: "18px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "inherit",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#bbb",
                      flexShrink: 0,
                      padding: "4px",
                    }}
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* Clear Cart */}
              <button
                onClick={() => setItems([])}
                style={{
                  alignSelf: "flex-start",
                  padding: "6px 18px",
                  fontSize: "13px",
                  fontWeight: 500,
                  border: "1.5px solid #ddd",
                  borderRadius: "20px",
                  background: "transparent",
                  color: "#888",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#534AB7";
                  e.currentTarget.style.color = "#534AB7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ddd";
                  e.currentTarget.style.color = "#888";
                }}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        {/* Order Summary */}
        {items.length > 0 && (
          <div style={{ flex: "0 1 280px", position: "sticky", top: "80px" }}>
            <div
              style={{
                background: "rgb(237, 233, 233)",
                borderRadius: "1rem",
                boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
                padding: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333",
                  margin: "0 0 20px",
                }}
              >
                Order Summary
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <span>
                    Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)
                  </span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div
                  style={{
                    borderTop: "0.5px solid #ccc",
                    paddingTop: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#111",
                  }}
                >
                  <span>Total</span>
                  <span style={{ color: "#534AB7" }}>
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  borderRadius: "20px",
                  background: "#534AB7",
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#3C3489")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#534AB7")
                }
                onMouseDown={(e) =>
                  (e.currentTarget.style.background = "#26215C")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.background = "#3C3489")
                }
              >
                Proceed to Checkout →
              </button>

              <p
                style={{
                  fontSize: "12px",
                  color: "#aaa",
                  textAlign: "center",
                  marginTop: "12px",
                  marginBottom: 0,
                }}
              >
                Free delivery on orders above ₹499
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
