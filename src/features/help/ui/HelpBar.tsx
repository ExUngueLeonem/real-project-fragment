import React from "react";
import { Box, Button, HStack, Icon, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

interface IProps {
  isOpen: boolean;
}

export function HelpBar({ isOpen }: IProps) {
  const version = localStorage.getItem("app_version");

  return (
    <Menu
      placement={"right-end"}
      variant={"help"}
      gutter={20}
    >
      <MenuButton
        as={Box}
        w={"calc(100% - 20px)"}
        h={"40px"}
        m={"0 10px"}
        borderRadius={"5px"}
        _hover={{
          backgroundColor: "primary_btn_active"
        }}
        transition={"all 0.2s"}
      >
        <Button
          w={"full"}
          h={"40px"}
          p={2}
          justifyContent={"start"}
          backgroundColor={"inherit"}
          fontSize={"sm"}
          display={"inline-flex"}
        >
          <Icon
            p={"6.5px"}
            h={"30px"}
            w={"30px"}
            as={HiOutlineQuestionMarkCircle}
          />

          {isOpen && "Помощь"}
        </Button>

      </MenuButton>


      <MenuList
        p={0}
        zIndex={999}
        borderRadius={"10px"}
        overflow={"hidden"}
      >
        <Box
          backgroundColor={"primary_btn"}
          w={"500px"}
          p={"30px 40px"}
        >
          <Text color={"white"} fontSize={"32px"}>
            Появились вопросы?
          </Text>

        </Box>
        <Box p={"5px 40px"}>

          <MenuItem>
            <HStack w={"full"}>
              <Text>
                Свяжитесь с нами
              </Text>
              <Spacer />
              <Link pl={"10px"} color={"a"} href={"mailto:ujfox13@gmail.com"}> ujfox13@gmail.com </Link>
            </HStack>
          </MenuItem>

          <MenuItem>
            <HStack w={"full"}>
              <Text>
                Версия приложения
              </Text>
              <Spacer />
              <Text>
                v {version}
              </Text>
            </HStack>
          </MenuItem>

        </Box>
      </MenuList>
    </Menu>
  );
}