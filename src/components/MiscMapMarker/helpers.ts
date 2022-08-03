import L from "leaflet";
import { Bounds } from "./types";

export const miscIconInit = (id: string, type: string, bounds?: Bounds) => {
    const { iconSize, iconAnchor, popupAnchor } = bounds ?? {};
    return L.icon({
        iconUrl: `assets/img/icons/${type}/${id}.png`,
        iconSize: iconSize ?? [30, 30],
        iconAnchor: iconAnchor ?? [15, 15],
        popupAnchor: popupAnchor ?? [0, -15],
        className: 'misc-icon'
    });
}

export const generalIcon = miscIconInit('generalIcon', 'misc', {
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});
export const radioIcon = miscIconInit('radioIcon', 'misc', {
    iconSize: [39, 48],
    iconAnchor: [19.5, 24],
    popupAnchor: [0, -30]
});
export const riftIcon = miscIconInit('rift', 'outbreak', {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});
export const dementedIcon = miscIconInit('dementedIcon', 'outbreak', {
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -30]
});
export const fishingIcon = miscIconInit('fishIcon', 'outbreak', {

    popupAnchor: [0, -30]
});
export const monkeyIcon = miscIconInit('monkeyIcon', 'outbreak', {

    popupAnchor: [0, -30]
});
export const redRiftIcon = miscIconInit('redRift', 'outbreak', {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});

export const wunderFizzIcon = miscIconInit('wunderFizz', 'perk')
export const mysteryBoxIcon = miscIconInit('mysteryBox', 'misc')
export const arsenalIcon = miscIconInit('arsenal', 'misc', { iconAnchor: [15, 30] })
export const craftingTableIcon = miscIconInit('craftingTable', 'misc', { iconAnchor: [15, 30] })
export const wallbuyIcon = miscIconInit('wallBuy', 'misc')
export const ammoCrateIcon = miscIconInit('ammoCrate', 'misc')
export const ziplineIcon = miscIconInit('zipline', 'misc')
export const trialComputerIcon = miscIconInit('trialComputer', 'misc')
export const papMachineIcon = miscIconInit('papMachine', 'misc')