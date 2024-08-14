import { MapItem } from '../../classes';
import { MapDetails } from '../../data/mapDetails';

export interface MapMenuItem {
    mapName: string;
    mapLayers: MapItem[];
}

export type MapGroupDictionary = Record<string, MapMenuItem>;

export const MapGroupings : MapGroupDictionary = {
    "dieMachine_Group": {mapName: 'Die Maschine', mapLayers: [MapDetails.dieMaschine, MapDetails.dieMaschineUnderground]},
    "firebaseZ_Group": {mapName: 'Firebase Z', mapLayers: [MapDetails.firebaseZ, MapDetails.firebaseZSpawn]},
    "mauerDerToten_Group": {mapName: 'Mauer Der Toten', mapLayers: [MapDetails.mauerDerTotenStreets, MapDetails.mauerDerToten]},
    "forsaken_Group": {mapName: 'Forsaken', mapLayers: [MapDetails.forsaken, MapDetails.forsakenUnderground]}
}

export interface MapControlsProps {
    currentMap: MapItem;
}