import L, { DivIconOptions } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import { IntelMarker } from '../../helpers/models'
import ReactDOMServer from 'react-dom/server';
import { Faction, IntelType } from '../../data/intel';

const iconImages = {
    [IntelType.Artifact]: require('../../assets/img/icons/type/artifacts.png'),
    [IntelType.Audio]: require('../../assets/img/icons/type/audio logs.png')
}
const iconBackgrounds = {
    [Faction.DarkAether]: require('../../assets/img/icons/markers/dark aether.png'),
    [Faction.Maxis]: require('../../assets/img/icons/markers/maxis.png'),
    [Faction.Omega]: require('../../assets/img/icons/markers/omega.png'),
    [Faction.Requiem]: require('../../assets/img/icons/markers/requiem.png')
}

export const IntelMapMarker = ({ id, title, desc, typeDesc, loc, faction, season, img }: IntelMarker) => {
    let imgSrc = img ? `https://i.imgur.com/${img}.jpg` : 'assets/img/intelScreenshot/placeholder.png';
    // map
    const markerIcon = intelIconInit(faction, typeDesc);

    return (
        <Marker key={id} position={loc} icon={markerIcon}>
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
}

const intelIconInit = (faction: Faction, type: string) => {
    const iconImage = iconImages[type];
    const iconBackground = iconBackgrounds[faction];

    var markerIcons: DivIconOptions = {
        html: ReactDOMServer.renderToString(
            <div>
                <img className='icon' src={iconImage} alt="Icon" />
                <img className='background' src={iconBackground} alt="Background" />
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