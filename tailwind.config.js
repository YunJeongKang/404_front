const defaultColors = require("tailwindcss/colors");
const defaultDropShadows = require("tailwindcss/defaultTheme").dropShadow;
const defaultBoxShadows = require("tailwindcss/defaultTheme").boxShadow;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eland: ["ELAND_Choice_M"],
      },
      colors: {
        main: "#FCF7FF",
        "main-contra": "#e4ffdb",
        //gradient
        main_grad:
          "linear-gradient(185.11deg, #EBD3F8 2.45%, rgba(249, 236, 255, 0) 97.16%);",
        "sub-contra": "#FFFFFF",
        // BASIC
        basic: "#F0F0F0",
        "basic-active": "#F0F0F0",
        "basic-contra": "#000000",
        // DEFAULT
        default: "#d4d4d4",
        "default-active": "#e6e6e6",
        "default-contra": "#131313",
        // PRIMARY
        primary: "#1266F1",
        "primary-active": "#0c56d0",
        "primary-contra": "#FFFFFF",
        // SECONDARY
        secondary: "#B23CFD",
        "secondary-active": "#a316fd",
        "secondary-contra": "#FFFFFF",
        // SUCCESS
        success: "#00B74A",
        "success-active": "#00913b",
        "success-contra": "#FFFFFF",
        // INFO
        info: "#39C0ED",
        "info-active": "#16b5ea",
        "info-contra": "#ffffff",
        // WARNING
        warning: "#FFA900",
        "warning-active": "#d99000",
        "warning-contra": "#ffffff",
        // DANGER
        danger: "#F93154",
        "danger-active": "#f80c35",
        "danger-contra": "#ffffff",
        // LINK
        link: "transparent",
        "link-active": "transparent",
        "link-contra": "#39C0ED",
        // LIGHT
        light: "#FBFBFB",
        "light-active": "#e6e6e6",
        "light-contra": "#262626",
        // DARK
        dark: "#262626",
        "dark-active": "#131313",
        "dark-contra": "#FBFBFB",
        // light sky
        userSetting: "#E8F3FF",
        //Kakao btn
        kakao: "#ffff00",
        facebook: "#3D5AFE",
        ...defaultColors,
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // smaller
      jm: { max: "424px" },
      xs: { max: "299px" },
    },
    boxShadow: {
      "main-shadow": "inset -2px 0px 6px rgba(244, 20, 222, 0.12);",
      ...defaultBoxShadows,
    },
    dropShadow: {
      "t-sm": "0 -1px 1px rgb(0 0 0 / 0.05)",
      t: ["0 -1px 2px rgb(0 0 0 / 0.1)", "0 -1px 1px rgb(0 0 0 / 0.06)"],
      "t-md": ["0 -4px 3px rgb(0 0 0 / 0.07)", "0 -2px 2px rgb(0 0 0 / 0.06)"],
      "t-lg": ["0 -10px 8px rgb(0 0 0 / 0.04)", "0 -4px 3px rgb(0 0 0 / 0.1)"],
      "t-xl": [
        "0 -20px 13px rgb(0 0 0 / 0.03)",
        "0 -8px 5px rgb(0 0 0 / 0.08)",
      ],
      "t-2xl": "0 -25px 25px rgb(0 0 0 / 0.15)",
      ...defaultDropShadows,
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("checked-bg", "& input:checked + *");
      addVariant("checked-dot", "& input:checked + * + *");
      addVariant("unchecked-bg", "& input + *");
      addVariant("unchecked-dot", "& input + * + *");

      // === Table Children Selectors ===
      // Table section
      addVariant("head", "& thead");
      addVariant("body", "& tbody");
      // Rows
      addVariant("all-tr", "& tr");
      addVariant("head-tr", "& thead tr");
      addVariant("body-tr", "& tbody tr");
      // Cells
      addVariant("all-td", ["& th", "& td"]);
      addVariant("all-td-only", "& td");
      addVariant("head-th", "& thead th");
      addVariant("head-td", "& thead td");
      addVariant("head-td-all", ["& thead th", "& thead td"]);
      addVariant("body-th", "& tbody th");
      addVariant("body-td", "& tbody td");
      addVariant("body-td-all", ["& tbody th", "& tbody td"]);
    },
  ],
};
