import { Dispatch, SetStateAction } from 'react';
import { MapItem } from '../../classes';
import { FormInputs } from '../../components/IntelListMenu';
import { MapMenuItem } from '../../components/MapControls/types';
import { DeclassifiedIntelCollected } from '../../data/db';
import { IntelItem } from '../../data/intel';

export interface DeclassifiedContextProps {
	currentMap: MapItem | null;
	setCurrentMapWithValidation: (newMap: MapItem) => Promise<boolean>;
	currentMapGroup: MapMenuItem | null;
	setCurrentMapGroup: Dispatch<SetStateAction<MapMenuItem | null>>;
	filteredIntelStore: IntelItem[];
	setFilteredIntelStore: Dispatch<SetStateAction<IntelItem[]>>;
	currentIntelFilter: FormInputs;
	setCurrentIntelFilter: Dispatch<SetStateAction<FormInputs>>;
	drawerState: DrawerMenuProps;
	toggleDrawer: (
		isOpen: boolean,
		content?: JSX.Element
	) => (event: React.KeyboardEvent | React.MouseEvent) => void;
	collectedIntel: DeclassifiedIntelCollected[] | undefined;
}

export interface IntelContextProviderProps {
	children: React.ReactNode;
}

export interface DrawerMenuProps {
	isOpen: boolean,
	content: JSX.Element
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface UserContextProps {
	isMobile: boolean;
	setIsMobile: (state: boolean) => void;
	isDebugMode: boolean;
	setIsDebugMode: (state: boolean) => void;
	sharedMapItemId: string | null;
	updateMapItemId: (id: string) => void;
}
