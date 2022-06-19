import L from 'leaflet'
import { useContext } from 'react'
import { MapContainer } from 'react-leaflet'
import { IntelContext, IntelContextProvider } from '../../contexts/IntelContext/IntelContextProvider'
import Header from '../Header'
import { IntelMenu } from '../IntelMenu'
import { MapControls } from '../MapControls'
import { UserInterface } from '../UserInterface'

const MapProvider = () => {
    const { currentMap } = useContext(IntelContext);
    // console.log("currentMap: ", currentMap)

    
/*     const currentLayer = new L.LayerGroup();


    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svgElement.setAttribute('viewBox', "0 0 200 200");

    L.svgOverlay(svgElement, ImageBounds).addTo(currentLayer); */
    
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
/*             layers={[
                currentLayer

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
                <MapControls />
                <UserInterface />
                <IntelMenu />
            </IntelContextProvider>
        </MapContainer>
    )
}

export default MapProvider;