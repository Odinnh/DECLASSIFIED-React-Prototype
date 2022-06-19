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
    drawerState: {
        top: boolean;
        left: boolean;
        bottom: boolean;
        right: boolean;
    }
    toggleDrawer: (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface IntelContextProviderProps {
    children: React.ReactNode
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';