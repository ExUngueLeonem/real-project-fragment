import { extendTheme, InputProps } from "@chakra-ui/react";

const inputStyle: InputProps = {
  width: "100%",
  fontSize: "sm",
  h: "30px",
  display: "inline-block",
  border: "1px solid",
  boxSizing: "border-box",
  borderRadius: "5px",
  backgroundColor: "primary_bg",
  borderColor: "primary_th_border",
  cursor: "pointer",
  _focusVisible: {
    bg: "transparent",
    // mode is an alternative to props.colorMode === x ? y
    // borderColor: mode("blue", "purple")(props)
    borderColor: "primary_btn"
  }
}

const addonStyle = {
  h: "30px",
  fontSize: "sm",
  backgroundColor: "primary_th_bg",
  borderColor: "primary_th_border",
  borderStyle: "solid",
  borderWidth: "1px",
}

const tableStyle = {
  table: {
    // //base
    fontFamily: "'Roboto Mono Variable', sans-serif",
    fontSize: "sm",
    backgroundColor: "primary_bg",

    //border
    borderCollapse: "separate",
    borderSpacing: "0",
  },
  thead: {
    //base
    fontFamily: "'Roboto Mono Variable', sans-serif",
    fontSize: "sm",
    backgroundColor: "main_bg",

    //border
    borderRadius: "0 0 5px 5px",
    overflow: "hidden",
    tr: {
      _first: {
        th: {
          overflow: "hidden",
          _after: {
            content: "''",
            position: "absolute", top: 0, left: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(0 0, 0% 100%, 100% 0)",
          },
          _before: {
            content: "''",
            position: "absolute", top: 0, right: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(0 0, 100% 95%, 100% 0)",
          },
          _first: {
            borderTopLeftRadius: "5px",
          },
          _last: {
            borderTopRightRadius: "5px",
          },
        }
      },

    },

  },
  tfoot: {
    backgroundColor: "main_bg",
    tr: {
      _last: {
        th: {
          overflow: "hidden",
          _after: {
            content: "''",
            position: "absolute", bottom: 0, left: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          },
          _before: {
            content: "''",
            position: "absolute", bottom: 0, right: 0,
            w: "3px", h: "3px",
            backgroundColor: "main_bg",
            zIndex: -1,
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          },
          _first: {
            borderBottomLeftRadius: "5px",
            borderBottom: "1px",
            borderColor: "inherit",
          },
          _last: {
            borderBottomRightRadius: "5px",
            borderBottom: "1px",
            borderColor: "inherit",
          },
        }
      },
    },
  },
  tr: {
    //base
    fontWeight: "normal",
    transition: "all 0.1s",
  },
  th: {
    //base
    p: "13px 10px 13px 10px",
    minH: "40px",
    cursor: "pointer",
    backgroundColor: "primary_th_bg",
    fontWeight: "normal",
    textTransform: "none",

    //border
    borderTop: "1px",
    borderRight: "1px",
    borderColor: "inherit",
    _first: {
      borderLeft: "1px",
      borderColor: "inherit",
    },
  },
  td: {
    //base
    p: "15px 10px 15px 10px",
    fontWeight: "bold",

    wordWrap: "break-word",
    whiteSpace: "normal",

    //border
    borderTop: "1px",
    borderRight: "1px",
    borderColor: "primary_th_border",
    _first: {
      borderLeft: "1px",
      borderColor: "inherit",
    },
  }
}

const theme = extendTheme({
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
    Table: {
      variants: {
        primary: {
          ...tableStyle
        },
        "primary_nonRoundedTop": {
          ...tableStyle,
          table: {
            ...tableStyle.table,
            borderRadius: "0"
          },
          th: {
            _first: {
              borderRadius: "0"
            },
          },
        }
      },
      defaultProps: {
        variant: "primary"
      }
    },
    Heading: {
      baseStyle: {
        color: "primary_text",
        fontSize: "4xl"
      }
    },
    Text: {
      baseStyle: {
        color: "primary_text",
        lineHeight: 1,
      },
      variants: {
        heading: {
          color: "primary_text",
          fontSize: "3xl",
          fontWeight: 500,
          lineHeight: 1,
        },
        form_h2: {
          color: "primary_text",
          lineHeight: 0.8,
        },
        form_input_label: {
          color: "secondary_text",
          fontSize: "xs",
          lineHeight: 1
        },
        solid: {
          bg: "purple.500",
          color: "primary_text",
        },
        descriptor: {
          color: "primary_text",
          fontSize: "md",
        }
      },
    },
    Select: {
      variants: {
        primary: {
          field: inputStyle,
          addon: addonStyle,
        },
        md: {
          field: {
            ...inputStyle,
            h: "48px",
          },
          addon: {
            ...addonStyle,
            h: "48px",
          },
        }
      },
      defaultProps: {
        variant: "primary"
      }
    },
    Input: {
      variants: {
        primary: {
          field: inputStyle,
          addon: addonStyle,
        },
        md: {
          field: {
            ...inputStyle,
            h: "48px",
          },
          addon: {
            ...addonStyle,
            h: "48px",
          },
        }
      },
      defaultProps: {
        variant: "primary"
      },
    },
    Link: {
      baseStyle: {
        color: "primary_btn",
        textDecoration: "underline",
      }
    },
    Icon: {
      baseStyle: { w: 5, h: 5, }
    },
    Button: {
      variants: {
        primary: {
          fontSize: "sm",
          backgroundColor: "primary_btn",
          color: "white",
          fontWeight: "normal",
          h: "30px",
          _hover: {
            _disabled: {
              backgroundColor: "primary_btn",
            },
            _loading: {
              backgroundColor: "primary_btn",
            }
          }
        },
        secondary: {
          fontSize: "sm",
          backgroundColor: "transparent",
          color: "inherit",
          fontWeight: "normal",
          h: "30px",
        },
        large: {
          w: "full",
          fontSize: "md",
          backgroundColor: "primary_btn",
          color: "white",
          fontWeight: "normal",
          h: "60px",
        },
        outline: {
          fontSize: "sm",
          color: "primary_btn_outline",
          borderWidth: "1px",
          borderColor: "primary_btn_outline_border",
          fontWeight: "normal",
          backgroundColor: "outline_btn_bg",
          _hover: {
            backgroundColor: "primary_btn",
            color: "white",
          },
          _disabled: {
            _hover: {
              color: "primary_btn",
            }
          }
        },
        outline_error: {
          fontSize: "sm",
          borderWidth: "1px",
          fontWeight: "normal",
          borderColor: "error",
          color: "error",
          _hover: {
            backgroundColor: "error",
            color: "white",
          },
          _disabled: {
            _hover: {
              color: "error",
            }
          }
        },
        social: {
          w: "30px",
          h: "30px",
          color: "primary_btn",
          opacity: 0.4,
          // backgroundColor: "red",
          _hover: {
            opacity: 1,
          }
        },
        a: {
          p: 0,
          fontSize: "sm",
          fontWeight: "normal",
          backgroundColor: "rgba(255,255,255,0)",
          color: "a",
          _hover: {
            textDecoration: "underline",
          }
        }
      },
      defaultProps: {
        variant: "primary"
      },
    },
    Tabs: {
      variants: {
        primary: {
          tablist: {},
          tab: {
            _hover: {
              backgroundColor: "primary_th_bg",
            },
            _selected: {
              backgroundColor: "primary_btn",
              color: "white",
            },
            fontSize: "sm",
            color: "primary_btn_outline",
          }
        },
        form: {
          root: {
            w: "full",
          },
          tabpanel: {
            p: 0,
          },
          tablist: {},
          tab: {
            _hover: {
              borderBottom: "2px solid",
              borderColor: "primary_th_bg",
            },
            _selected: {
              borderBottom: "2px solid",
              borderColor: "primary_btn",
            },
            borderBottom: "2px solid",
            borderColor: "gray.200",
            fontSize: "sm",
          }
        },
      },
      defaultProps: {
        variant: "primary"
      },
    },
    CloseButton: {
      defaultProps: {
        size: "lg"
      }
    },
    Modal: {
      // A: header
      // B: overlay
      // C: dialogContainer
      // D: dialog
      // E: closeButton
      // F: body
      // G: footer

      variants: {
        default: {
          header: {
            fontSize: "32px",
            lineHeight: 1,
            p: "0 0 40px 0",
          },
          dialog: {
            p: "40px",
            minW: "480px",
            backgroundColor: "primary_bg",
          },
          footer: {
            p: 0,
          },
          body: {
            p: 0,
          },
          closeButton: {
            position: "fixed",
            right: "20px",
            top: "20px",
            color: "white",
          }
        },
        notification: {
          header: {
            fontSize: "32px",
            lineHeight: 1,
            p: "30px 40px",

            backgroundColor: "primary_btn",
            color: "primary_btn_text",
          },
          dialog: {
            borderRadius: "5px",
            overflow: "hidden",
            minW: "480px",
          },
          footer: {
            p: "0px 40px 30px 40px",
          },
          body: {
            fontSize: "md",
            p: "30px 40px",
          },
          closeButton: {
            position: "fixed",
            right: "20px",
            top: "20px",
            color: "white",
          }
        },
      },
      defaultProps: {
        variant: "default",
        isCentered: true,
      },
    },
    Form: {
      baseStyle: { container: { w: "auto" } },
    },
    FormError: {
      baseStyle: { variant: "bubble", },
      variants: {
        bubble: {
          text: {
            backgroundColor: "error_bg",
            color: "error",
            p: 5,
            position: "absolute",
            right: -10,
            top: 3.5,
            m: 0,
            border: "1px solid #FF5833",
            borderRadius: "5px",
            transform: "translateX(100%)",
            _after: {
              content: "''",
              w: "20px",
              h: "20px",
              transform: "rotate(45deg) translate(-20%, -50%)",
              position: "absolute",
              left: "-15.5px",
              top: "50%",
              backgroundColor: "error_bg",
              borderLeft: "1px solid #FF5833",
              borderBottom: "1px solid #FF5833",
              borderRadius: "0px 0px 0px 5px",
            },
            _before: {
              content: "'× '",
              fontSize: "2rem",
              lineHeight: 0,
              display: "block",
              mb: "0.23rem",
              mr: "0.2rem"
            }
          },
        }
      },
      defaultProps: {
        variant: "bubble"
      }
    },
    Menu: {
      variants: {
        user: {
          list: {
            p: "5px",
          },
          item: {
            w: "full",
            minH: "40px",
            p: 0,
            borderRadius: "5px",
            fontSize: "16px",
          },
          divider: {
            m: "0 40px"
          }
        },
        help: {
          list: {
            p: 0,
            borderRadius: "10px",
            overflow: "hidden",
          },
          item: {
            pl: 0,
            pr: 0,
            minH: "50px",
            fontSize: "16px",
            fontWeight: 500,
            cursor: "default",
            _hover: {
              backgroundColor: "inherit",
            },
            _focus: {
              backgroundColor: "inherit",
            },
          },
          divider: {
            m: 0
          },
        },
      },
    }
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

export default theme;