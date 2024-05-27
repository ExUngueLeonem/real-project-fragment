import { ReactNode, useCallback, useState, } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ICompany } from "entities/companies";
import { CompaniesContext } from "./companiesContext";

interface IProps {
  children: ReactNode;
}

export function CompaniesProvider({ children }: & IProps) {
  const [selectedCompany, setSelectedCompany] = useState<ICompany>();

  const companyModal = useDisclosure();

  const onOpenCompanyForm = useCallback((company?: ICompany) => {
    //если  company === undefined - форма создает новый company
    companyModal.onOpen();
    setSelectedCompany(company);
  }, [companyModal]);

  return (
    <CompaniesContext.Provider
      {...{
        value: {
          selectedCompany,
          setSelectedCompany,
          companyModal,
          onOpenCompanyForm,
        },
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}