import L from 'leaflet'
import { MapContainer } from 'react-leaflet'
import { DeclassifiedContextProvider } from '../../contexts/DeclassifiedContext/declassifiedContextProvider'
import { DrawerMenu } from '../DrawerMenu'
import Header from '../Header'
import { MapControls } from '../MapControls'
import { UserInterface } from '../UserInterface'
import styled from '@emotion/styled'

const StyledMapContainer = styled(MapContainer)`
    color: var(--clr-color);
    width: 100vw;
    height: 95vh;
    z-index: var(--z-index-map);
    cursor: crosshair;
    display: block;
    grid-column: 1;
    cursor: crosshair;
    float: right;
    z-index: 0;
    background-color: var(--svg-background);
`

const MapProvider = () => {
    
    return (
        <StyledMapContainer id={"worldMap"}
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
                <Header />
                <MapControls />
                <UserInterface />
                <DrawerMenu />
            </DeclassifiedContextProvider>
        </StyledMapContainer>
    )
}

export default MapProvider;