import { ReactNode } from "react";
import { Center } from "@chakra-ui/react";

export function TableBottomPanel({ children }: { children: ReactNode }) {
  return (
    <Center
      minH={"60px"}
      w={"full"}
      backgroundColor={"primary_bg"}
    >
      {children}
    </Center>
  );
}