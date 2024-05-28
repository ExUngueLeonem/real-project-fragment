import { defineStyleConfig } from "@chakra-ui/react";

export const modalTheme = defineStyleConfig(
  {
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
    },
  },
)