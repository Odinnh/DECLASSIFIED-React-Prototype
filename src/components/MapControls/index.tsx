import { useContext } from 'react';
import { LayersControl } from 'react-leaflet'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { IntelMarkers } from '../IntelMarkers';

export const MapControls = () => {
    const { currentMap, currentMapGroup } = useContext(IntelContext)
    return (
        <LayersControl position="topright">
            {currentMapGroup.mapLayers.map(mapLayer =>
                <LayersControl.BaseLayer
                    key={`layer-${mapLayer.id}`}
                    checked={mapLayer.id === currentMap.id /* TODO: SWAP WITH USER PREFS */}
                    name={mapLayer.title}
                >
                    {mapLayer.mapOverlay}
                </LayersControl.BaseLayer>
            )}
            <IntelMarkers />
        </LayersControl>
    )
}
