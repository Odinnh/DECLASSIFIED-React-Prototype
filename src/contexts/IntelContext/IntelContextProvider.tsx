import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IntelContextProps } from "./types";

export const IntelContext = createContext<IntelContextProps>({
    currentMap: "",
    setCurrentMap: () => { }
});

export const IntelContextProvider = ({ children }) => {
    const [currentMap, setCurrentMapState] = useState("Hello World");

    const setCurrentMap = (mapString) => {
        setCurrentMapState(mapString);
    }


    const context = {
        currentMap,
        setCurrentMap
    }
    return <IntelContext.Provider value={context}>{children}</IntelContext.Provider>;
}