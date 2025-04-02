import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // BiteBase primary colors
        primary: {
          DEFAULT: "#FF6B35", // Vibrant orange - primary brand color
          50: "#FFF2EC",
          100: "#FFE5D9",
          200: "#FFCBB3",
          300: "#FFB18D",
          400: "#FF9766",
          500: "#FF6B35", // Base primary
          600: "#FF4A03",
          700: "#CC3A00",
          800: "#952B00",
          900: "#5E1B00",
          950: "#3F1200",
        },
        // BiteBase secondary colors
        secondary: {
          DEFAULT: "#2EC4B6", // Teal - secondary brand color
          50: "#E6F9F7",
          100: "#CCF3EF",
          200: "#99E7DF",
          300: "#66DBCF",
          400: "#33CFBF",
          500: "#2EC4B6", // Base secondary
          600: "#239D92",
          700: "#1A756D",
          800: "#114E48",
          900: "#092724",
          950: "#041312",
        },
        // BiteBase accent colors
        accent: {
          DEFAULT: "#011627", // Dark blue - accent color
          50: "#E6EDF2",
          100: "#CCDBE5",
          200: "#99B7CB",
          300: "#6693B1",
          400: "#336F97",
          500: "#004B7D",
          600: "#003C64",
          700: "#002D4B",
          800: "#001E32",
          900: "#011627", // Base accent
          950: "#000B13",
        },
        // BiteBase neutral colors
        neutral: {
          DEFAULT: "#FDFFFC", // Off-white - background color
          50: "#FDFFFC", // Base neutral
          100: "#F5F7F4",
          200: "#E6EAE3",
          300: "#D7DDD2",
          400: "#C8D0C1",
          500: "#B9C3B0",
          600: "#A0AF94",
          700: "#879B78",
          800: "#6B7C5F",
          900: "#4F5C46",
          950: "#3F4938",
        },
        // BiteBase warning color
        warning: {
          DEFAULT: "#F9DC5C", // Yellow - warning color
          50: "#FFFDF5",
          100: "#FFFAEB",
          200: "#FEF5D7",
          300: "#FEF0C3",
          400: "#FDEBAF",
          500: "#FDE69B",
          600: "#FCE187",
          700: "#FBDC73",
          800: "#F9DC5C", // Base warning
          900: "#F7C811",
          950: "#C59F09",
        },
        // BiteBase error color
        destructive: {
          DEFAULT: "#E71D36", // Red - error/destructive color
          50: "#FDE9EC",
          100: "#FBD3D9",
          200: "#F7A7B3",
          300: "#F37B8D",
          400: "#EF4F67",
          500: "#E71D36", // Base destructive
          600: "#C0142B",
          700: "#8F0F20",
          800: "#5F0A15",
          900: "#30050B",
          950: "#180305",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "bitebase-sm": "0 1px 2px 0 rgba(1, 22, 39, 0.05)",
        "bitebase-md": "0 4px 6px -1px rgba(1, 22, 39, 0.1), 0 2px 4px -1px rgba(1, 22, 39, 0.06)",
        "bitebase-lg": "0 10px 15px -3px rgba(1, 22, 39, 0.1), 0 4px 6px -2px rgba(1, 22, 39, 0.05)",
        "bitebase-xl": "0 20px 25px -5px rgba(1, 22, 39, 0.1), 0 10px 10px -5px rgba(1, 22, 39, 0.04)",
        "bitebase-2xl": "0 25px 50px -12px rgba(1, 22, 39, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

