import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { IntelMarker, MapItem } from '../../helpers/models'
import { DefaultIcon } from '../DefaultIcon'

export const IntelMapMarker = ({ id, title, desc, icon, layer, typeDesc, loc, faction, season, img }: IntelMarker) => {
    let imgSrc = img ? `https://i.imgur.com/${img}.jpg` :'assets/img/intelScreenshot/placeholder.png';

    return (
        <Marker key={id} position={loc} icon={DefaultIcon}>
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