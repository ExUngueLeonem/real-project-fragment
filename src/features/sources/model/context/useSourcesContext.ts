import { useContext } from "react";
import { SourcesContext } from "./sourceContext";

export function useSourcesContext() {
  const contextValue = useContext(SourcesContext);
  if (contextValue === null) throw new Error("не найден контекст useSourcesContext");
  return contextValue;
}