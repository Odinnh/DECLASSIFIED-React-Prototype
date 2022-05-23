import L from "leaflet";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { SetMap } from "../../helpers/mapUtils";
import { IntelContextProps } from "./types";

export const IntelContext = createContext<IntelContextProps>({
    currentMap: "zoo",
    setCurrentMap: () => { },
});

export const IntelContextProvider = ({ children }) => {
    const [currentMap, setCurrentMapState] = useState("zoo");
    const [mapInstance, setMapInstance] = useState(null);
    const map = useMapEvents({});

    const setCurrentMap = (mapId) => {
        setCurrentMapState(mapId);
        // set layers in control
        // set default layer for selected map in map instance
        SetMap(IntelContext, mapId, map)
    }

    const context = {
        currentMap,
        setCurrentMap,
    }
    return <IntelContext.Provider value={context}>{children}</IntelContext.Provider>;
}