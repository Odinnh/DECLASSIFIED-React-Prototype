import { Icon, IconOptions, LatLngExpression } from "leaflet";
import { Faction, Season } from "../data/intel";
import { generalIcon, renderIntelMapMarkers, renderMiscMapMarkers } from "../helpers/markers";

/////////////////////Classes/////////////////////////
export class Item {
    id?: string;
    title: string;
    desc?: string;
    icon?: Icon<IconOptions>;
    layer?: string;

    constructor({ id, title, desc, icon, layer }: Item) {
        this.id = id;
        this.title = title ?? "";
        this.desc = desc ?? "";
        this.icon = icon ?? generalIcon;
        this.layer = layer ?? "MiscMarkers";
    }
}

export class BaseMarker extends Item {
    typeDesc: string;
    loc: LatLngExpression;

    constructor({ id, title, desc, icon, layer, typeDesc, loc }: BaseMarker) {
        super({ id, title, desc, icon, layer });
        this.typeDesc = typeDesc;
        this.loc = loc ?? [0, 0];
    }
}

export class IntelMarker extends BaseMarker {
    faction: Faction;
    season: Season;
    img?: string;

    constructor({ id, title, desc, icon, layer, typeDesc, loc, faction, season, img }: IntelMarker) {
        super({ id, title, desc, icon, layer, typeDesc, loc });
        this.faction = faction;
        this.season = season;
        this.img = img;
    }
}

export class MiscMarker extends BaseMarker {
    constructor(id: string, { title, desc, icon }: Item, loc: LatLngExpression, uniqueDesc?: string) {
        desc = uniqueDesc ?? desc
        super({ id, title, desc, icon, loc, typeDesc: "Misc" })
    }
}

export class MiscType extends Item {
    constructor({ id, title, desc, icon, layer }: Item) {
        super({ id, title, desc, icon, layer });
    }
}

export class MapItem extends Item {
    mapOverlay?: JSX.Element;
    intelMapMarkers?: JSX.Element[];
    miscMapMarkers?: JSX.Element[];
    constructor(id, { title, desc, icon, layer, mapOverlay }: MapItem) {
        super({ id, title, desc, icon, layer });
        this.mapOverlay = mapOverlay;
        this.intelMapMarkers = renderIntelMapMarkers(id);
        this.miscMapMarkers = renderMiscMapMarkers(id);
    }
}