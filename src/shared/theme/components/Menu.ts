import { defineStyleConfig } from "@chakra-ui/react";

export const menuTheme = defineStyleConfig(
  {
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
)