import L from "leaflet";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { useSetMap } from "../../helpers/mapUtils";
import { IntelContextProps } from "./types";

export const IntelContext = createContext<IntelContextProps>({
    currentMap: "zoo",
    setCurrentMap: () => { },
});

export const IntelContextProvider = ({ children }) => {
    const [currentMap, setCurrentMap] = useState("zoo");
    

    useSetMap(currentMap)


    const context = {
        currentMap,
        setCurrentMap,
    }
    return <IntelContext.Provider value={context}>{children}</IntelContext.Provider>;
}