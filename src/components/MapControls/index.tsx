import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import React from 'react'
import { Circle, FeatureGroup, LayerGroup, LayersControl, Marker, Popup, Rectangle } from 'react-leaflet'

export const MapControls = () => {
    const center : LatLngExpression = [0, 0]
    const rectangle : LatLngBoundsExpression = [
        [0, 0],
        [0, 0],
    ]
    return (
        <LayersControl position="topright">
            <LayersControl.Overlay name="Marker with popup">
                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Layer group with circles">
                <LayerGroup>
                    <Circle
                        center={center}
                        pathOptions={{ fillColor: 'blue' }}
                        radius={200}
                    />
                    <Circle
                        center={center}
                        pathOptions={{ fillColor: 'red' }}
                        radius={100}
                        stroke={false}
                    />
                    <LayerGroup>
                        <Circle
                            center={[0, 0]}
                            pathOptions={{ color: 'green', fillColor: 'green' }}
                            radius={100}
                        />
                    </LayerGroup>
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Feature group">
                <FeatureGroup pathOptions={{ color: 'purple' }}>
                    <Popup>Popup in FeatureGroup</Popup>
                    <Circle center={[0, 0]} radius={200} />
                    <Rectangle bounds={rectangle} />
                </FeatureGroup>
            </LayersControl.Overlay>
        </LayersControl>
    )
}
