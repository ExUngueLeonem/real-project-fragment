import { useAddCompanyMutation, useUpdateCompanyMutation } from "api";
import { ICompany } from "entities/companies";

export function useCreateUpdateCompany() {
  const [addCompany, addCompanyHelpers] = useAddCompanyMutation();
  const [updateCompany, updateCompanyHelpers] = useUpdateCompanyMutation();
  const isLoading = addCompanyHelpers.isLoading || updateCompanyHelpers.isLoading;

  const createUpdateCompany = async (company: ICompany) => {
    company.tin = " ";
    try {
      return company.id ? await updateCompany(company).unwrap() : await addCompany(company).unwrap();
    } catch (e) {
      //ошибка обрабатывается в api
      console.error("onCreateUpdateCompany", e)
    }
  }

  return {
    isLoading,
    createUpdateCompany
  }
}