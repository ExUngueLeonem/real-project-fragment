export interface IApplicationState {
  isLocked?: boolean;
  message?: IMessage;
}

export interface IMessage {
  label?: string;
  text?: string;
  level?: "msg" | "warn" | "error";
}
