import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface IProps extends ButtonProps {}

export const AcceptButton = (
  {
    isLoading,
    children,
    isDisabled,
    ...buttonProps
  }: IProps) => {

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isDisabled}
      variant={"primary"}
      type={"submit"}
      h={"60px"}
      w={"full"}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};