import { useContext } from "react";
import { CompaniesContext } from "./companiesContext";

export function useCompaniesContext() {
  const contextValue = useContext(CompaniesContext);
  if (contextValue === null) throw new Error("не найден контекст useCompaniesContext");
  return contextValue;
}