import { ISource } from "entities/sources";

export interface ISourceInputs extends ISource {
  protocol?: string | null;
  hostname?: string | null;
  port?: string | null;
  pathname?: string | null;

  EDS_thumbprint?: string
}