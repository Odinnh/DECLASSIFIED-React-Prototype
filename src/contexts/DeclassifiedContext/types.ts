import { Dispatch, SetStateAction } from "react";
import { MapItem } from '../../classes';
import { MapMenuItem } from '../../components/MapControls/types';
import { IntelItem } from '../../data/intel';

export interface DeclassifiedContextProps {
    currentMap: MapItem;
    setCurrentMap: Dispatch<SetStateAction<MapItem>>;
    currentMapGroup: MapMenuItem;
    setCurrentMapGroup: Dispatch<SetStateAction<MapMenuItem>>;
    filteredIntelStore: IntelItem[];
    setFilteredIntelStore: Dispatch<SetStateAction<IntelItem[]>>;
    drawerState: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface IntelContextProviderProps {
    children: React.ReactNode
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';