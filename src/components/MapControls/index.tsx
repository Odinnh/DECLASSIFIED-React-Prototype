import { useContext } from 'react';
import { LayersControl } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { MapMarkers } from '../MapMarkers';

export const MapControls = () => {
    const { currentMap, currentMapGroup, isMobile } = useContext(DeclassifiedContext)
    return (
        <LayersControl position={isMobile ? "bottomright" : "topright"} collapsed={isMobile} >
            {currentMapGroup.mapLayers.map(mapLayer =>
                <LayersControl.BaseLayer
                    key={`layer-${mapLayer.id}`}
                    checked={mapLayer.id === currentMap.id /* TODO: SWAP WITH USER PREFS */}
                    name={mapLayer.title}
                >
                    {mapLayer.mapOverlay}
                </LayersControl.BaseLayer>
            )}
            <MapMarkers />
        </LayersControl>
    )
}
