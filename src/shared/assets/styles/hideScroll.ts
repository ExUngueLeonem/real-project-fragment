import { CSSObject } from "@emotion/styled";

export const hideScrollCss = (bgString: string): CSSObject => ({
  "&::-webkit-scrollbar": {
    background: bgString || "",
  },
  "&::-webkit-scrollbar-track": {
    background: bgString || "",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#EFF8FF",
  },
  scrollbarColor: `#3377FF ${bgString}`,
  scrollbarWidth: "thin",
})