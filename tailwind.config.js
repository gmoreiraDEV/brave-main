/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    white: "#EFEEF2",
                    "off-white": "#D0CDDA",
                    primary: "#7E1EDF",
                    secondary: "#635985",
                    tertiary: "#443C68",
                    base: "#18122B",
                    accent: "#F16767",
                },
            },
            backgroundImage: {
                "hero-pattern": "url('/img/vlnt-back.png')",
                "bg-hero": "url('/img/bg-hero.png')",
            },
            keyframes: {
                progress: {
                    "100%": {
                        right: "100%",
                    },
                },
            },
            animation: {
                "toast-progress": "progress 3s linear forwards",
            },
            transitionProperty: {
                "toast-transition":
                    "all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35)",
            },
        },
    },
    plugins: [],
};
