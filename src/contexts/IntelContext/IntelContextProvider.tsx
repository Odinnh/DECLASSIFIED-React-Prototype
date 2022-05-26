import { createContext, useEffect, useState } from "react";
import { MapDetails } from "../../data/mapDetails";
import { useSetMap } from "../../helpers/mapUtils";
import { IntelContextProps } from "./types";

export const IntelContext = createContext<IntelContextProps>({
    currentMap: MapDetails.dieMaschine,
    setCurrentMap: () => { },
    intelAudioMarkers: [],
    setIntelAudioMarkers: () => { },
    intelArtifactMarkers: [],
    setIntelArtifactMarkers: () => { },
});

export const IntelContextProvider = ({ children }) => {
    const [currentMap, setCurrentMap] = useState(MapDetails.dieMaschine);
    const [intelArtifactMarkers, setIntelArtifactMarkers] = useState<JSX.Element[]>([]);
    const [intelAudioMarkers, setIntelAudioMarkers] = useState<JSX.Element[]>([]);

    useSetMap(currentMap)

    useEffect(() => {
        setIntelArtifactMarkers(currentMap.mapMarkers!)
    }, [currentMap])



    const context = {
        currentMap,
        setCurrentMap,
        intelAudioMarkers,
        setIntelAudioMarkers,
        intelArtifactMarkers,
        setIntelArtifactMarkers
    }
    return <IntelContext.Provider value={context}>{children}</IntelContext.Provider>;
}