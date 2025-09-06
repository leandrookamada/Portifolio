/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1D4ED8",
                secondary: "#9333EA",
                accent: "#F59E0B",
                background: "#F9FAFB",
                dark: "#111827",
            },
            fontFamily: {
                titulo: ["var(--font-titulo)", "sans-serif"],
                subtitulo: ["var(--font-subtitulo)", "sans-serif"],
            },
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            fontSize: {
                xs: ".75rem",
                sm: ".875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
            },
            maxWidth: {
                container: "1200px",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
            boxShadow: {
                rightwhite: "10px 0 20px -10px rgba(255, 255, 255, 0.5)",
                leftwhite: "-10px 0 20px -10px rgba(255, 255, 255, 0.5)",
                card: "0 4px 6px rgba(0, 0, 0, 0.1)",
                btn: "0 2px 4px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
