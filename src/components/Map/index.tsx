import L from 'leaflet'
import { MapContainer } from 'react-leaflet'
import { DrawerMenu } from '../DrawerMenu'
import Header from '../Header'
import { MapControls } from '../MapControls'
import { UserInterface } from '../UserInterface'
import styled from '@emotion/styled'
import { useContext } from 'react'
import { UserContext } from '../../contexts/DeclassifiedContext/userContextProvider'
import { DeclassifiedContextProvider } from '../../contexts/DeclassifiedContext/declassifiedContextProvider'

const StyledMapContainer = styled(MapContainer) <{ $isMobile?: boolean }>`
    &&&{
        color: var(--clr-color);
        width: 100vw;
        height: ${props => props.$isMobile ? "90vh" : "100vh"};
        z-index: var(--z-index-map);
        cursor: crosshair;
        display: block;
        grid-column: 1;
        float: right;
        z-index: 0;
        background-color: var(--svg-background);
    }
`

const MapProvider = () => {
    const { isMobile } = useContext(UserContext);

    return (
        <StyledMapContainer $isMobile={isMobile} id={"worldMap"}
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
            {/* <DeclassifiedContextProvider>
                <Header />
                <MapControls />
                <UserInterface />
                <DrawerMenu />
            </DeclassifiedContextProvider> */}
        </StyledMapContainer>
    )
}

export default MapProvider;