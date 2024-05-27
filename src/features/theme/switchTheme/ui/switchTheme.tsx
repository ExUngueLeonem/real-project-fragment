import React, { useRef } from "react";
import { Box, Center, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { SimpleMenuWrapper } from "shared/ui";

export const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ref = useRef<HTMLInputElement>(null);
  const onClick = (e: React.MouseEvent) => {
    const target = ref?.current;
    target?.click();
    e.stopPropagation();
  }

  const onToggleColorMode = (e: React.ChangeEvent) => {
    toggleColorMode();
    e.stopPropagation();
  }

  return (
    <>
      <Box
        w={"100%"} h={"50px"}
        position={"absolute"}
        onClick={onClick}
      >
      </Box>
      <SimpleMenuWrapper
        onClick={(e) => e.stopPropagation()}
      >
        <Center justifyContent={"space-between"}>
          <Icon as={FiSun} w={"24px"} h={"24px"} />
          <Switch
            isChecked={colorMode !== "light"}
            onChange={(e) => onToggleColorMode(e)}
            size={"lg"}
            ref={ref}
          />
          <Icon as={FiMoon} w={"24px"} h={"24px"} />
        </Center>
      </SimpleMenuWrapper>
    </>
  );
};