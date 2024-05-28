import { defineStyleConfig } from "@chakra-ui/react";

export const tabsTheme = defineStyleConfig(
  {
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
  }
)