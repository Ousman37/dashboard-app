// // tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // This enables dark mode in Tailwind
  theme: {
    extend: {
      colors: {
        // Define your color palette for both light and dark themes
        dark: {
          900: "#1F2937", // Dark background
          700: "#4B5563", // Darker elements
          500: "#6B7280", // Medium shade for dark mode
          300: "#9CA3AF", // Lighter shade, good for text
        },
        chart: {
          primary: "#6366F1", // Primary chart color
          secondary: "#EF4444", // Secondary chart color
        },
        // You can also define a light theme palette if needed
        light: {
          900: "#F9FAFB", // Light background
          700: "#F3F4F6", // Lighter elements
          500: "#E5E7EB", // Medium shade for light mode
          300: "#D1D5DB", // Darker shade, good for text in light mode
        },
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         dark: {
//           900: "#1F2937",
//           700: "#4B5563",
//           500: "#F9FAFB",
//           300: "#9CA3AF",
//         },
//         chart: {
//           primary: "#6366F1",
//           secondary: "#EF4444",
//         },
//       },
//     },
//   },
//   plugins: [],
// };
