import { Dispatch, SetStateAction } from "react";
import { mapSVGs } from "../../helpers/mapsvg";
import { Item, MapItem } from "../../helpers/models";

export interface IntelContextProps {
    currentMap: Item;
    setCurrentMap: Dispatch<SetStateAction<Item>>;
    intelAudioMarkers: JSX.Element[];
    setIntelAudioMarkers: Dispatch<SetStateAction<JSX.Element[]>>;
    intelArtifactMarkers: JSX.Element[];
    setIntelArtifactMarkers: Dispatch<SetStateAction<JSX.Element[]>>;
}

export interface IntelContextProviderProps {
    children: React.ReactNode
}