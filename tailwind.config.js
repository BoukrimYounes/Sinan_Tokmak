/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "24px",
        },
      },
      colors: {
        "brand-1": "#12F7D6",
        "brand-2": "#98FAEC",
        "black-bg": "#1A1E23",
        "gray-bg": "#292F36",
        "gray-1": "#43454D",
        html: "#E54F26",
        css: "#0C73B8",
        js: "#E7A020",
        react: "#28A9E0",
      },
      backgroundImage: {
        skill: "url('./dist/img/skills.png')",
        dog: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWYgHl_I3Zb6Cru7KafbAy98_5u-U-kcdFw&usqp=CAU')",
      },
    },
    fontFamily: {
      Ubuntu: "Ubuntu, sans-serif",
      IBMPlexMono: "IBM Plex Mono, monospace",
    },
  },
  plugins: [],
};
