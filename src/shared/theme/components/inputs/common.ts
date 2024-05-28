import { InputProps } from "@chakra-ui/react";

export const inputStyle: InputProps = {
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

export const addonStyle = {
  h: "30px",
  fontSize: "sm",
  backgroundColor: "primary_th_bg",
  borderColor: "primary_th_border",
  borderStyle: "solid",
  borderWidth: "1px",
}