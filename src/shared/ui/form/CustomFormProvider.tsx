import React, { ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { BoxProps, VStack } from "@chakra-ui/react";

interface IProps extends BoxProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Form: UseFormReturn<any, any, undefined>
}

export const CustomFormProvider = ({ children, onSubmit, Form, ...boxProps }: IProps) => {
  const { handleSubmit } = Form;
  return (
    <FormProvider {...Form}>
      <form style={{ display: "contents" }} onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems={"start"} gap={"20px"} {...boxProps}>
          {children}
        </VStack>
      </form>
    </FormProvider>
  );
};