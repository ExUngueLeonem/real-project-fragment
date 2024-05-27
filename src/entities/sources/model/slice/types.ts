import { ICheckedDepartmentsDict } from "../types/checkedDepartmentsDict";

export interface ISourcesState {
  current: string;
  checkedDepartments: ICheckedDepartmentsDict;
}

export interface IProperty {
  type: number,
  value: string,
  target: string
}