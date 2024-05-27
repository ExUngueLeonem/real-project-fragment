import { TSourceTypes } from "shared/model";

export interface ISource {
  id: string;
  name: string;
  company: string;
  type: TSourceTypes;
  broken?: boolean;
  error?: string;
  updated?: string;
  login?: string;
  password?: string;
  endpoint?: string;

  authenticateType:	TSourceAuthType,
}

export type TSourceAuthType = 	0 | 4 | 8;
