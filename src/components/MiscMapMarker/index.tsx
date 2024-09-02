import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { MiscMarker } from '../../classes';
import { Paper, styled, Typography } from '@mui/material';
import { MiscIconTypes } from '../../data/misc';

const StyledPopup = styled(Popup)`
    background-color: var(--clr-bg-inverted);
    border-radius: 12px !important;
    box-shadow: unset !important;
    margin: 0 !important;
    .leaflet-popup-content-wrapper {
        .leaflet-popup-content {
            padding: 0 !important;
            margin: 0 !important;
        }
    }
    .leaflet-popup-close-button {
        display: none !important;
    }
`

const MiscDetailItem = styled(Paper)`
    background-color: unset;
    border-radius: unset;
    padding: 8px;
    /* width:300px; */
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const MiscDescription = styled(Typography)`
    text-align: center;
    margin: 0px !important;
    font-size: 0.7rem;
`

const PopupTitle = styled(Typography)`
    font-size: 1.1rem;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
`

export const MiscMapMarker = ({ id, title, desc, icon, typeDesc, loc }: MiscMarker) => {
    const renderedIcon = miscIconInit(icon);

    return (
        <Marker position={loc} icon={renderedIcon}>
            <StyledPopup>
                <MiscDetailItem>
                    <PopupTitle variant='h2'>
                        {title}
                    </PopupTitle>
                    <MiscDescription>
                        {desc}
                    </MiscDescription>
                </MiscDetailItem>
            </StyledPopup>
        </Marker>
    )
}

export const miscIconInit = (id?: string) => {
    const { iconSize, iconAnchor, popupAnchor } = (id && customMiscIconBounds[id]) ?? {};
    return L.icon({
        iconUrl: `assets/img/markers/${(id ?? '').toLowerCase()}.${svgIcons[id ?? ''] ? 'svg' : 'png' }`,
        iconSize: iconSize ?? [30, 30],
        iconAnchor: iconAnchor ?? [15, 15],
        popupAnchor: popupAnchor ?? [0, -15],
        className: 'misc-icon'
    });
}

const svgIcons = {
    [MiscIconTypes.rampageInducer]: true,
    [MiscIconTypes.portal]: true,
    [MiscIconTypes.zipline]: true,
    [MiscIconTypes.ziplineUp]: true,
    [MiscIconTypes.ziplineDown]: true,
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
    [MiscIconTypes.rampageInducer]: { popupAnchor: [5, -20], iconSize: [40, 40] },
    [MiscIconTypes.portal]: { popupAnchor: [5, -20], iconSize: [40, 40] },
    [MiscIconTypes.zipline]: { popupAnchor: [5, -20], iconSize: [40, 40] },
    [MiscIconTypes.ziplineUp]: { popupAnchor: [5, -20], iconSize: [40, 40] },
    [MiscIconTypes.ziplineDown]: { popupAnchor: [5, -20], iconSize: [40, 40] },
}