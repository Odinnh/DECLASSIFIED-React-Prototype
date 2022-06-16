import L, { DivIconOptions, PointExpression } from 'leaflet'
import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { IntelMarker, MapItem } from '../../helpers/models'
import { DefaultIcon } from '../DefaultIcon'

export const IntelMapMarker = ({ id, title, desc, typeDesc, loc, faction, season, img }: IntelMarker) => {
    let imgSrc = img ? `https://i.imgur.com/${img}.jpg` : 'assets/img/intelScreenshot/placeholder.png';
    // map
    const markerIcon = intelIconInit(faction, typeDesc);

    return (
        <Marker key={id} position={loc} icon={markerIcon}>
            <Popup>
                <>
                    <h1>{title}</h1>

                    <div className="intel-content">
                        <div>
                            <p>{desc}</p>
                            <div className="buttonContainer" data-item={id}>
                                {/* {collectedBtn}
                                {shareBtn}
                                {bugBtn}
                                {moreBtn} */}
                            </div>
                        </div>
                        <img src={imgSrc} /* onClick="expandImage(this)" */></img>
                    </div>
                </>
            </Popup>
        </Marker>
    )
}

function intelIconInit(faction, type) {
    const iconHtml =
        `<div>
        <img class="icon" src="assets/img/icons/type/${type}.png" alt="Icon">
        <img class="background" src="assets/img/icons/markers/${faction}.png" alt="Background">
        <!-- Shadow here -->
    </div>`;

    var markerIcons: DivIconOptions = {
        html: iconHtml,
        className: 'intel-icon',
        iconSize: [25, 25],
        iconAnchor: [12.5, 40],
        shadowSize: [33, 44],
        shadowAnchor: [(33 / 2), 44],
        popupAnchor: [0, -25],
    }
    return L.divIcon(
        markerIcons
    );
}