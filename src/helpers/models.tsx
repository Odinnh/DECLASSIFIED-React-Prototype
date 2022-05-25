import { Icon, IconOptions, LatLngExpression } from "leaflet";
import { ammoCrateIcon, arsenalIcon, craftingTableIcon, dementedIcon, fishingIcon, generalIcon, miscIconInit, monkeyIcon, mysteryBoxIcon, papMachineIcon, radioIcon, redRiftIcon, riftIcon, trialComputerIcon, wallbuyIcon, wunderFizzIcon, ziplineIcon } from "../REFACTORME/Misc/types";
import { Faction, intelStore, Season } from '../data/intel';
import { IntelMapMarker } from '../components/MapMarker';

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
    constructor({ id, title, desc, icon, layer, typeDesc, loc }: BaseMarker) {
        super({ id, title, desc, icon, layer, typeDesc, loc });
    }
}

export class MiscType extends Item {
    constructor({ id, title, desc, icon, layer }: Item) {
        super({ id, title, desc, icon, layer });
    }
}

export class MapItem extends Item {
    mapOverlay?: JSX.Element;
    mapMarkers?: JSX.Element[];
    constructor({ id, title, desc, icon, layer, mapOverlay }: MapItem) {
        super({ id, title, desc, icon, layer });
        this.mapOverlay = mapOverlay;
        this.mapMarkers = intelStore.map(intel => (
            <IntelMapMarker {...intel} />
        ));
    }
}

/////////////////////Maps/////////////////////////

/* export function findMapById(mapId) {
    const maps = Object.values(MapDetails);
    const foundMap = maps.find(map => map.id === mapId);
    return foundMap;
} */



/////////////////////Metadata/////////////////////////
export const RepoDomain = 'https://github.com/Miss-placed/DECLASSIFIED';
export const AppDomain = 'https://declassified.netlify.app/';

export const ContribTemplates = {
    intel: {
        newId: "newIntel",
        newTitle: "New Intel",
        editId: "editIntel",
        editTitle: "Intel Fix",
    },
    misc: {
        newId: "newMisc",
        newTitle: "New Misc Marker",
        editId: "editMisc",
        editTitle: "Misc Marker Fix",
    }
}

export const ModalSet = {
    intelOverview: ["intel-filters", "intel-list", "intel-stats"],
    intelDescription: ["intel-list", "intel-detail"],
    settingsMain: ["settings"],
    settingsDetail: ["settings", "settings-detail"],
}

/////////////////////Perks/////////////////////////
export const Perks = {
    staminup: new Item({ id: "staminUp", title: "Stamin-Up", icon: miscIconInit("staminUp", "perk") }),
    quick: new Item({ id: "quickRevive", title: "Quick Revive", icon: miscIconInit("quickRevive", "perk") }),
    jugg: new Item({ id: "juggernog", title: "Jugger-Nog", icon: miscIconInit("juggernog", "perk") }),
    speed: new Item({ id: "speedCola", title: "Speed Cola", icon: miscIconInit("speedCola", "perk") }),
    mule: new Item({ id: "muleKick", title: "Mule Kick", icon: miscIconInit("muleKick", "perk") }),
    elemental: new Item({ id: "elementalPop", title: "Elemental Pop", icon: miscIconInit("elementalPop", "perk") }),
    death: new Item({ id: "deathPerception", title: "Death Perception", icon: miscIconInit("deathPerception", "perk") }),
    tomb: new Item({ id: "tombstoneSoda", title: "Tombstone", icon: miscIconInit("tombstoneSoda", "perk") }),
    deadshot: new Item({ id: "deadshotDaiquiri", title: "Deadshot Daiquiri", icon: miscIconInit("deadshotDaiquiri", "perk") }),
    phd: new Item({ id: "PHDSlider", title: "PHD Slider", icon: miscIconInit("PHDSlider", "perk") }),
}

/////////////////////Markers/////////////////////////
export const MarkerTypes = {
    intel: new Item({ id: "intel", title: "Intel" }),
    misc: new Item({ id: "misc", title: "Misc" }),
    worldEvents: new Item({ id: "worldEvents", title: "World Events" }),
    easterEggs: new Item({ id: "easterEggs", title: "Easter Eggs" }),
}
interface IDefaultPOIData {
    challenge: string;
    special: string;
    chests: string;
    onslaught: string;
    nullLoc: LatLngExpression;
}
export const DefaultPOIData: IDefaultPOIData = {
    challenge: "Obtained through the Challenge Machine",
    special: "Dropped from Special/Elite kills",
    chests: "Dropped from Special/Elite kills or golden chests",
    onslaught: "Dropped during the onslaught gamemode.",
    nullLoc: [0, 0]
}

/////////////////////Misc/////////////////////////
export const MiscTypes = {
    dementedEcho: new Item({ title: "Demented Echo", desc: "Destroy it before it touches you to get a reward.", icon: dementedIcon }),
    rift: new Item({ title: "Aether Rift", desc: "Jump through to teleport and gain a random powerup.", icon: riftIcon }),
    redRift: new Item({ title: "Red Aether Rift", desc: "Jump through all the rifts to continue the Easter Egg", icon: redRiftIcon }),
    radio: new Item({ title: "Radio", icon: radioIcon }),
    //TODO STANDARDISE STRING
    requiemRadio: new Item({ title: "Requiem Radio", icon: radioIcon, layer: "Markers" }),
    omegaRadio: new Item({ title: "Omega Radio", icon: radioIcon }),
    maxisRadio: new Item({ title: "Maxis Radio", icon: radioIcon }),
    monkey: new Item({ title: "Stone Monkey", icon: monkeyIcon }),
    projector: new Item({ title: "Projector", desc: "The projector for the Main Quest" }),
    signal: new Item({ title: "Signal" }),
    fishing: new Item({ title: "Fishing", desc: "Fish up to 3 times for a small reward each time.", icon: fishingIcon }),
    essenceDrop: new Item({ title: "Essence Drop" }),
    scrapHeap: new Item({ title: "Scrap Heap" }),
    thermophasic: new Item({ title: "D.I.E. Thermophasic Upgrade" }),
    nova5: new Item({ title: "D.I.E. Nova-5 Upgrade" }),
    electrobolt: new Item({ title: "D.I.E. Electrobolt Upgrade" }),
    cryoemitter: new Item({ title: "D.I.E. Cryo-Emitter Upgrade" }),

    wunderFizz: new Item({ title: "Der Wunderfizz", icon: wunderFizzIcon }),
    trialComputer: new Item({ title: "Trial Computer", icon: trialComputerIcon }),
    papMachine: new Item({ title: "Pack-a-Punch", icon: papMachineIcon }),
    mysteryBox: new Item({ title: "Mystery Box Location", icon: mysteryBoxIcon }),
    wallbuy: new Item({ title: "Wall Buy", icon: wallbuyIcon }),
    power: new Item({ title: "Power Switch" }),
    jumpPad: new Item({ title: "Jump Pad" }),
    landingPad: new Item({ title: "Landing Pad" }),
    airSupport: new Item({ title: "Air Support Console" }),
    teleporter: new Item({ title: "Teleporter" }),
    collector: new Item({ title: "Collection Unit" }),
    reactor: new Item({ title: "Aether Reactor" }),
    craftingTable: new Item({ title: "Crafting Table", icon: craftingTableIcon }),
    arsenal: new Item({ title: "Arsenal", icon: arsenalIcon }),
    ammoCrate: new Item({ title: "Ammo Crate", icon: ammoCrateIcon }),
    trap: new Item({ title: "Trap" }),
    zipline: new Item({ title: "Zipline", icon: ziplineIcon }),
    rampageInducer: new Item({ title: "Rampage Inducer", icon: dementedIcon }),

    klausRadio: new Item({ title: "Klaus recall radio", icon: radioIcon }),
    aetherTunnel: new Item({ title: "Aether Tunnel", icon: ziplineIcon }),
    aetherCrystal: new Item({ title: "Aether Crystal" }),
}

export const WorldEventTypes = {
    furyCrystal: new Item({ title: "Fury Crystal" }),
    escort: new Item({ title: "Escort" }),
    redChallengeChest: new Item({ title: "Red Challenge Chest" }),
    purpleChallengeChest: new Item({ title: "Purple Challenge Chest" }),
    dragonRocket: new Item({ title: "Dragon Rocket" }),
    orda: new Item({ title: "Orda" }),
    horde: new Item({ title: "Horde" }),
    orb: new Item({ title: "Aetherial orb", desc: "Damage it and chase it 3 times, you can also shoot it mid-air whilst moving to each location." }),
    musicRadio: new Item({ title: "Music radio" }),
}

//TODO: Decide the structure for how we store and retrieve EE steps (maybe new datastore)
/*  
    These are just the initial labels for the easter eggs.
    We will need to break these down further and make step-by-step markers 
*/
export const EasterEggTypes = {
    dieMaschineEE: "Seal the Deal", //https://callofduty.fandom.com/wiki/Seal_the_Deal
    dieMaschineWW: "D.I.E. Wonder Weapon",
    dieMaschineBonusChest: "Coffin Dance",
    dieMaschineRadioAlign: "Radio Alignment",
    dieMaschineOrdaHand: "Orda Hand",

    firebaseZEE: "Maxis Potential", //https://callofduty.fandom.com/wiki/Maxis_Potential
    firebaseZWW: "Rai K-84",
    firebaseZBonusChest: "Bunny Scare",
    firebaseZSafe: "Sergei's Safe",
    firebaseZMonkeyUpgrade: "Monkey bomb upgrade",
    firebaseZFreeJump: "Free Jump pad",

    mauerDerTotenEE: "Tin Man Heart", //https://callofduty.fandom.com/wiki/Tin_Man_Heart
    mauerDerTotenWW: "CRBR-S",
    mauerDerTotenBonusChest: "Hasenbau Club",
    mauerDerTotenTargets: "Target Practice",
    mauerDerTotenKlaus: "Klaus",

    outbreakEE1: "Ravenov Implications", //https://callofduty.fandom.com/wiki/Ravenov_Implications
    outbreakEE2: "Entrapment", //https://callofduty.fandom.com/wiki/Entrapment

    music: "Cassette Tapes",
}

// Gonna have to add a way to bring through the full description along with the unique description from the misc markers
export const OutbreakEE2Steps = {
    step2Helicopter: new Item({ title: "Crashed Helicopter", desc: `The transport chopper that the Omega Eight were using is located in the "Carved Hills", located south of the lone shack, having crashed by unknown means. Nearing it will spawn a horde needs to be eliminated, as one of the corpses is holding a message from Hugo Jager about where the surviving members of the crash went.` }),
    step3Orb: new Item({ title: "Red Aetherial Orb", desc: "The Aetherium Orb can spawn within three places and is visually distinct, having a darker hue of red and will not produce Essence upon being damaged. When damaged, it will flee like the standard variant for a total of three times before it will flee to hover over the Recon Rover to where it will stay above, unwilling to enter it." }),
}
