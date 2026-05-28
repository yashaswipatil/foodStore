import React from "react";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Partner Restaurants" },
  { value: "30 min", label: "Avg. Delivery Time" },
  { value: "4.9★", label: "App Rating" },
];

const features = [
  {
    icon: "🍔",
    title: "Top Local Restaurants",
    desc: "We partner only with the best-rated local spots — from cozy cafés to celebrated fine-dining kitchens.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable Delivery",
    desc: "Our optimized delivery network ensures your food arrives hot, fresh, and on time — every time.",
  },
  {
    icon: "📍",
    title: "Real-Time Tracking",
    desc: "Watch your order journey live — from the kitchen to your door, never wonder where your food is.",
  },
  {
    icon: "🎁",
    title: "Exclusive Offers",
    desc: "Unlock member-only deals, seasonal discounts, and surprise rewards just for ordering with us.",
  },
];

const team = [
  { initials: "AK", name: "Yashaswi Patil", role: "Co-Founder & CEO" },
  { initials: "PS", name: "Yesashwini", role: "Head of Operations" },
  { initials: "RN", name: "Yashaswi K Patil", role: "Lead Product Designer" },
];

const About = () => {
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
          Our Story
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 600,
            lineHeight: 1.1,
            margin: "0 auto 20px",
            maxWidth: "680px",
            letterSpacing: "-0.02em",
          }}
        >
          Food made for{" "}
          <span style={{ color: "#FAC775", fontStyle: "italic" }}>
            real life.
          </span>
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "460px",
            margin: "0 auto",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Chef's Food was built on a simple belief — everyone deserves a great
          meal, delivered without the fuss.
        </p>
      </section>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          borderBottom: "0.5px solid #eee",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "28px 16px",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? "0.5px solid #eee" : "none",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: 600,
                color: "#534AB7",
                marginBottom: "6px",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#888",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Story */}
      <section
        style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 2rem" }}
      >
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
          Who We Are
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#111",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Born from hunger, built with care.
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.75,
            color: "#555",
            maxWidth: "620px",
            marginBottom: "16px",
          }}
        >
          It started with a late-night craving and a frustrating app experience.
          We knew there had to be a better way. Chef's Food launched to connect
          people with the restaurants they love — no hidden fees, no cold
          surprises, no guesswork. Just great food, at your door, exactly when
          you need it.
        </p>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.75,
            color: "#888",
            maxWidth: "620px",
          }}
        >
          Today we serve thousands of customers across the city, partnering with
          over 200 local restaurants who share our obsession with quality and
          speed.
        </p>
      </section>

      <div style={{ borderTop: "0.5px solid #eee" }} />

      {/* Features */}
      <section
        style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 2rem" }}
      >
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
          What We Offer
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#111",
            lineHeight: 1.2,
            marginBottom: "32px",
          }}
        >
          Everything you need, nothing you don't.
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                width: "16.25rem",
                background: "rgb(237, 233, 233)",
                borderRadius: "1rem",
                boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
                overflow: "hidden",
                padding: "1.5rem 1rem 1.5rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "default",
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
                  fontSize: "28px",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                {f.icon}
              </span>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#333",
                  margin: "0 0 8px",
                }}
              >
                {f.title}
              </h3>
              <h4
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  margin: 0,
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {f.desc}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid #eee" }} />

      {/* Team */}
      <section
        style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 2rem" }}
      >
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
          The Team
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#111",
            lineHeight: 1.2,
            marginBottom: "32px",
          }}
        >
          People behind the plate.
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {team.map((t) => (
            <div
              key={t.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "rgb(237, 233, 233)",
                borderRadius: "1rem",
                boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
                padding: "1rem 1.25rem",
                flex: "1 1 200px",
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
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#534AB7",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#333",
                    margin: "0 0 3px",
                  }}
                >
                  {t.name}
                </p>
                <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#534AB7",
          color: "#fff",
          textAlign: "center",
          padding: "72px 2rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            lineHeight: 1.1,
          }}
        >
          Ready to order?
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "32px",
          }}
        >
          Crave it, tap it, get it — anytime, anywhere.
        </p>
        <button
          style={{
            padding: "9px 28px",
            fontSize: "14px",
            fontWeight: 500,
            border: "1.5px solid #fff",
            borderRadius: "20px",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.2s",
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

export default About;
