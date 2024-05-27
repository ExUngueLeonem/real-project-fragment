import { TSourceTypes } from "shared/model";

export interface ISourceOption {
  value: TSourceTypes;
  label?: string;
  disabled?: boolean;
}