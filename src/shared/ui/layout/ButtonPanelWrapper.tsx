import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface IProps extends BoxProps {
  children: ReactNode
}

export const ButtonPanelWrapper = ({ children }: IProps) => {
  return (
    <Box
      w={"full"}
      h={"80px"}
      p={"25px 20px"}
      borderTop={"1px solid"} borderColor={"primary_btn_outline"}
      zIndex={10}
      backgroundColor={"main_bg"}
    >
      {children}
    </Box>
  );
};