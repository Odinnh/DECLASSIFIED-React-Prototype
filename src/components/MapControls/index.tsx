import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import { useContext } from 'react';
import { Circle, FeatureGroup, LayerGroup, LayersControl, Marker, Popup, Rectangle } from 'react-leaflet'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { DefaultIcon } from '../DefaultIcon';

export const MapControls = ({ MapLayers }) => {
    const center: LatLngExpression = [0, 0]
    const rectangle: LatLngBoundsExpression = [
        [0, 0],
        [0, 0],
    ]
    const { intelArtifactMarkers, intelAudioMarkers } = useContext(IntelContext)

    return (
        <LayersControl position="topright">
            {MapLayers.map(mapLayer =>
                <LayersControl.BaseLayer key={mapLayer.id} checked={mapLayer === MapLayers[0]} name={mapLayer.title}>
                    {mapLayer.mapOverlay}
                </LayersControl.BaseLayer>
            )}
            <LayersControl.Overlay checked name="Intel- Artifact Markers">
                <LayerGroup>
                    {intelArtifactMarkers}
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Intel- Artifact Markers">
                {intelAudioMarkers}
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Misc Markers">
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
            </LayersControl.Overlay>
        </LayersControl>
    )
}
