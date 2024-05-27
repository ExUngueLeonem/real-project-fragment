export {
  actions as ApplicationActions,
  reducer as ApplicationReducer,
} from "./model/slice";
export type { IMessage, IApplicationState } from "./model/types";
export { useApplication } from "./model/hooks/useApplication";