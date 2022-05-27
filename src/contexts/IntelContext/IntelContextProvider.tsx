import { createContext, useEffect, useState } from "react";
import { MapGroupings, MapMenuItem } from "../../components/MapControls/types";
import { MapDetails } from "../../data/mapDetails";
import { useSetMap } from "../../helpers/mapUtils";
import { IntelContextProps } from "./types";

export const IntelContext = createContext<IntelContextProps>({
    currentMap: MapDetails.dieMaschine,
    setCurrentMap: () => { },
    currentMapGroup: MapGroupings[0],
    setCurrentMapGroup: () => { },
    intelAudioMarkers: [],
    setIntelAudioMarkers: () => { },
    intelArtifactMarkers: [],
    setIntelArtifactMarkers: () => { },
});

export const IntelContextProvider = ({ children }) => {
    const [currentMap, setCurrentMap] = useState(MapDetails.dieMaschine);
    const [currentMapGroup, setCurrentMapGroup] = useState<MapMenuItem>(MapGroupings[0]);
    const [intelArtifactMarkers, setIntelArtifactMarkers] = useState<JSX.Element[]>([]);
    const [intelAudioMarkers, setIntelAudioMarkers] = useState<JSX.Element[]>([]);

    useSetMap(currentMap)

    useEffect(() => {
        setIntelArtifactMarkers(currentMap.mapMarkers!)
        MapGroupings.forEach(mapGroup => {
            if (mapGroup.mapLayers.includes(currentMap)) {
                console.log("FOUND GROUP: ", mapGroup);

                setCurrentMapGroup(mapGroup);
            }
        });
    }, [currentMap])



    const context = {
        currentMap,
        setCurrentMap,
        currentMapGroup,
        setCurrentMapGroup,
        intelAudioMarkers,
        setIntelAudioMarkers,
        intelArtifactMarkers,
        setIntelArtifactMarkers
    }
    return <IntelContext.Provider value={context}>{children}</IntelContext.Provider>;
}