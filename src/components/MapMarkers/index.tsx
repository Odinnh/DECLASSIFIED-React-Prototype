import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { DefaultIcon } from '../DefaultIcon'

export const MapMarkers = () => {
    return (
        <Marker position={[51.505, -0.09]} icon={DefaultIcon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    )
}
