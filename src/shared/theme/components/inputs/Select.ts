import { defineStyleConfig } from "@chakra-ui/react";
import { addonStyle, inputStyle } from "./common";

export const selectTheme = defineStyleConfig(
  {
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
)