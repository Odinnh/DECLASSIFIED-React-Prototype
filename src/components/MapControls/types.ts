import { MapDetails } from '../../data/mapDetails';
import { Item, MapItem } from './../../helpers/models';

export interface MapMenuItem {
    MapName: string;
    MapLayers: MapItem[];
}

export const MapGroupings : MapMenuItem[] = [
    {MapName: 'Die Maschine', MapLayers: [MapDetails.dieMaschine, MapDetails.dieMaschineUnderground]},
    {MapName: 'Firebase Z', MapLayers: [MapDetails.firebaseZ, MapDetails.firebaseZSpawn]}
]