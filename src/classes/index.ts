import { LatLngExpression } from "leaflet";
import { Faction, IconTypes, Season } from "../data/intel";
// import { generalIcon, renderIntelMapMarkers, renderMiscMapMarkers } from "../helpers/markers";

/////////////////////Classes/////////////////////////

export interface IItem {
    id?: string;
    title: string;
    desc?: string;
    icon?: string;
    layer?: string;
}
export class Item {
    id?: string;
    title: string;
    desc?: string;
    icon?: string;
    layer?: string;

    constructor({ id, title, desc, icon, layer }: IItem) {
        this.id = id;
        this.title = title ?? "";
        this.desc = desc ?? "";
        this.icon = icon ?? IconTypes.general;
        this.layer = layer ?? "MiscMarkers";
    }
}

export class BaseMarker extends Item {
    typeDesc: string;
    loc: LatLngExpression;

    constructor({ id, title, desc, icon, layer, typeDesc, loc }: any) {
        super({ id, title, desc, icon, layer });
        this.typeDesc = typeDesc;
        this.loc = loc ?? [0, 0];
    }
}

export class IntelMarker extends BaseMarker {
    faction: Faction;
    season: Season;
    img?: string;

    constructor({ id, title, desc, icon, layer, typeDesc, loc, faction, season, img }: any) {
        super({ id, title, desc, icon, layer, typeDesc, loc });
        this.faction = faction;
        this.season = season;
        this.img = img;
    }
}

export class MiscMarker extends BaseMarker {
    constructor(id: string, { title, desc, icon }: any, loc: LatLngExpression, uniqueDesc?: string) {
        desc = uniqueDesc ?? desc
        super({ id, title, desc, icon, loc, typeDesc: "Misc" })
    }
}

export class MiscType extends Item {
    constructor({ id, title, desc, icon, layer }: any) {
        super({ id, title, desc, icon, layer });
    }
}

export class MapItem extends Item {
    get mapCanRender(): boolean {
        return this.mapOverlay !== undefined && this.mapOverlay !== null;
    }
    mapOverlay?: JSX.Element;
    intelMapMarkers?: JSX.Element[];
    miscMapMarkers?: JSX.Element[];
    constructor(id, { title, desc, icon, layer, mapOverlay }: any) {
        super({ id, title, desc, icon, layer });
        this.mapOverlay = mapOverlay;
    }
}