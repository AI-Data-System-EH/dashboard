import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "off-white": "#FAF9F6",
                "matte-black": "#28282B",
                "heensan-cyan": "#006BA6", // Pantone 307 U
                "heensan-blue": "#0A3370", // Pantone 2757 U/C
                "heensan-gray": "#898B8E", // Pantone Coolgray 9 U
            },
            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                "pos-0": "0% 0%",
                "pos-100": "100% 100%",
            },
            fontFamily: {
                display: [
                    "var(--font-sf)",
                    "system-ui",
                    "sans-serif",
                ],
                default: [
                    "var(--font-inter)",
                    "var(--font-pretendard)",
                    "system-ui",
                    "sans-serif",
                ],
                pretendard: [
                    "var(--font-pretendard)",
                    "system-ui",
                    "sans-serif",
                ],
            },
            animation: {
                // Fade up and down
                "fade-up": "fade-up 0.5s",
                "fade-down": "fade-down 0.5s",
                // Tooltip
                "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            },
            keyframes: {
                // Fade up and down
                "fade-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "80%": {
                        opacity: "0.6",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                },
                "fade-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "80%": {
                        opacity: "0.6",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                },
                // Tooltip
                "slide-up-fade": {
                    "0%": { opacity: "0", transform: "translateY(6px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-down-fade": {
                    "0%": { opacity: "0", transform: "translateY(-6px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        plugin(({ addVariant }) => {
            addVariant("radix-side-top", '&[data-side="top"]');
            addVariant("radix-side-bottom", '&[data-side="bottom"]');
        }),
    ],
};
export default config;
