import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface IProps extends BoxProps {
  children: ReactNode;
}

export function SimpleMenuWrapper({children, ...boxProps}: IProps) {
  return (
    <Box w={"full"} p={"0 35px"} {...boxProps}>
      {children}
    </Box>
  );
}