export type LoginMode = "login" | "register" | "restore";

export interface IModalProps {
  onModeChange?: (e: LoginMode) => void;
}