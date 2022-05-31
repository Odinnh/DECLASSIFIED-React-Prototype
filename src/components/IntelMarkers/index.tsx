import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import React, { useContext } from 'react'
import { LayerGroup, LayersControl } from 'react-leaflet'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider'

export const IntelMarkers = () => {
    const center: LatLngExpression = [0, 0]
    const rectangle: LatLngBoundsExpression = [
        [0, 0],
        [0, 0],
    ]
    const { intelArtifactMarkers, intelAudioMarkers } = useContext(IntelContext)
    return (
        <>
            <LayersControl.Overlay name="Intel - Audio Logs">
                <LayerGroup>
                    {intelAudioMarkers}
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Intel - Artifacts">
                <LayerGroup>
                    {intelArtifactMarkers}
                </LayerGroup>
            </LayersControl.Overlay>

            {/* <LayersControl.Overlay checked name="Misc Markers">
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
            <LayersControl.Overlay name="Easter Eggs">
                <FeatureGroup pathOptions={{ color: 'purple' }}>
                    <Popup>Popup in FeatureGroup</Popup>
                    <Circle center={[0, 0]} radius={200} />
                    <Rectangle bounds={rectangle} />
                </FeatureGroup>
            </LayersControl.Overlay> */}
        </>
    )
}
