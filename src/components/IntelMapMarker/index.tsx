import L, { DivIconOptions } from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { Marker, Popup } from 'react-leaflet';
import { IntelMarker } from '../../classes';
import { Faction } from '../../data/intel';

export const IntelMapMarker = ({ id, title, desc, typeDesc, loc, faction, season, img }: IntelMarker) => {
    let imgSrc = img ? `https://i.imgur.com/${img}.jpg` : 'assets/img/intelScreenshot/placeholder.png';
    // map
    const markerIcon = intelIconInit(faction, typeDesc);

    return (
        (loc !== null && loc.toString() === [0, 0].toString()) ? <></> :
            (
                <Marker position={loc} icon={markerIcon}>
                    <Popup>
                        <>
                            <h1>{title}</h1>

                            <div className="intel-content">
                                <div>
                                    <p>{desc}</p>
                                    <div className="buttonContainer" data-item={id}>
                                        {/* {collectedBtn}
                                {shareBtn}
                                {bugBtn}
                                {moreBtn} */}
                                    </div>
                                </div>
                                <img src={imgSrc} /* onClick="expandImage(this)" */ alt="Intel Location"></img>
                            </div>
                        </>
                    </Popup>
                </Marker>
            )

    )
}

const intelIconInit = (faction: Faction, type: string) => {
    var markerIcons: DivIconOptions = {
        html: ReactDOMServer.renderToString(
            <div>
                <img className='icon' src={`/assets/img/type/${type}.png`} alt="Icon" />
                <img className='background' src={`/assets/img/markers/${faction}.png`} alt="Background" />
            </div>

        ),
        className: 'intel-icon',
        iconSize: [25, 25],
        iconAnchor: [12.5, 40],
        shadowSize: [33, 44],
        shadowAnchor: [(33 / 2), 44],
        popupAnchor: [0, -25],
    }

    return L.divIcon(
        markerIcons
    );
};