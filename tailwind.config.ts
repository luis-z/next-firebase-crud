import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb", // Light background
        primary: "#2563eb", // Tailwind Blue-600 for buttons
        secondary: "#374151", // Tailwind Gray-700 for text
        danger: "#ef4444", // Tailwind Red-500 for delete buttons
      },
    },
  },
  plugins: [],
} satisfies Config;
