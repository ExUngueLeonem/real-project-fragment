import React from "react";
import { Center, Text } from "@chakra-ui/react";

export const ItemNotFound = ({message}: {message: string}) => {
  return (
    <Center w={"full"} h={"full"}>
      <Text fontSize={"md"}>
        {message}
      </Text>
    </Center>
  );
};