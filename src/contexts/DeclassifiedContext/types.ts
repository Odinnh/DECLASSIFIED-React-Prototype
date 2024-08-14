import { Dispatch, SetStateAction } from "react";
import { MapItem } from '../../classes';
import { FormInputs } from "../../components/IntelListMenu";
import { MapMenuItem } from '../../components/MapControls/types';
import { IntelItem } from '../../data/intel';

export interface DeclassifiedContextProps {
    currentMap: MapItem;
    setCurrentMap: Dispatch<SetStateAction<MapItem>>;
    currentMapGroup: MapMenuItem;
    setCurrentMapGroup: Dispatch<SetStateAction<MapMenuItem>>;
    filteredIntelStore: IntelItem[];
    setFilteredIntelStore: Dispatch<SetStateAction<IntelItem[]>>;
    currentIntelFilter: FormInputs;
    setCurrentIntelFilter: Dispatch<SetStateAction<FormInputs>>;
    drawerState: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    isMobile: boolean;
}

export interface IntelContextProviderProps {
    children: React.ReactNode
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';