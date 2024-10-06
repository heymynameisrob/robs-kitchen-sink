/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Library purposes only - no need to copy this into a REAL project
  ],
  theme: {
    extend: {
      // Turn off if you want default tailwind font sizes
      fontSize: {
        "xs": ".688rem", // 12px
        "sm": "0.813rem", // 13px 
        "base": '0.9375rem', // 15px
        "lg": "1.125rem", // 18px
        "xl": "1.5rem", // 24px
        "2xl": "2rem", // 32px
        "3xl": "2.25rem", // 36px
        "4xl": "3rem",  // 48px
      },
      colors: {
        ...colors,
        gray: {
          50: "var(--gray-2)",
          100: "var(--gray-3)",
          200: "var(--gray-4)",
          300: "var(--gray-5)",
          400: "var(--gray-6)",
          500: "var(--gray-7)",
          600: "var(--gray-8)",
          700: "var(--gray-9)",
          800: "var(--gray-10)",
          900: "var(--gray-11)",
          950: "var(--gray-12)",
        },
      },
    },
    colors: {
      "primary": "var(--gray-12)",
      "secondary": "var(--gray-11)",      
      "muted": "var(--gray-10)",
      "disabled": "var(--gray-9)",
      "background": "var(--gray-1)",
      "inverted": "var(--gray-inverted)",               
      "focus": {
        DEFAULT: "var(--gray-12)",          
      },        
    },  
    borderColor: {
      "primary": "var(--border)",
      "secondary": "var(--border-secondary)",            
    },
  },
  plugins: [],
}