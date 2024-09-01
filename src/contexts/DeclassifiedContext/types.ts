import { Dispatch, SetStateAction } from "react";
import { MapItem } from '../../classes';
import { FormInputs } from "../../components/IntelListMenu";
import { MapMenuItem } from '../../components/MapControls/types';
import { IntelItem } from '../../data/intel';

export interface DeclassifiedContextProps {
    currentMap: MapItem | null;
    setCurrentMapWithValidation: (newMap :MapItem) => Promise<boolean>;
    currentMapGroup: MapMenuItem | null;
    setCurrentMapGroup: Dispatch<SetStateAction<MapMenuItem | null>>;
    filteredIntelStore: IntelItem[];
    setFilteredIntelStore: Dispatch<SetStateAction<IntelItem[]>>;
    currentIntelFilter: FormInputs;
    setCurrentIntelFilter: Dispatch<SetStateAction<FormInputs>>;
    drawerState: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface IntelContextProviderProps {
    children: React.ReactNode
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface UserContextProps {
    isMobile: boolean;
}