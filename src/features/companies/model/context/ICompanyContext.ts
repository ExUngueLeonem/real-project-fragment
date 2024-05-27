import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ICompany } from "entities/companies";


export interface ICompanyContext {
  selectedCompany?: ICompany,
  setSelectedCompany?:  React.Dispatch<React.SetStateAction<ICompany | undefined>>;
  memberModal?: ReturnType<typeof useDisclosure>,
  companyModal?: ReturnType<typeof useDisclosure>,
  onOpenCompanyForm?: (company?: ICompany) => void,
}