import { defineStyleConfig } from "@chakra-ui/react";

export const formError = defineStyleConfig(
  {
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
)