import { createContext, useEffect, useState } from "react";
import { useMapEvent } from "react-leaflet";
import { MapItem } from "../../classes";
import { FormInputs, getIntelFilterDefaults } from "../../components/IntelListMenu";
import { MapGroupings, MapMenuItem } from "../../components/MapControls/types";
import { IntelItem } from "../../data/intel";
import { GetMapById, MapDetails } from "../../data/mapDetails";
import { DeclassifiedContextProps } from "./types";
import { DeclassifiedUserPreferences } from "../../data/db";
import { getSetUserPreferences, updateUserPreferences } from "../../data/dataAccessLayer";

const initialContextValues = {
    userPrefs: {},
    currentMap: null,
    setCurrentMapWithValidation: async () => false,
    currentMapGroup: null,
    setCurrentMapGroup: () => {},
    filteredIntelStore: [],
    setFilteredIntelStore: () => {},
    currentIntelFilter: getIntelFilterDefaults(),
    setCurrentIntelFilter: () => {},
    drawerState: false,
    toggleDrawer: () => () => {},
    isMobile: window.innerWidth <= 768,
};

async function updateUserPreferencesInDB(
    updates: Partial<Omit<DeclassifiedUserPreferences, 'username'>>
    ): Promise<DeclassifiedUserPreferences | undefined> {
        return await updateUserPreferences(updates);
    }

export const DeclassifiedContext = createContext<DeclassifiedContextProps>(initialContextValues);

export const DeclassifiedContextProvider = ({ children }) => {
    const [userPrefs, setUserPreferences] = useState<DeclassifiedUserPreferences | null>(null);
    const [currentMap, setCurrentMap] = useState<MapItem | null>(null);
    const [currentMapGroup, setCurrentMapGroup] = useState<MapMenuItem | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [filteredIntelStore, setFilteredIntelStore] = useState<IntelItem[]>([]);
    const [currentIntelFilter, setCurrentIntelFilter] = useState<FormInputs>(getIntelFilterDefaults());
    const [drawerState, setDrawerState] = useState(initialContextValues.drawerState);
    const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);

    const setCurrentMapWithValidation = async (newMap: MapItem) => {
        if (newMap.mapOverlay !== null && newMap.mapOverlay !== undefined) {
            setCurrentMap(newMap);
            Object.entries(MapGroupings).forEach(([key, mapItem]) => {
                if (newMap && mapItem.mapLayers.includes(newMap)) {
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

    const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event && event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
            return;
        }
        setDrawerState(isOpen);
    };

    useMapEvent("baselayerchange", (props) => {
        const currentMapId = Object.keys(MapDetails).find(mapString => MapDetails[mapString].title === props.name);
        if (currentMapId) {
            setCurrentMapWithValidation(MapDetails[currentMapId]);
        }
    });

    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const data = await getSetUserPreferences();
                setUserPreferences(data!);

                const userPrefsCurrentMap = GetMapById(data!.currentMap);
                if (userPrefsCurrentMap) {
                    setCurrentMap(userPrefsCurrentMap);
                    Object.entries(MapGroupings).forEach(([key, mapItem]) => {
                        if (userPrefsCurrentMap && mapItem.mapLayers.includes(userPrefsCurrentMap)) {
                            setCurrentMapGroup(mapItem);
                        }
                    });
                }

            } catch (error) {
                console.error("Failed to fetch user preferences: ", error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching preferences
            }
        };

        fetchPreferences();

        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    return <DeclassifiedContext.Provider value={context}>{children}</DeclassifiedContext.Provider>;
};