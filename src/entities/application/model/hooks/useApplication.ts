import { useCallback } from "react";

import { ApplicationActions } from "entities/application";

import { useAppDispatch, useAppSelector } from "shared/model";

export function useApplication() {
  const d = useAppDispatch();
  const state = useAppSelector((x) => x.application);

  const lock = useCallback(() => d(ApplicationActions.setLock(true)), [d]);
  const unlock = useCallback(() => d(ApplicationActions.setLock(false)), [d]);

  const setMessage = useCallback(
    (text: string, label?: string) =>
      d(ApplicationActions.setMessage({ text, label, level: "msg" })),
    [d]
  );

  const setWarning = useCallback(
    (text: string, label?: string) =>
      d(ApplicationActions.setMessage({ text, label, level: "warn" })),
    [d]
  );

  const setError = useCallback(
    (text: string, label?: string) =>
      d(ApplicationActions.setMessage({ text, label, level: "error" })),
    [d]
  );

  const clear = useCallback(() => d(ApplicationActions.setMessage()), [d]);

  return { ...state, lock, unlock, setMessage, setWarning, setError, clear };
}
