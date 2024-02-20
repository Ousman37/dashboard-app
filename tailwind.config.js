// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#1F2937", 
          700: "#4B5563", 
          500: "#F9FAFB",
          300: "#9CA3AF", 
        },
        chart: {
          primary: "#6366F1", 
          secondary: "#EF4444", 
        },
      },
    },
  },
  plugins: [],
};
