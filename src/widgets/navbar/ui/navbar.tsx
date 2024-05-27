import React from "react";
import { Box, Center, Fade, Icon, Image, MenuDivider, MenuItem, Spacer, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { useAppSelector } from "shared/model";
import { SimpleMenuWrapper } from "shared/ui";
import { CompanyIcon, imgLogoSmall, imgLogoTitle, SourceIcon } from "shared/assets";
import { HelpBar } from "features/help";
import { UserMenu } from "features/user";
import { SwitchTheme } from "features/theme";
import { useLogoutContext } from "features/logout";

//module
import NavButton from "./NavButton";
import { MdLogout } from "react-icons/md";

export function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const user = useAppSelector((store) => store.user);
  const { logoutModal } = useLogoutContext();
  return (
    <VStack
      bg={"navbar"}
      w={isOpen ? "230px" : "60px"}
      minW={isOpen ? "230px" : "60px"}
      transition={"all 0.3s"}
    >

      <Box w={"full"} position={"relative"}>
        <Box
          w={isOpen ? "230px" : "60px"}
          h={"70px"}
          pl={"1px"}
        >
          <Center justifyContent={"start"} h={"full"} pl={"14px"}>
            <Image src={imgLogoSmall} h={"40px"} />
            <Fade in={isOpen}>
              <Image src={imgLogoTitle} h={"40px"} pl={"10px"} />
            </Fade>
          </Center>

        </Box>
        <Box w={"full"} borderBottom={"1px solid white"}></Box>
        <Center
          onClick={onToggle}

          backgroundColor={"white"}
          borderRadius={"100%"}
          border={"1px solid"}
          borderColor={"primary_btn"}

          position={"absolute"}
          bottom={0}
          right={0}
          transform={"translate(50%, 50%)"}
          w={6}
          h={6}
          cursor={"pointer"}
          zIndex={15}
        >
          {isOpen ? <ChevronLeftIcon color={"primary_btn"} /> : <ChevronRightIcon color={"primary_btn"} />}
          <Box p={5} position={"absolute"}></Box>
        </Center>
      </Box>

      <VStack
        w={"full"}
        p={"5px 0"}
        flexGrow={2}
        gap={3}

        alignItems={"start"}
      >
        {/*<NavButton isOpen={isOpen} label={"Накладные"} to={"/documents/docList"} icon={DocumentsIcon} iconProps={{ fill: "white" }} />*/}
        {/*<NavButton isOpen={isOpen} label={"Чеки"} to={"/documents/chequesList"} icon={ChequesIcon} iconProps={{ fill: "white" }} />*/}
        <Spacer />
        <NavButton isOpen={isOpen} label={"Предприятия"} to={"/companies"} icon={CompanyIcon} iconProps={{ fill: "white", width: "14px" }} />
        <NavButton isOpen={isOpen} label={"Источники данных"} to={"/sources"} icon={SourceIcon} iconProps={{ fill: "white", width: "14px" }} />

        <HelpBar isOpen={isOpen} />
      </VStack>
      <Center
        h={"80px"} w={"full"}
        gap={"5px"}
        alignItems={"center"} borderTop={"1px solid white"}
      >

        {user.isLogged &&
          <UserMenu>
            <MenuItem>
              <SwitchTheme />
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <SimpleMenuWrapper onClick={logoutModal.onOpen}>
                <Center>
                  <Text>
                    Выйти
                  </Text>
                  <Spacer />
                  <Icon as={MdLogout} w={"24px"} h={"24px"} />
                </Center>
              </SimpleMenuWrapper>
            </MenuItem>
          </UserMenu>
        }

      </Center>
    </VStack>
  );
}
