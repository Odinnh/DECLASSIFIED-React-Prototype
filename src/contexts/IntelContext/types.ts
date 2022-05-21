import { Icon, IconOptions } from "leaflet";
import { Dispatch, SetStateAction } from "react";
import { generalIcon } from "../../REFACTORME/Misc/types";

export interface IntelContextProps {
    currentMap: string;
}

export const context: IntelContextProps = {
    currentMap: "Hello World"
}
export interface IntelContextProviderProps {
    children: React.ReactNode
}

export class Item {
    id: string;
    title: string;
    desc?: string;
    icon?: Icon<IconOptions>;
    layer?: string;

    constructor({ id, title, desc, icon, layer }: Item) {
        this.id = id;
        this.title = title ?? "";
        this.desc = desc ?? "";
        this.icon = icon ?? generalIcon;
        this.layer = layer ?? "MiscMarkers"
    }
}

export const MapDetails = {
    allOutbreakMaps: new Item({ id: "outbreak", title: "All Outbreak Maps" }),
    //outbreak
    zoo: new Item({ id: "zoo", title: "Zoo" }),
    ruka: new Item({ id: "ruka", title: "Ruka" }),
    duga: new Item({ id: "duga", title: "Duga" }),
    alpine: new Item({ id: "alpine", title: "Alpine" }),
    golova: new Item({ id: "golova", title: "Golova" }),
    sanatorium: new Item({ id: "sanatorium", title: "Sanatorium" }),
    collateral: new Item({ id: "collateral", title: "Collateral" }),
    armada: new Item({ id: "armada", title: "Armada" }),
    //roundbased
    dieMaschine: new Item({ id: "dieMaschine", title: "Die Maschine" }),
    dieMaschineUnderground: new Item({ id: "dieMaschine_underground", title: "Die Maschine" }),
    firebaseZ: new Item({ id: "firebaseZ", title: "Firebase Z" }),
    firebaseZSpawn: new Item({ id: "firebaseZ_spawn", title: "Firebase Z" }),
    mauerDerToten: new Item({ id: "mauerDerToten", title: "Mauer Der Toten" }),
    mauerDerTotenStreets: new Item({ id: "mauerDerToten_streets", title: "Mauer Der Toten" }),
    forsaken: new Item({ id: "forsaken", title: "Forsaken" }),
    forsakenUnderground: new Item({ id: "forsaken_underground", title: "Forsaken" }),
    //onslaught
    miami: new Item({ id: "miami", title: "Miami" }),
    satellite: new Item({ id: "satellite", title: "Satellite" }),
    moscow: new Item({ id: "moscow", title: "Moscow" }),
    nuketown: new Item({ id: "nuketown", title: "Nuketown" }),
    thePines: new Item({ id: "thePines", title: "The Pines" }),
    express: new Item({ id: "express", title: "Express" }),
    rush: new Item({ id: "rush", title: "Rush" }),
    echelon: new Item({ id: "echelon", title: "Echelon" }),
    driveIn: new Item({ id: "driveIn", title: "Drive-In" }),
    cartel: new Item({ id: "cartel", title: "Cartel" }),
    crossroads: new Item({ id: "crossroads", title: "Crossroads" }),
    raid: new Item({ id: "raid", title: "Raid" }),
    apocalypse: new Item({ id: "apocalypse", title: "Apocalypse" }),
    yamantau: new Item({ id: "yamantau", title: "Yamantau" }),
    standoff: new Item({ id: "standoff", title: "Standoff" }),
    collateralOn: new Item({ id: "collateralOn", title: "Collateral (Onslaught)" }),
    checkmate: new Item({ id: "checkmate", title: "Checkmate" }),
    garrison: new Item({ id: "garrison", title: "Garrison" }),
    deprogram: new Item({ id: "deprogram", title: "Deprogram" }),
};