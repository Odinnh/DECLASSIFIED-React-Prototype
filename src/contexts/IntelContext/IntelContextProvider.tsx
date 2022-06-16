import { Layer } from "leaflet";
import { createContext, useEffect, useState } from "react";
import { useMapEvent, useMapEvents } from "react-leaflet";
import { MapGroupings, MapMenuItem } from "../../components/MapControls/types";
import { IntelType } from "../../data/intel";
import { MapDetails } from "../../data/mapDetails";
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
    const [currentMap, setCurrentMap] = useState<MapItem>(MapDetails.dieMaschine);
    const [currentMapGroup, setCurrentMapGroup] = useState<MapMenuItem>(MapGroupings[0] /* TODO: SWAP WITH USER PREFS */);
    const [intelArtifactMarkers, setIntelArtifactMarkers] = useState<JSX.Element[]>([]);
    const [intelAudioMarkers, setIntelAudioMarkers] = useState<JSX.Element[]>([]);
    const mapInstance = useMapEvents({});

    useMapEvent('baselayerchange', (props) => {
        const currentMapId = Object.keys(MapDetails).find(mapString => MapDetails[mapString].title === props.name)

        if (currentMapId) setCurrentMap(MapDetails[currentMapId])
    });

    useEffect(() => {
        setMapMarkers(currentMap, setIntelArtifactMarkers, setIntelAudioMarkers);

        MapGroupings.forEach(mapGroup => {
            if (mapGroup.mapLayers.includes(currentMap)) {
                // console.log("FOUND GROUP: ", mapGroup);

                setCurrentMapGroup(mapGroup);
            }
        });
    }, [currentMap, mapInstance])



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
