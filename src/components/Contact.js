import React, { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email Us",
    value: "support@chefsfood.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am – 9pm",
  },
  { icon: "📍", label: "Find Us", value: "Mumbai, Maharashtra", sub: "India" },
];

const faqs = [
  {
    q: "How do I track my order?",
    a: "Once your order is placed, you'll get a live tracking link via SMS and in-app notifications.",
  },
  {
    q: "Can I cancel or modify my order?",
    a: "Orders can be cancelled within 2 minutes of placing. Modifications are not supported after confirmation.",
  },
  {
    q: "What if my food arrives cold or incorrect?",
    a: "Reach out via the app or email us — we'll make it right with a refund or re-delivery.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

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
          padding: "64px 2rem 56px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "14px",
            fontWeight: 500,
          }}
        >
          Get In Touch
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 600,
            lineHeight: 1.1,
            margin: "0 auto 20px",
            maxWidth: "600px",
            letterSpacing: "-0.02em",
          }}
        >
          We'd love to{" "}
          <span style={{ color: "#FAC775", fontStyle: "italic" }}>
            hear from you.
          </span>
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "440px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Whether it's a question, feedback, or just a compliment — our team is
          here for you.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section
        style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 2rem 0" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {contactInfo.map((c) => (
            <div
              key={c.label}
              style={{
                flex: "1 1 200px",
                background: "rgb(237, 233, 233)",
                borderRadius: "1rem",
                boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
                padding: "1.5rem 1.25rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 0.5rem 1.25rem rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0.25rem 0.75rem rgba(0,0,0,0.1)";
              }}
            >
              <span
                style={{
                  fontSize: "26px",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                {c.icon}
              </span>
              <h3
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#534AB7",
                  fontWeight: 600,
                  margin: "0 0 6px",
                }}
              >
                {c.label}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#333",
                  margin: "0 0 4px",
                }}
              >
                {c.value}
              </p>
              <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>
                {c.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + FAQ */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "48px 2rem 64px",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* Form */}
        <div style={{ flex: "1 1 340px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#534AB7",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            Send A Message
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: "28px",
            }}
          >
            Drop us a line.
          </h2>

          {submitted ? (
            <div
              style={{
                background: "rgb(237, 233, 233)",
                borderRadius: "1rem",
                boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
                padding: "2.5rem 1.5rem",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                ✅
              </span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#333",
                  margin: "0 0 8px",
                }}
              >
                Message Sent!
              </h3>
              <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
                Thanks {form.name}! We'll get back to you at {form.email} within
                24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                style={{
                  marginTop: "20px",
                  padding: "7px 22px",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "1.5px solid #534AB7",
                  borderRadius: "20px",
                  background: "transparent",
                  color: "#534AB7",
                  cursor: "pointer",
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {[
                { name: "name", placeholder: "Your name", type: "text" },
                { name: "email", placeholder: "Your email", type: "email" },
                {
                  name: "subject",
                  placeholder: "Subject (optional)",
                  type: "text",
                },
              ].map((f) => (
                <input
                  key={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "9px 14px",
                    fontSize: "14px",
                    border: "0.5px solid #ddd",
                    borderRadius: "8px",
                    outline: "none",
                    background: "#f9f9f9",
                    color: "#111",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#534AB7";
                    e.target.style.boxShadow = "0 0 0 3px rgba(83,74,183,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#ddd";
                    e.target.style.boxShadow = "none";
                  }}
                />
              ))}
              <textarea
                name="message"
                placeholder="Your message..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "9px 14px",
                  fontSize: "14px",
                  border: "0.5px solid #ddd",
                  borderRadius: "8px",
                  outline: "none",
                  background: "#f9f9f9",
                  color: "#111",
                  fontFamily: "inherit",
                  resize: "vertical",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#534AB7";
                  e.target.style.boxShadow = "0 0 0 3px rgba(83,74,183,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#ddd";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                style={{
                  alignSelf: "flex-start",
                  padding: "8px 28px",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "1.5px solid #534AB7",
                  borderRadius: "20px",
                  background: "#534AB7",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3C3489";
                  e.currentTarget.style.borderColor = "#3C3489";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#534AB7";
                  e.currentTarget.style.borderColor = "#534AB7";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.background = "#26215C";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.background = "#3C3489";
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div style={{ flex: "1 1 280px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#534AB7",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: "28px",
            }}
          >
            Quick answers.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: "0.5px solid #eee",
                  ...(i === faqs.length - 1
                    ? { borderBottom: "0.5px solid #eee" }
                    : {}),
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "16px 0",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "inherit",
                  }}
                >
                  <span
                    style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#534AB7",
                      fontWeight: 400,
                      flexShrink: 0,
                      transition: "transform 0.2s",
                      transform:
                        openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.65,
                      margin: "0 0 16px",
                      paddingRight: "24px",
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#534AB7",
          color: "#fff",
          textAlign: "center",
          padding: "64px 2rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 40px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "14px",
            lineHeight: 1.1,
          }}
        >
          Hungry right now?
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "28px",
          }}
        >
          Skip the wait — order from top local restaurants instantly.
        </p>
        <button
          style={{
            padding: "8px 28px",
            fontSize: "14px",
            fontWeight: 500,
            border: "1.5px solid #fff",
            borderRadius: "20px",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.2s",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#534AB7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Explore Restaurants
        </button>
      </section>
    </div>
  );
};

export default Contact;
