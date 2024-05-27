import { useCallback } from "react";
import { api } from "api";
import { useAppDispatch, useAppSelector } from "shared/model";
import { CompaniesActions, ICompany } from "entities/companies";
import { SourcesActions } from "entities/sources";

export function usePickCompany() {
  const dispatch = useAppDispatch();
  const currentCompanyId = useAppSelector(state => state?.companies?.current?.id);

  const onPickCompany = useCallback((company: ICompany) => {
    dispatch(CompaniesActions.setCurrent(company));
    dispatch(api.util.resetApiState());
    dispatch(SourcesActions.reset());
  }, [dispatch]);

  return {
    onPickCompany,
    currentCompanyId,
  }
}