import { ReactNode } from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { imgOutlineLogo } from "shared/assets";

export function LogoWrapper({ children }: { children: ReactNode }) {
  return (
    <Center h={"full"} backgroundColor={"main_bg"}>
      <Box position={"fixed"} left={16} top={16}>
        <Image src={imgOutlineLogo} />
      </Box>
      {children}
      <Box position={"fixed"} left={16} bottom={16}>
        <Text>
          © SwapDog 2024
        </Text>
      </Box>
    </Center>
  );
}