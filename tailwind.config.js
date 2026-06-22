module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#FF5200", // Swiggy orange
        primaryDark: "#E04800",

        secondary: "#1F2937", // dark text / headers
        muted: "#6B7280", // secondary text

        background: "#F9FAFB", // app background
        card: "#FFFFFF", // cards

        border: "#E5E7EB", // borders

        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        card: "0 2px 10px rgba(0,0,0,0.06)",
      },

      borderRadius: {
        xl: "14px",
        xxl: "18px",
      },
    },
  },

  plugins: [],
};
