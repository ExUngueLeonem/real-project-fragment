import { IUserLoginModel } from "./IUserLoginModel";

export interface IUserRegistrationModel extends IUserLoginModel {
  name?: string;
  confirmation?: string;
}