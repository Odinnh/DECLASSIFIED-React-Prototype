import {
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { useMapEvent, useMapEvents } from 'react-leaflet';
import { MapItem } from '../../classes';
import {
	FormInputs,
	getIntelFilterDefaults,
} from '../../components/IntelListMenu';
import { MapGroupings, MapMenuItem } from '../../components/MapControls/types';
import { DefaultPOIData, IntelItem } from '../../data/intel';
import { GetMapById, GetMapByTitle, MapDetails } from '../../data/mapDetails';
import { DeclassifiedContextProps } from './types';
import { DeclassifiedUserPreferences } from '../../data/db';
import {
	getSetUserPreferences,
	updateUserPreferences,
} from '../../data/dataAccessLayer';
import {
	useUserContext,
} from '../UserContext/userContextProvider';
import { getIntelById, getMiscMarkerById } from '../../helpers/github';

const initialContextValues = {
	userPrefs: {},
	currentMap: null,
	setCurrentMapWithValidation: async () => false,
	currentMapGroup: null,
	setCurrentMapGroup: () => { },
	filteredIntelStore: [],
	setFilteredIntelStore: () => { },
	currentIntelFilter: getIntelFilterDefaults(),
	setCurrentIntelFilter: () => { },
	drawerState: false,
	toggleDrawer: () => () => { },
};

async function updateUserPreferencesInDB(
	updates: Partial<Omit<DeclassifiedUserPreferences, 'username'>>
): Promise<DeclassifiedUserPreferences | undefined> {
	return await updateUserPreferences(updates);
}

export const DeclassifiedContext =
	createContext<DeclassifiedContextProps>(initialContextValues);

export const DeclassifiedContextProvider = ({ children }) => {
	const mapInstance = useMapEvents({});
	const [userPrefs, setUserPreferences] =
		useState<DeclassifiedUserPreferences | null>(null);
	const [currentMap, setCurrentMap] = useState<MapItem | null>(null);
	const [currentMapGroup, setCurrentMapGroup] = useState<MapMenuItem | null>(
		null
	);
	const [isLoading, setIsLoading] = useState(true); // Add loading state
	const [filteredIntelStore, setFilteredIntelStore] = useState<IntelItem[]>([]);
	const [currentIntelFilter, setCurrentIntelFilter] = useState<FormInputs>(
		getIntelFilterDefaults()
	);
	const [drawerState, setDrawerState] = useState(
		initialContextValues.drawerState
	);
	const { isMobile, sharedMapItemId } = useUserContext();
	const [isMapLoaded, setIsMapLoaded] = useState(false);

	const setCurrentMapWithValidation = async (newMap: MapItem) => {
		console.log('Setting current map to: ', newMap);
		if (newMap.mapOverlay !== null && newMap.mapOverlay !== undefined) {
			setCurrentMap(newMap);
			Object.entries(MapGroupings).forEach(([key, mapItem]) => {
				if (newMap && mapItem.mapLayers.includes(newMap)) {
					console.log('Setting current map GROUP to: ', mapItem);
					setCurrentMapGroup(mapItem);
				}
			});
			await updateUserPreferencesInDB({ currentMap: newMap.id });
			return true;
		} else {
			console.error("Cannot set a map that doesn't exist.");
			return false;
		}
	};

	const toggleDrawer =
		(isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setDrawerState(isOpen);
		};

	useMapEvent('baselayerchange', props => {
		let currentMapKey = GetMapByTitle(props.name);
		if (currentMapKey) {
			console.log(
				'setCurrentMapWithValidation with baselayerchange: ',
				currentMapKey
			);
			setCurrentMapWithValidation(MapDetails[currentMapKey]);
		}
	});

	const focusOnSharedItem = useCallback(async () => {
		// TODO - Debug race condition with map loading and share link to avoid refreshing the page
		if (isMapLoaded) {
			if (sharedMapItemId) {
				console.log('Focus on shared item: ', sharedMapItemId);
				let intelItem = getIntelById(sharedMapItemId);
				if (intelItem && intelItem.map) {
					const IntelHasLocation = intelItem.loc !== DefaultPOIData.nullLoc;
					if (IntelHasLocation) {
						const intelItemMap = GetMapById(intelItem.map)!;
						console.log('setCurrentMapWithValidation with INTEL: ', intelItem);
						console.log('intelItemMap: ', intelItemMap);
						await setCurrentMapWithValidation(intelItemMap);
						mapInstance.flyTo(intelItem.loc, 4);
						return;
					}

					return;
				} else {
					let miscItemResult = getMiscMarkerById(sharedMapItemId);
					if (miscItemResult) {
						const [miscMapId, miscItem] = miscItemResult;
						if (miscItem && miscMapId) {
							const MiscHasLocation = miscItem.loc !== DefaultPOIData.nullLoc;
							if (MiscHasLocation) {
								const miscItemMap = GetMapById(miscMapId)!;
								console.log(
									'setCurrentMapWithValidation with MISC: ',
									miscItem
								);
								console.log('miscItemMap: ', miscItemMap);
								await setCurrentMapWithValidation(miscItemMap);
								mapInstance.flyTo(miscItem.loc, 4);
								return;
							}
						}
					}
					return;
				}
			}
		}
	}, [isMapLoaded, mapInstance, sharedMapItemId]);

	useEffect(() => {
		const fetchPreferences = async () => {
			try {
				const data = await getSetUserPreferences();
				setUserPreferences(data!);

				const userPrefsCurrentMap = GetMapById(data!.currentMap);
				if (!sharedMapItemId && userPrefsCurrentMap) {
					console.log(
						'Setting current map from user preferences: ',
						userPrefsCurrentMap
					);
					setCurrentMap(userPrefsCurrentMap);
					Object.entries(MapGroupings).forEach(([key, mapItem]) => {
						if (
							userPrefsCurrentMap &&
							mapItem.mapLayers.includes(userPrefsCurrentMap)
						) {
							setCurrentMapGroup(mapItem);
						}
					});
				}

				setIsMapLoaded(true);
			} catch (error) {
				console.error('Failed to fetch user preferences: ', error);
			} finally {
				setIsLoading(false); // Set loading to false after fetching preferences
			}
		};

		fetchPreferences();

		if (isMapLoaded) {
			focusOnSharedItem();
		}
	}, [focusOnSharedItem, isMapLoaded]);

	if (isLoading) {
		return null;
	}

	const context = {
		userPrefs,
		currentMap,
		setCurrentMapWithValidation,
		currentMapGroup,
		setCurrentMapGroup,
		filteredIntelStore,
		setFilteredIntelStore,
		currentIntelFilter,
		setCurrentIntelFilter,
		drawerState,
		toggleDrawer,
		isMobile,
	};

	return (
		<DeclassifiedContext.Provider value={context}>
			{children}
		</DeclassifiedContext.Provider>
	);
};
