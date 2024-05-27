import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface IProps extends BoxProps{
  children: ReactNode
}

export function SimpleWrapper({ children, ...boxProps }: IProps) {
  return (
    <Box p={"20px"} {...boxProps}>
      {children}
    </Box>
  );
}