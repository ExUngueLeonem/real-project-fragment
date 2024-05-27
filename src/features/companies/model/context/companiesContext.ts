import { createContext } from "react";
import { ICompanyContext } from "./ICompanyContext";

export const CompaniesContext = createContext<ICompanyContext | null>(null);