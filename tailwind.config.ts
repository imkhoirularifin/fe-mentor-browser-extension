import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic tokens
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        "background-alt": "var(--color-background-alt)",
        border: "var(--color-border)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        accent: {
          red: "var(--color-accent-red)",
          "red-hover": "var(--color-accent-red-hover)",
        },
      },
      spacing: {
        "0": "var(--spacing-0)",
        "1": "var(--spacing-025)",
        "2": "var(--spacing-050)",
        "3": "var(--spacing-075)",
        "4": "var(--spacing-100)",
        "5": "var(--spacing-125)",
        "6": "var(--spacing-150)",
        "8": "var(--spacing-200)",
        "10": "var(--spacing-250)",
        "12": "var(--spacing-300)",
        "16": "var(--spacing-400)",
        "20": "var(--spacing-500)",
        "24": "var(--spacing-600)",
        "32": "var(--spacing-800)",
        "40": "var(--spacing-1000)",
      },
      borderRadius: {
        none: "var(--corner-radius-0)",
        sm: "var(--corner-radius-4)",
        md: "var(--corner-radius-8)",
        lg: "var(--corner-radius-12)",
        xl: "var(--corner-radius-16)",
        "2xl": "var(--corner-radius-20)",
        "3xl": "var(--corner-radius-24)",
        full: "var(--corner-radius-full)",
      },
      backgroundImage: {
        "gradient-light": "var(--light-gradient)",
        "gradient-dark": "var(--dark-gradient)",
      },
    },
  },
  plugins: [],
};

export default config;
