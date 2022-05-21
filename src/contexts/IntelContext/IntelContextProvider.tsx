import { createContext } from "react";
import { context, IntelContextProviderProps } from "./types";


export const IntelContext = createContext(context);

export const IntelContextProvider = ({ children }: IntelContextProviderProps) => {
    return <IntelContext.Provider value={context}>{children}</IntelContext.Provider>;
}