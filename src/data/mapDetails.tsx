import { MapItem } from "../classes";
import { mapSVGs } from "../helpers/mapsvg";
import { MapIds } from "./intel";

export const GetMapById = (mapId :string) => Object.values(MapDetails).find(map => map.id === mapId);

export const MapDetails = {
    allOutbreakMaps: new MapItem(MapIds.allOutbreakMaps, { title: "All Outbreak Maps" }),
    //outbreak
    zoo: new MapItem(MapIds.zoo, { title: "Zoo" }),
    ruka: new MapItem(MapIds.ruka, { title: "Ruka" }),
    duga: new MapItem(MapIds.duga, { title: "Duga" }),
    alpine: new MapItem(MapIds.alpine, { title: "Alpine" }),
    golova: new MapItem(MapIds.golova, { title: "Golova" }),
    sanatorium: new MapItem(MapIds.sanatorium, { title: "Sanatorium" }),
    collateral: new MapItem(MapIds.collateral, { title: "Collateral" }),
    armada: new MapItem(MapIds.armada, { title: "Armada" }),
    //roundbased
    dieMaschine: new MapItem(MapIds.dieMaschine, { title: "Die Maschine", mapOverlay: mapSVGs.dieMaschine }),
    dieMaschineUnderground: new MapItem(MapIds.dieMaschineUnderground, { title: "Die Maschine Underground", mapOverlay: mapSVGs.dieMaschine_underground }),
    firebaseZ: new MapItem(MapIds.firebaseZ, { title: "Firebase Z", mapOverlay: mapSVGs.firebaseZ}),
    firebaseZSpawn: new MapItem(MapIds.firebaseZSpawn, { title: "Firebase Z Spawn", mapOverlay: mapSVGs.firebaseZ_spawn }),
    mauerDerToten: new MapItem(MapIds.mauerDerToten, { title: "Mauer Der Toten Underground", mapOverlay: mapSVGs.mauerDerToten }),
    mauerDerTotenStreets: new MapItem(MapIds.mauerDerTotenStreets, { title: "Mauer Der Toten", mapOverlay: mapSVGs.mauerDerToten_streets }),
    forsaken: new MapItem(MapIds.forsaken, { title: "Forsaken", mapOverlay: mapSVGs.forsaken }),
    forsakenUnderground: new MapItem(MapIds.forsakenUnderground, { title: "Forsaken Underground", mapOverlay: mapSVGs.forsaken_underground }),
    //onslaught
    miami: new MapItem(MapIds.miami, { title: "Miami" }),
    satellite: new MapItem(MapIds.satellite, { title: "Satellite" }),
    moscow: new MapItem(MapIds.moscow, { title: "Moscow" }),
    nuketown: new MapItem(MapIds.nuketown, { title: "Nuketown" }),
    thePines: new MapItem(MapIds.thePines, { title: "The Pines" }),
    express: new MapItem(MapIds.express, { title: "Express" }),
    rush: new MapItem(MapIds.rush, { title: "Rush" }),
    echelon: new MapItem(MapIds.echelon, { title: "Echelon" }),
    driveIn: new MapItem(MapIds.driveIn, { title: "Drive-In" }),
    cartel: new MapItem(MapIds.cartel, { title: "Cartel" }),
    crossroads: new MapItem(MapIds.crossroads, { title: "Crossroads" }),
    raid: new MapItem(MapIds.raid, { title: "Raid" }),
    apocalypse: new MapItem(MapIds.apocalypse, { title: "Apocalypse" }),
    yamantau: new MapItem(MapIds.yamantau, { title: "Yamantau" }),
    standoff: new MapItem(MapIds.standoff, { title: "Standoff" }),
    collateralOn: new MapItem(MapIds.collateralOn, { title: "Collateral (Onslaught)" }),
    checkmate: new MapItem(MapIds.checkmate, { title: "Checkmate" }),
    garrison: new MapItem(MapIds.garrison, { title: "Garrison" }),
    deprogram: new MapItem(MapIds.deprogram, { title: "Deprogram" }),
};

export const allOutbreakMapsArr = [
    MapIds.zoo,
    MapIds.ruka,
    MapIds.duga,
    MapIds.alpine,
    MapIds.golova,
    MapIds.sanatorium,
    MapIds.collateral,
    MapIds.armada
]