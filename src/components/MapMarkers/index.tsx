import React, { useContext, useState } from 'react'
import { LayerGroup, LayersControl } from 'react-leaflet'
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider'
import { IntelStore, IntelType } from '../../data/intel'
import { MiscStore } from '../../data/misc';
import { IntelMapMarker } from '../IntelMapMarker';
import { MiscMapMarker } from '../MiscMapMarker';

const renderIntelMapMarkers = (mapId: string, intelType: IntelType): JSX.Element[] => {
    if (mapId) {
        return IntelStore
            .filter(intel => (intel.map === mapId && intel.typeDesc === intelType))
            .map(intel => {
                return (<IntelMapMarker {...intel} />);
            });
    } else {
        return [<></>]
    }
};

const renderMiscMapMarkers = (mapId: string): JSX.Element[] => {
    if (mapId) {
        console.log(mapId);
        console.log(MiscStore);
        
        
        return MiscStore[mapId].map(misc => {
            return (<MiscMapMarker {...misc} />)
        });

    } else {
        return [<></>]
    }
};

export const MapMarkers = () => {
    // const center: LatLngExpression = [0, 0]
    // const rectangle: LatLngBoundsExpression = [
    //     [0, 0],
    //     [0, 0],
    // ]
    const { currentMap } = useContext(DeclassifiedContext)
    const [isChecked, setIsChecked] = useState(true);

    console.log(currentMap);

    return (
        <>
            <LayersControl.Overlay name="Intel - Audio Logs" checked={isChecked /* TODO: SWAP WITH USER PREFS */}>
                <LayerGroup>
                    {renderIntelMapMarkers(currentMap.id!, IntelType.Audio)}
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Intel - Artifacts" checked={isChecked /* TODO: SWAP WITH USER PREFS */}>
                <LayerGroup>
                    {renderIntelMapMarkers(currentMap.id!, IntelType.Artifact)}
                </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Misc Markers" checked={isChecked /* TODO: SWAP WITH USER PREFS */}>
                <LayerGroup>
                    {renderMiscMapMarkers(currentMap.id!)}
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
