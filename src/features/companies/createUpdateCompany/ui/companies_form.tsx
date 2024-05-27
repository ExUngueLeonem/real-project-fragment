import { useForm } from "react-hook-form";
import { HStack } from "@chakra-ui/react";

import { ICompany } from "entities/companies";

import { AcceptButton, CustomFormProvider } from "shared/ui";

//module
import { CompanyInputGroup } from "./CompanyInputGroup";
import { ICompanyInputs } from "../model/company_inputs";

interface IProps {
  company: ICompany | undefined;
  onClose: () => void;
  onSubmit: (company: ICompanyInputs) => void;
  isLoading?: boolean;
}

export function CompaniesForm(
  {
    company,
    onSubmit,
    isLoading = false,
  }: IProps) {
  const Form = useForm<ICompanyInputs>({ defaultValues: company || {} });

  return (
    <>
      <CustomFormProvider onSubmit={onSubmit} Form={Form}>
        <CompanyInputGroup isDisabled={isLoading} />
        <HStack justifyContent={"end"} w={"full"}>
          {/*<CancelButton*/}
          {/*  isDisabled={isLoading}*/}
          {/*  onClick={onClose}*/}
          {/*/>*/}
          <AcceptButton
            isLoading={isLoading}
          >
            Сохранить
          </AcceptButton>
        </HStack>
      </CustomFormProvider>
    </>
  );
}