export {
  actions as UserActions,
  reducer as UserReducer,
} from "./model/slice/slice";
export { useUser } from "./model/hooks/useUser";
export type { IUserState } from "./model/slice/types";
export type { IUserLoginModel } from "./model/types/IUserLoginModel";
export type { IUserRegistrationModel } from "./model/types/IUserRegistrationModel";