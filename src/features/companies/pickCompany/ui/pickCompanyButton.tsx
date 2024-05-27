import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { ICompany } from "entities/companies";

//module
import { usePickCompany } from "../model/usePickCompany";

interface IProps extends ButtonProps {
  company: ICompany;
  children?: ReactNode;
}

export function PickCompanyButton(
  {
    company,
    children,
    ...buttonProps
  }: IProps) {
  const {onPickCompany, currentCompanyId} = usePickCompany();
  return (
    <Button
      variant={"outline"}
      onClick={() => onPickCompany(company)}
      isDisabled={company?.id === currentCompanyId}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}