export interface ITokenResponse {
  access: string;
}

export interface IEmailConfirmationModel {
  email: string;
  token: string;
}

export interface IRestoreConfirmationModel {
  email: string;
  token: string;
  password: string;
}