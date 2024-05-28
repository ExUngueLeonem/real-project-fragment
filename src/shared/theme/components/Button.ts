import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig(
  {
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
  }
)