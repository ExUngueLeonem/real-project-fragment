import { IMember } from "entities/members";

export interface  ICreateMemberModel extends IMember{
  companyId?: string;
}