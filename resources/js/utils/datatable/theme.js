import { createTheme } from "react-data-table-component";

createTheme(
  "dark",
  {
    text: {
      primary: "#d5d7e0",
      secondary: "#d5d7e0",
    },
    background: {
      default: "#0C111B",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#1A2437",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.2)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

createTheme(
  "light",
  {
    text: {
      primary: "#000",
      secondary: "#000",
    },
    background: {
      default: "#fff",
    },
    context: {
      background: "#fff",
      text: "#FFFFFF",
    },
    divider: {
      default: "#ddd",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.2)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "light"
);
