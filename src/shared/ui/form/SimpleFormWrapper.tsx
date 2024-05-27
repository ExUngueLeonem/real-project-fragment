import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export function SimpleFormWrapper({children}: {children: ReactNode}) {
  return (
    <Box backgroundColor={"primary_bg"} w={"480px"} minH={"10vw"} borderRadius={2} p={"40px"}>
      {children}
    </Box>
  );
}