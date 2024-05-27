import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "shared/model";

import { CompaniesActions } from "entities/companies";
import { SourcesActions } from "entities/sources";
import { UserActions } from "entities/user";

import { api } from "api";

export function useUser() {
  const d = useAppDispatch();
  const current = useAppSelector((x) => x.user);

  const logout = useCallback(() => {
    d(UserActions.logout());
    d(CompaniesActions.reset());
    d(SourcesActions.reset());
    d(api.util.resetApiState());
  }, [d]);

  return { current, logout };
}
