import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "black 2px 2px",
      },
      textShadowSM: {
        DEFAULT: "black 1px 1px",
      },
      boxShadow: {
        DEFAULT: "4px 4px rgba(0, 0, 0, .2);",
      },
      cardShadow: {
        DEFAULT: "0px 3px rgba(0, 0, 0, .2);",
      },
      boxShadowDark: {
        DEFAULT: "2px 2px rgba(0, 0, 0);",
      },

      fontSize: {
        "4xl": [
          "2.5rem",
          {
            // letterSpacing: "-0.02em",
            lineHeight: "2.5rem",
          },
        ],

        // "font-size": '2.25rem' /* 36px */
        // "line-height": '2.5rem' /* 40px */
      },

      borderRadius: {
        "2xl": "1.25rem",
      },

      animation: {
        "custom-spin": "custom-spin 10s linear infinite",
        "slide-in": "slide-in 1.5s ease-in-out forwards",
        "slide-in-spin":
          "slide-in 1.5s ease-in-out forwards, custom-spin 10s linear infinite 1.4s",
        scrolling: "scrolling 7s linear infinite backwards",
      },
      keyframes: {
        "custom-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "slide-in": {
          "0%": {
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y))",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
        },
        scrolling: {
          "0%": {
            transform: "translate(0)",
          },
          "100%": {
            transform: "translate(-100%)",
          },
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // costum colors
        cor1b: "#872F12",
        cor2b: "#E65036",
        cor3b: "#F2672D",
        cor4b: "#FFFFFF",
        cor5b: "#C99989",
        cor6b: "#F48331",

        darkBrown: "#62210B",
        lightBrown: "#BF3B0C",
        orange: "#F48331",
        yellow: "#FCB603",
      },
    },
  },
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "row-span-1",
    "row-span-2",
    "row-span-3",
    "row-span-4",
    "row-span-5",
    "row-span-6",
    "row-span-7",
    "row-span-8",
    "row-span-9",
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
    "col-start-8",
    "col-start-9",
    "row-start-1",
    "row-start-2",
    "row-start-3",
    "row-start-4",
    "row-start-5",
    "row-start-6",
    "row-start-7",
    "row-start-8",
    "row-start-9",
    "text-xs-dynamic",
    "text-sm-dynamic",
    "text-base-dynamic",
    "text-lg-dynamic",
    "text-xl-dynamic",
    "text-2xl-dynamic",
    "text-3xl-dynamic",
    "text-4xl-dynamic",
    "text-5xl-dynamic",
    "text-6xl-dynamic",
    "text-7xl-dynamic",
    "text-8xl-dynamic",
    "text-9xl-dynamic",
  ],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
      matchUtilities(
        {
          "text-shadow-sm": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadowSM") }
      );
      matchUtilities(
        {
          "box-shadow": (value) => ({
            boxShadow: value,
          }),
        },
        { values: theme("boxShadow") }
      );
      matchUtilities(
        {
          "card-shadow": (value) => ({
            boxShadow: value,
          }),
        },
        { values: theme("cardShadow") }
      );
      matchUtilities(
        {
          "box-shadow-dark": (value) => ({
            boxShadow: value,
          }),
        },
        { values: theme("boxShadowDark") }
      );
    }),
  ],
} satisfies Config;
