import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { MiscMarker } from '../../classes';
import { IconTypes } from '../../data/intel';

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
    [IconTypes.general]: {
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    },
    [IconTypes.radio]: {
        iconSize: [39, 48],
        iconAnchor: [19.5, 24],
        popupAnchor: [0, -30]
    },
    [IconTypes.rift]:
    {
        iconSize: [22, 48],
        iconAnchor: [11, 24],
        popupAnchor: [0, -30]
    },
    [IconTypes.demented]: {
        iconSize: [48, 48],
        iconAnchor: [24, 24],
        popupAnchor: [0, -30]
    },
    [IconTypes.fishing]: {
        popupAnchor: [0, -30]
    },
    [IconTypes.monkey]: {
        popupAnchor: [0, -30]
    },
    [IconTypes.redRift]: {
        iconSize: [22, 48],
        iconAnchor: [11, 24],
        popupAnchor: [0, -30]
    },
    [IconTypes.arsenal]: { iconAnchor: [15, 30] },
    [IconTypes.craftingTable]: { iconAnchor: [15, 30] },
}