import { defineStyleConfig } from "@chakra-ui/react";

export const textTheme = defineStyleConfig(
  {
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
)