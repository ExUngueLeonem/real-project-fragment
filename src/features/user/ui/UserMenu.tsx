import React, { ReactNode } from "react";
import { Avatar, Button, HStack, Menu, MenuButton, MenuList, Spacer, Text, } from "@chakra-ui/react";
import { imgUser } from "shared/assets";
import { useAppSelector } from "shared/model";

interface IProps {
  children?: ReactNode;
}

export function UserMenu({ children }: IProps) {
  const user = useAppSelector((store) => store.user);

  return (
    <Menu placement={"right-end"} variant={"user"} >
      <MenuButton
        as={Button}
        cursor={"pointer"}
        w={"full"}
        backgroundColor={"inherit"}
      >
        <HStack w={"full"}>
          <Avatar size={"md"} src={user.icon ?? imgUser} />
          <Spacer />
          <Text color={"primary_text"}>

          </Text>
        </HStack>
      </MenuButton>

      <MenuList
        w={"208px"}
        zIndex={100}
      >
        {children}
      </MenuList>
    </Menu>
  );
}