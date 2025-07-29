/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Custom palette from the image
        dark: {
          900: "#1B1B1B", // Primary dark
          800: "#323232", // Secondary dark
          700: "#404040",
          600: "#525252",
          500: "#737373",
          400: "#a3a3a3",
          300: "#d4d4d4",
          200: "#e5e5e5",
          100: "#f5f5f5",
          50: "#fafafa",
        },
        cream: {
          50: "#fffbf7",
          100: "#fff4eb",
          200: "#ffe7d0", // Main cream color
          300: "#ffd4a8",
          400: "#ffb366",
          500: "#ff8f24",
          600: "#fc6e20", // Main orange
          700: "#ea580c",
          800: "#c2410c",
          900: "#9a3412",
        },
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#ff8f24",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        secondary: {
          DEFAULT: "#323232",
          foreground: "#FFE7D0",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#fef2f2",
        },
        muted: {
          DEFAULT: "#525252",
          foreground: "#a3a3a3",
        },
        accent: {
          DEFAULT: "#323232",
          foreground: "#1B1B1B",
        },
        popover: {
          DEFAULT: "#323232",
          foreground: "#FFE7D0",
        },
        card: {
          DEFAULT: "#323232",
          foreground: "#FFE7D0",
        },
        border: {
          DEFAULT: "#525252",
        },
        input: {
          DEFAULT: "#404040",
        },
        ring: {
          DEFAULT: "#fc6e20",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, #1B1B1B 0%, #323232 50%, #FC6E20 100%)",
        "card-gradient": "linear-gradient(145deg, #323232 0%, #1B1B1B 100%)",
        "orange-gradient": "linear-gradient(135deg, #FC6E20 0%, #ea580c 100%)",
        "cream-gradient": "linear-gradient(135deg, #FFE7D0 0%, #fed7aa 100%)",
      },
      boxShadow: {
        "glow-orange": "0 0 20px rgba(252, 110, 32, 0.3)",
        "glow-orange-lg": "0 0 40px rgba(252, 110, 32, 0.4)",
        "inner-glow": "inset 0 2px 4px 0 rgba(252, 110, 32, 0.1)",
        neumorphism: "8px 8px 16px #171717, -8px -8px 16px #1f1f1f",
        "neumorphism-inset": "inset 8px 8px 16px #171717, inset -8px -8px 16px #1f1f1f",
        "card-hover": "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(252, 110, 32, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.8s ease-out",
        "slide-left": "slideLeft 0.8s ease-out",
        "slide-right": "slideRight 0.8s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "rotate-slow": "rotate 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 20px rgba(252, 110, 32, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(252, 110, 32, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
        ".glass": {
          background: "rgba(50, 50, 50, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(252, 110, 32, 0.1)",
        },
        ".glass-strong": {
          background: "rgba(50, 50, 50, 0.2)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(252, 110, 32, 0.2)",
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
