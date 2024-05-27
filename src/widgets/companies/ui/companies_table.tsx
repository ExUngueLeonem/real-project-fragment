import { ReactNode } from "react";
import { useGetCompaniesQuery } from "api";
import { CTable, WithLoader } from "shared/ui";
import { CompanyModal, useCompaniesContext } from "features/companies";

//module
import useCompaniesTable from "../model/useCompaniesTable";

interface IProps {
  footerAddon?: ReactNode;
}

export function CompaniesTable(
  {
    footerAddon
  }: IProps) {
  const { isLoading } = useGetCompaniesQuery();
  const { table } = useCompaniesTable();
  const { selectedCompany, companyModal } = useCompaniesContext();
  return (
    <>
      <WithLoader isLoading={isLoading}>
        <CTable
          table={table}
          isFooterDisable={true}
          footerAddon={footerAddon}
        />
      </WithLoader>
      {companyModal &&
        <CompanyModal
          company={selectedCompany}
          isOpen={companyModal.isOpen}
          onClose={companyModal.onClose}
        />
      }
    </>
  );
}