import { mapSVGs } from "../helpers/mapsvg";
import { MapItem } from "../helpers/models";

export const MapDetails = {
    allOutbreakMaps: new MapItem({ id: "outbreak", title: "All Outbreak Maps" }),
    //outbreak
    zoo: new MapItem({ id: "zoo", title: "Zoo" }),
    ruka: new MapItem({ id: "ruka", title: "Ruka" }),
    duga: new MapItem({ id: "duga", title: "Duga" }),
    alpine: new MapItem({ id: "alpine", title: "Alpine" }),
    golova: new MapItem({ id: "golova", title: "Golova" }),
    sanatorium: new MapItem({ id: "sanatorium", title: "Sanatorium" }),
    collateral: new MapItem({ id: "collateral", title: "Collateral" }),
    armada: new MapItem({ id: "armada", title: "Armada" }),
    //roundbased
    dieMaschine: new MapItem({ id: "dieMaschine", title: "Die Maschine", mapOverlay: mapSVGs.dieMaschine, }),
    dieMaschineUnderground: new MapItem({ id: "dieMaschine_underground", title: "Die Maschine Underground", mapOverlay: mapSVGs.dieMaschine_underground }),
    firebaseZ: new MapItem({ id: "firebaseZ", title: "Firebase Z" }),
    firebaseZSpawn: new MapItem({ id: "firebaseZ_spawn", title: "Firebase Z" }),
    mauerDerToten: new MapItem({ id: "mauerDerToten", title: "Mauer Der Toten" }),
    mauerDerTotenStreets: new MapItem({ id: "mauerDerToten_streets", title: "Mauer Der Toten" }),
    forsaken: new MapItem({ id: "forsaken", title: "Forsaken" }),
    forsakenUnderground: new MapItem({ id: "forsaken_underground", title: "Forsaken" }),
    //onslaught
    miami: new MapItem({ id: "miami", title: "Miami" }),
    satellite: new MapItem({ id: "satellite", title: "Satellite" }),
    moscow: new MapItem({ id: "moscow", title: "Moscow" }),
    nuketown: new MapItem({ id: "nuketown", title: "Nuketown" }),
    thePines: new MapItem({ id: "thePines", title: "The Pines" }),
    express: new MapItem({ id: "express", title: "Express" }),
    rush: new MapItem({ id: "rush", title: "Rush" }),
    echelon: new MapItem({ id: "echelon", title: "Echelon" }),
    driveIn: new MapItem({ id: "driveIn", title: "Drive-In" }),
    cartel: new MapItem({ id: "cartel", title: "Cartel" }),
    crossroads: new MapItem({ id: "crossroads", title: "Crossroads" }),
    raid: new MapItem({ id: "raid", title: "Raid" }),
    apocalypse: new MapItem({ id: "apocalypse", title: "Apocalypse" }),
    yamantau: new MapItem({ id: "yamantau", title: "Yamantau" }),
    standoff: new MapItem({ id: "standoff", title: "Standoff" }),
    collateralOn: new MapItem({ id: "collateralOn", title: "Collateral (Onslaught)" }),
    checkmate: new MapItem({ id: "checkmate", title: "Checkmate" }),
    garrison: new MapItem({ id: "garrison", title: "Garrison" }),
    deprogram: new MapItem({ id: "deprogram", title: "Deprogram" }),
};

export const allOutbreakMapsArr = [
    MapDetails.zoo.id,
    MapDetails.ruka.id,
    MapDetails.duga.id,
    MapDetails.alpine.id,
    MapDetails.golova.id,
    MapDetails.sanatorium.id,
    MapDetails.collateral.id,
    MapDetails.armada.id
]