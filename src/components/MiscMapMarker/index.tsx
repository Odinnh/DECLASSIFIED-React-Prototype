import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { MiscMarker } from '../../classes';
import { MiscIconTypes } from '../../data/intel';

export const MiscMapMarker = ({ id, title, desc, icon, typeDesc, loc }: MiscMarker) => {
    const renderedIcon = miscIconInit(icon);

    return (
        <Marker position={loc} icon={renderedIcon}>
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

export const miscIconInit = (id?: string) => {
    const { iconSize, iconAnchor, popupAnchor } = (id && customMiscIconBounds[id]) ?? {};
    return L.icon({
        iconUrl: `assets/img/markers/${(id ?? '').toLowerCase()}.png`,
        iconSize: iconSize ?? [30, 30],
        iconAnchor: iconAnchor ?? [15, 15],
        popupAnchor: popupAnchor ?? [0, -15],
        className: 'misc-icon'
    });
}

const customMiscIconBounds = {
    [MiscIconTypes.general]: {
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    },
    [MiscIconTypes.radio]: {
        iconSize: [39, 48],
        iconAnchor: [19.5, 24],
        popupAnchor: [0, -30]
    },
    [MiscIconTypes.rift]:
    {
        iconSize: [22, 48],
        iconAnchor: [11, 24],
        popupAnchor: [0, -30]
    },
    [MiscIconTypes.demented]: {
        iconSize: [48, 48],
        iconAnchor: [24, 24],
        popupAnchor: [0, -30]
    },
    [MiscIconTypes.fishing]: {
        popupAnchor: [0, -30]
    },
    [MiscIconTypes.monkey]: {
        popupAnchor: [0, -30]
    },
    [MiscIconTypes.redRift]: {
        iconSize: [22, 48],
        iconAnchor: [11, 24],
        popupAnchor: [0, -30]
    },
    [MiscIconTypes.arsenal]: { iconAnchor: [15, 30] },
    [MiscIconTypes.craftingTable]: { iconAnchor: [15, 30] },
}