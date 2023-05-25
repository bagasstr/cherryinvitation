export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      WorkSans: "'Work Sans', sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "20px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#DBEDFF",
        secondary: "#1189f7",
        100: "#FFF9F8",
        200: "#057AE7",
        300: "#212529",
        400: "#726AE3",
        dark: "#292830",
        light: "#BDBDBD",
        accent: "#FF7235",
        accentHover: "#e05216",
        grey: "#F5F5F5",
      },
      backgroundImage: {
        banner: "url('/src/assets/image/banner.jpg)",
      },
    },
  },
  plugins: [],
};
