import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet'
import { MiscMarker } from '../../classes';
import { Bounds } from './types';

export const MiscMapMarker = ({ id, title, desc, typeDesc, loc }: MiscMarker) => {

    return (
        <Marker key={id} position={loc} icon={generalIcon}>
            <Popup>
                <div className="misc-content">
                    <h1>{title}</h1>
                    <div>
                        <div className="buttonContainer" data-item={id}>
                            <p>{desc}</p>

                        </div>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export const miscIconInit = (id: string, bounds?: Bounds) => {
    const { iconSize, iconAnchor, popupAnchor } = bounds ?? {};
    return L.icon({
        iconUrl: `assets/img/icons/${id}.png`,
        iconSize: iconSize ?? [30, 30],
        iconAnchor: iconAnchor ?? [15, 15],
        popupAnchor: popupAnchor ?? [0, -15],
        className: 'misc-icon'
    });
}

export const generalIcon = miscIconInit('generalIcon', {
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});
export const radioIcon = miscIconInit('radioIcon', {
    iconSize: [39, 48],
    iconAnchor: [19.5, 24],
    popupAnchor: [0, -30]
});
export const riftIcon = miscIconInit('rift', {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});
export const dementedIcon = miscIconInit('dementedIcon', {
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -30]
});
export const fishingIcon = miscIconInit('fishIcon', {

    popupAnchor: [0, -30]
});
export const monkeyIcon = miscIconInit('monkeyIcon', {

    popupAnchor: [0, -30]
});
export const redRiftIcon = miscIconInit('redRift', {
    iconSize: [22, 48],
    iconAnchor: [11, 24],
    popupAnchor: [0, -30]
});

export const wunderFizzIcon = miscIconInit('wunderFizz')
export const mysteryBoxIcon = miscIconInit('mysteryBox')
export const arsenalIcon = miscIconInit('arsenal', { iconAnchor: [15, 30] })
export const craftingTableIcon = miscIconInit('craftingTable', { iconAnchor: [15, 30] })
export const wallbuyIcon = miscIconInit('wallBuy')
export const ammoCrateIcon = miscIconInit('ammoCrate')
export const ziplineIcon = miscIconInit('zipline')
export const trialComputerIcon = miscIconInit('trialComputer')
export const papMachineIcon = miscIconInit('papMachine')