import { MapMenuItem } from '../../components/MapControls/types';
import { Dispatch, SetStateAction } from "react";
import { MapItem } from '../../classes';

export interface DeclassifiedContextProps {
    currentMap: MapItem;
    setCurrentMap: Dispatch<SetStateAction<MapItem>>;
    currentMapGroup: MapMenuItem;
    setCurrentMapGroup: Dispatch<SetStateAction<MapMenuItem>>;
    intelAudioMarkers: JSX.Element[];
    intelArtifactMarkers: JSX.Element[];
    miscMarkers: JSX.Element[];
    drawerState: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface IntelContextProviderProps {
    children: React.ReactNode
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';