import type { Config } from "tailwindcss";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main_blue: "#131f42",
        main_brown: "#ab8e66",
        bg_brown: "#faf7f6",
      },
      fontFamily: {
        cardo: ["Cardo", "serif"],
      },
      rotate: {
        "135": "135deg",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
} satisfies Config;
