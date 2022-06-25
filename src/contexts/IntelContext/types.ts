import { MapMenuItem } from './../../components/MapControls/types';
import { Dispatch, SetStateAction } from "react";
import { mapSVGs } from "../../helpers/mapsvg";
import { Item, MapItem } from "../../helpers/models";

export interface IntelContextProps {
    currentMap: MapItem;
    setCurrentMap: Dispatch<SetStateAction<MapItem>>;
    currentMapGroup: MapMenuItem;
    setCurrentMapGroup: Dispatch<SetStateAction<MapMenuItem>>;
    intelAudioMarkers: JSX.Element[];
    setIntelAudioMarkers: Dispatch<SetStateAction<JSX.Element[]>>;
    intelArtifactMarkers: JSX.Element[];
    setIntelArtifactMarkers: Dispatch<SetStateAction<JSX.Element[]>>;
    drawerState: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface IntelContextProviderProps {
    children: React.ReactNode
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';