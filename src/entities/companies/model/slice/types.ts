import { ICompany } from "entities/companies";

export interface ICompaniesState {
  current?: ICompany;
  list: ICompany[];
}