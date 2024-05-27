import { Center, Heading, Image, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { img404 } from "shared/assets"

export function NotFoundPage() {
  return (
    <Center h={"full"}>
      <VStack>
        <Heading>Страница не найдена</Heading>
        <Image h={"2xl"} src={img404} />
        <NavLink to={"/"}>На главную</NavLink>
      </VStack>
    </Center>
  );
}