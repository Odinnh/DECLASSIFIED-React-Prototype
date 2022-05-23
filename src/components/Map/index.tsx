import L from 'leaflet'
import { useContext } from 'react'
import { MapContainer } from 'react-leaflet'
import { IntelContext, IntelContextProvider } from '../../contexts/IntelContext/IntelContextProvider'
import { MapLayers } from '../../helpers/mapLayers'
import Header from '../Header'
import { IntelMenu } from '../IntelMenu'
import { MapControls } from '../MapControls'
import { MapMarkers } from '../MapMarkers'

const MapProvider = () => {
    const { currentMap } = useContext(IntelContext);
    console.log("currentMap", currentMap)

    return (
        <MapContainer id={"worldMap"}
            center={[256, 256]}
            zoom={0.8}
            scrollWheelZoom={true}
            crs={L.CRS.Simple}
            maxBounds={[
                [-256, -256],
                [768, 768]
            ]}
            maxZoom={5}
            minZoom={0.1}
/*             layers={[
                MapLayers[currentMap].Layer
            ]} */
            tap={true}
            tapTolerance={30}
            /* noWrap={true} */
            doubleClickZoom={false}
            zoomDelta={0.5}
            wheelPxPerZoomLevel={80}
            zoomSnap={0}
            maxBoundsViscosity={1.0}
        >
            <IntelContextProvider>
                <Header />
                <MapMarkers />
                <MapControls />
                <IntelMenu />
            </IntelContextProvider>
        </MapContainer>
    )
}

export default MapProvider;