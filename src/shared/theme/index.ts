import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/Button";
import { tabsTheme } from "./components/Tabs";
import { modalTheme } from "./components/Modal";
import { formError } from "./components/FormError";
import { menuTheme } from "./components/Menu";
import { inputTheme } from "./components/inputs/Input";
import { selectTheme } from "./components/inputs/Select";
import { textTheme } from "./components/Text";
import { tableTheme } from "./components/Table";

const index = extendTheme({
  // initialColorMode: "light",
  initialColorMode: "system",
  useSystemColorMode: true,
  styles: {
    global: {
      html: {
        // fontSize: "12px", //in global css
        // color: "primary_text !important",
        boxSizing: "border-box"
      },
      body: {
        color: "primary_text",
      },
      "a.active": {
        button: {
          backgroundColor: "primary_btn_active"
        }
      }
    }
  },
  fonts: {
    body: "'Inter Variable', sans-serif",
    heading: "'Roboto Mono Variable', sans-serif",
    table: "'Roboto Mono Variable', sans-serif"
  },
  fontSizes: {
    xs: "1rem", //10
    sm: "1.2rem", //12pt - 16px
    "2sm": "1.3rem", //12pt - 16px
    md: "1.6rem", //1.6
    // lg: "1.6rem",
    xl: "14pt",
    //   "2xl": "1.5rem",
    "3xl": "3.2rem", //32
    //   "4xl": "2.25rem",
    "4xl": "2rem",
    //   "5xl": "3rem",
    //   "6xl": "3.75rem",
    //   "7xl": "4.5rem",
    //   "8xl": "6rem",
    //   "9xl": "8rem",
  },
  components: {
    Table: tableTheme,
    Heading: {
      baseStyle: {
        color: "primary_text",
        fontSize: "4xl"
      }
    },
    Text: textTheme,
    Select: selectTheme,
    Input: inputTheme,
    Link: {
      baseStyle: {
        color: "primary_btn",
        textDecoration: "underline",
      }
    },
    Icon: {
      baseStyle: { w: 5, h: 5, }
    },
    Button: buttonTheme,
    Tabs: tabsTheme,
    CloseButton: {
      defaultProps: {
        size: "lg"
      }
    },
    Modal: modalTheme,
    Form: {
      baseStyle: { container: { w: "auto" } },
    },
    FormError: formError,
    Menu: menuTheme,
  },
  // breakpoints: {
  //   sm: "320px",
  //   md: "768px",
  //   lg: "960px",
  //   xl: "1200px",
  //   "2xl": "1440px",
  //   "3xl": "1920px",
  // },
  semanticTokens: {
    colors: {
      primary_text: { default: "#1A202C", _dark: "#a5b4c4", _light: "#1A202C", },
      secondary_text: { default: "gray.900", _dark: "#a5b4c4", _light: "gray.600", },
      main_bg: { default: "#2b2b2b", _dark: "#2b2b2b", _light: "#f8f8f8", },
      primary_bg: { default: "#2b2b2b", _dark: "#2b2b2b", _light: "white", },
      primary_btn: { default: "rgba(105,105,221,0.56)", _dark: "rgba(105,105,221,0.56)", _light: "#3377FF", },
      primary_btn_outline: { default: "primary_text", _dark: "primary_text", _light: "primary_btn", },
      primary_btn_outline_border: { default: "primary_btn", _dark: "primary_btn", _light: "primary_btn", },
      outline_btn_bg: { default: "primary_btn", _dark: "primary_btn", _light: "rgba(255,255,255,0)", },
      primary_btn_text: { default: "white", _dark: "white", _light: "white", },
      primary_btn_active: { default: "#4c5052", _dark: "#4c5052", _light: "#4684FF", },
      error: { default: "#a47373", _dark: "#a47373", _light: "#FF5833", },
      error_bg: { default: "#FFE2DC", _dark: "#FFE2DC", _light: "#FFE2DC", },
      primary_th_bg: { default: "#313335", _dark: "#313335", _light: "#EFF8FF", },
      primary_th_border: { default: "#3c3f41", _dark: "#3c3f41", _light: "#DAE3EB", },
      a: { default: "#fff", _dark: "#fff", _light: "#3377FF", },
      navbar: { default: "#3c3f41", _dark: "#3c3f41", _light: "#3377FF", },
      ok: { default: "#4BDA84", _dark: "#4BDA84", _light: "#4BDA84", },
    },
  },
});

export default index;