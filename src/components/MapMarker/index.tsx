import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { IntelMarker, MapItem } from '../../helpers/models'
import { DefaultIcon } from '../DefaultIcon'

export const IntelMapMarker = ({id, faction, season, typeDesc, loc, desc, img}: IntelMarker) => {
    return (
        <Marker position={loc} icon={DefaultIcon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    )
}