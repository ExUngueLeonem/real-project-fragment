import { useAppSelector } from "shared/model";
import { useGetSourcesQuery } from "api";
import { skipToken } from "@reduxjs/toolkit/query";

export function useGetSources() {
  const company = useAppSelector(state => state.companies.current);
  return useGetSourcesQuery(company?.id ? { company: company?.id } : skipToken);
}