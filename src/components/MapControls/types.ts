import { MapDetails } from '../../data/mapDetails';
import { Item, MapItem } from './../../helpers/models';

export interface MapMenuItem {
    mapName: string;
    mapLayers: MapItem[];
}

export const MapGroupings : MapMenuItem[] = [
    {mapName: 'Die Maschine', mapLayers: [MapDetails.dieMaschine, MapDetails.dieMaschineUnderground]},
    {mapName: 'Firebase Z', mapLayers: [MapDetails.firebaseZ, MapDetails.firebaseZSpawn]}
]

export interface MapControlsProps {
    currentMap: MapItem;
}