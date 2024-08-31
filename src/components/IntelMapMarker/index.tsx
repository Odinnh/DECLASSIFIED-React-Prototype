import L, { DivIconOptions } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { Faction, IntelItem } from '../../data/intel';
import { intelIconInit } from '../../helpers/icons';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, DeclassifiedIntelCollected } from '../../data/db';
import { useRef } from 'react';
import { IntelDetailsItem } from '../IntelDetailsItem';
import styled from '@emotion/styled';
import NotificationBanner from '../NotificationBanner/NotificationBanner';

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

export const IntelMapMarker = ({ id, title, desc, typeDesc, loc, faction, season, img, map }: IntelItem) => {
    const isCollected = useLiveQuery(() => db.intelCollected.get(id ?? ""));
    const markerIcon = renderLeafletIcon(isCollected, faction, typeDesc);
    const snackbarRef = useRef<{
        handleClick: (msg: string) => void;
    }>(null);
    const notification = (intelId: string) => {
        if (snackbarRef.current) {
            snackbarRef.current.handleClick(`Copied Link To Clipboard`);
        }
    };

    return (
        (loc !== null && loc.toString() === [0, 0].toString()) ? <></> :
            (<>
                <Marker position={loc} icon={markerIcon}>
                    <StyledPopup>
                        <IntelDetailsItem
                            key={id}
                            id={id!}
                            faction={faction}
                            season={season}
                            typeDesc={typeDesc}
                            loc={loc}
                            map={map}
                            title={title}
                            desc={desc ?? ''}
                            img={img}
                            notification={notification}
                            isMarker={true} />
                    </StyledPopup>
                </Marker>
                <NotificationBanner ref={snackbarRef} />
            </>
            )

    )
}

const renderLeafletIcon = (isCollected: DeclassifiedIntelCollected | undefined, faction: Faction, type: string) => {
    var markerIcons: DivIconOptions = {
        html: intelIconInit(faction, type),
        className: `intel-icon ${isCollected ? 'collected-marker' : ''}`,
        iconSize: [25, 25],
        iconAnchor: [12.5, 40],
        shadowSize: [33, 44],
        shadowAnchor: [(33 / 2), 44],
        popupAnchor: [0, -25]
    }

    return L.divIcon(
        markerIcons
    );
};