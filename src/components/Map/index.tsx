import L from 'leaflet'
import { MapContainer } from 'react-leaflet'
import { DeclassifiedContextProvider } from '../../contexts/DeclassifiedContext/declassifiedContextProvider'
import { DrawerMenu } from '../DrawerMenu'
import Header from '../Header'
import { MapControls } from '../MapControls'
import { UserInterface } from '../UserInterface'

const MapProvider = () => {
    
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
            zoomControl={false}
            maxZoom={5}
            minZoom={0.1}
            tap={true}
            tapTolerance={30}
            /* noWrap={true} */
            doubleClickZoom={false}
            zoomDelta={0.5}
            wheelPxPerZoomLevel={80}
            zoomSnap={0}
            maxBoundsViscosity={1.0}
        >
            <DeclassifiedContextProvider>
                {/* <Header /> */}
                <MapControls />
                <UserInterface />
                <DrawerMenu />
            </DeclassifiedContextProvider>
        </MapContainer>
    )
}

export default MapProvider;