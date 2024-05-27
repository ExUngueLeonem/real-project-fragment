import { createContext } from "react";
import { ISourcesContext } from "./ISourcesContext";

export const SourcesContext = createContext<ISourcesContext | null>(null);