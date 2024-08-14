import { createContext, useEffect, useState } from "react";
import { useMapEvent, useMapEvents } from "react-leaflet";
import { MapItem } from "../../classes";
import { FormInputs, getIntelFilterDefaults } from "../../components/IntelListMenu";
import { MapGroupings, MapMenuItem } from "../../components/MapControls/types";
import { IntelItem, MapIds } from "../../data/intel";
import { MapDetails } from "../../data/mapDetails";
import { DeclassifiedContextProps } from "./types";
import { useLiveQuery } from "dexie-react-hooks";
import { db, DeclassifiedUserPreferences } from "../../data/db";
import { getUserPreferences } from "../../data/dataAccessLayer";

const initialContextValues =  {
    userPrefs: {},
    currentMap: MapDetails.dieMaschine /* TODO: SWAP WITH USER PREFS */,
    setCurrentMap: () => { },
    currentMapGroup: MapGroupings["dieMachine_Group"] /* TODO: SWAP WITH USER PREFS */,
    setCurrentMapGroup: () => { },
    filteredIntelStore: [],
    setFilteredIntelStore: () => {},
    currentIntelFilter: getIntelFilterDefaults(),
    setCurrentIntelFilter: () => {},
    drawerState: false,
    toggleDrawer: () => () => {},
    isMobile: window.innerWidth <= 768
};

export const DeclassifiedContext = createContext<DeclassifiedContextProps>(initialContextValues);

export const DeclassifiedContextProvider = ({ children }) => {
    // const [userPrefs, setUserPrefs] = useState(initialContextValues.userPrefs);
    if(localStorage.getItem("declassifiedPrefs") !== null){
        // They still have old userPrefs

        // if any user prefs exist map them to new instance of userPrefs
        // don't replace any missing values with default values (assume defaults only store if different?)
        // set mapped userPrefs into Dexie
    }

    var intelFilterDefaults = getIntelFilterDefaults();
    const [userPrefs, setUserPreferences] = useState<DeclassifiedUserPreferences>();
    const [currentMap, setCurrentMap] = useState<MapItem>(MapDetails.dieMaschine);
    const [currentMapGroup, setCurrentMapGroup] = useState<MapMenuItem>(MapGroupings["dieMachine_Group"] /* TODO: SWAP WITH USER PREFS */);
    const mapInstance = useMapEvents({});
    const [filteredIntelStore, setFilteredIntelStore] = useState<IntelItem[]>([]);
    const [currentIntelFilter, setCurrentIntelFilter] = useState<FormInputs>(intelFilterDefaults);
    const [drawerState, setDrawerState] = useState(initialContextValues.drawerState);
    const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);

    const toggleDrawer = (isOpen: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
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

    useMapEvent('baselayerchange', (props) => {
        const currentMapId = Object.keys(MapDetails).find(mapString => MapDetails[mapString].title === props.name)

        if (currentMapId) setCurrentMap(MapDetails[currentMapId])
    });

    useEffect(() => {

        const fetchPreferences = async () => {
            const data = await getUserPreferences();
            setUserPreferences(data);
        };
        fetchPreferences();

        Object.entries(MapGroupings).forEach(([key, mapItem]) => {
            if (mapItem.mapLayers.includes(currentMap)) {
                setCurrentMapGroup(mapItem);
            }
        });

        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [currentMap, mapInstance])



    const context = {
        userPrefs,
        currentMap,
        setCurrentMap,
        currentMapGroup,
        setCurrentMapGroup,
        filteredIntelStore,
        setFilteredIntelStore,
        currentIntelFilter,
        setCurrentIntelFilter,
        drawerState,
        toggleDrawer,
        isMobile
    }
    return <DeclassifiedContext.Provider value={context}>{children}</DeclassifiedContext.Provider>;
}

// function setMapMarkers(currentMap: MapItem, setIntelArtifactMarkers, setIntelAudioMarkers, setMiscMarkers) {
//     let artifactMarkers: JSX.Element[] = [];
//     let audioMarkers: JSX.Element[] = [];

//     // const allIntelMarkers = renderIntelMapMarkers(currentMap.id!);
//     // allIntelMarkers!.forEach(marker => {
//     //     if (marker.props.typeDesc === IntelType.Artifact) {
//     //         artifactMarkers.push(marker);
//     //     }
//     //     if (marker.props.typeDesc === IntelType.Audio) {
//     //         audioMarkers.push(marker);
//     //     }
//     // });
    
//     const allMiscMarkers = renderMiscMapMarkers(currentMap.id!);
//     setIntelArtifactMarkers(artifactMarkers);
//     setIntelAudioMarkers(audioMarkers);
//     setMiscMarkers(allMiscMarkers);
// }
