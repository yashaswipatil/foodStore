import React from "react";

const ErrorComponent = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div style={{ position: "relative", marginBottom: "8px" }}>
        <span
          style={{
            fontSize: "clamp(100px, 18vw, 180px)",
            fontWeight: 700,
            color: "rgb(237, 233, 233)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          404
        </span>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "48px",
          }}
        >
          🍽️
        </span>
      </div>

      <h1
        style={{
          fontSize: "clamp(22px, 4vw, 36px)",
          fontWeight: 600,
          color: "#111",
          letterSpacing: "-0.02em",
          margin: "0 0 12px",
        }}
      >
        Oops! Page{" "}
        <span style={{ color: "#534AB7", fontStyle: "italic" }}>
          not found.
        </span>
      </h1>

      <p
        style={{
          fontSize: "15px",
          color: "#888",
          maxWidth: "380px",
          lineHeight: 1.7,
          margin: "0 auto 32px",
        }}
      >
        Looks like this page got lost in the kitchen. Let's get you back on
        track.
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
        Go to Home
      </button>
    </div>
  );
};

export default ErrorComponent;
