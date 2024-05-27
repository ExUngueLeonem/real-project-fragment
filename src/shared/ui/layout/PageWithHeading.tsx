import { ReactNode } from "react";
import { Box, Grid, HStack, Spacer, Text } from "@chakra-ui/react";

import { SimpleWrapper } from "shared/ui";

interface IProps {
  children: ReactNode;
  label: string;
  rightElement?: ReactNode;
}

export function PageWithHeading({ children, label, rightElement = <></> }: IProps) {
  return (
    <>
      <Grid
       gridTemplateRows={"auto 1fr"}
       h={"full"}
      >
        <SimpleWrapper w={"full"} pb={"15px"} zIndex={10} backgroundColor={"main_bg"}>
          <HStack>
            <Text variant={"heading"} lineHeight={1}>{label}</Text>
            <Spacer />
            {rightElement}
          </HStack>
        </SimpleWrapper>

        <Box overflow={"auto"}>
          {children}
        </Box>

      </Grid>
    </>
  );
}