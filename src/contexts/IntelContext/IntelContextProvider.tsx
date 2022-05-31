import { createContext, useEffect, useState } from "react";
import { useMapEvent } from "react-leaflet";
import { MapGroupings, MapMenuItem } from "../../components/MapControls/types";
import { IntelType } from "../../data/intel";
import { MapDetails } from "../../data/mapDetails";
import { useSetMap } from "../../helpers/mapUtils";
import { MapItem } from "../../helpers/models";
import { IntelContextProps } from "./types";

export const IntelContext = createContext<IntelContextProps>({
    currentMap: MapDetails.dieMaschine /* TODO: SWAP WITH USER PREFS */,
    setCurrentMap: () => { },
    currentMapGroup: MapGroupings[0] /* TODO: SWAP WITH USER PREFS */,
    setCurrentMapGroup: () => { },
    intelAudioMarkers: [],
    setIntelAudioMarkers: () => { },
    intelArtifactMarkers: [],
    setIntelArtifactMarkers: () => { },
});

export const IntelContextProvider = ({ children }) => {
    const [currentMap, setCurrentMap] = useState(MapDetails.dieMaschine);
    const [currentMapGroup, setCurrentMapGroup] = useState<MapMenuItem>(MapGroupings[0] /* TODO: SWAP WITH USER PREFS */);
    const [intelArtifactMarkers, setIntelArtifactMarkers] = useState<JSX.Element[]>([]);
    const [intelAudioMarkers, setIntelAudioMarkers] = useState<JSX.Element[]>([]);

    useMapEvent('baselayerchange', (props) => {
        console.log("baselayerchange: currentMap: ", props);

        Object.keys(MapDetails).forEach(mapString => {

            if (MapDetails[mapString].title === props.name) {
                console.log(MapDetails[mapString], "===", props.name);
                setCurrentMap(MapDetails[mapString])
            }
        });

        setMapMarkers(currentMap, setIntelArtifactMarkers, setIntelAudioMarkers);

    });

    useSetMap(currentMap)

    useEffect(() => {
        setMapMarkers(currentMap, setIntelArtifactMarkers, setIntelAudioMarkers);

        MapGroupings.forEach(mapGroup => {
            if (mapGroup.mapLayers.includes(currentMap)) {
                // console.log("FOUND GROUP: ", mapGroup);

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

function setMapMarkers(currentMap: MapItem, setIntelArtifactMarkers, setIntelAudioMarkers) {
    let artifactMarkers: JSX.Element[] = [];
    let audioMarkers: JSX.Element[] = [];
    currentMap.mapMarkers!.forEach(marker => {
        if (marker.props.typeDesc === IntelType.Artifact) {
            artifactMarkers.push(marker);
        }
        if (marker.props.typeDesc === IntelType.Audio) {
            audioMarkers.push(marker);
        }
    });
    setIntelArtifactMarkers(artifactMarkers);
    setIntelAudioMarkers(audioMarkers);
}
