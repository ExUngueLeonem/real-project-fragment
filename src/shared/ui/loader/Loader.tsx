import { Center, CenterProps } from "@chakra-ui/react";
import Dog from "./dog";

export const Loader = ({ ...props }: CenterProps) => {
  return (
    <Center h={"100%"} w={"100%"} {...props}>
      <Dog />
    </Center>
  );
};