import { Marker, Popup } from 'react-leaflet'
import { MiscMarker } from '../../classes';

export const MiscMapMarker = ({ id, title, desc, typeDesc, loc, icon }: MiscMarker) => {
    const markerIcon = icon;

    return (
        <Marker key={id} position={loc} icon={markerIcon}>
            <Popup>
                <div className="misc-content">
                    <h1>{title}</h1>
                    <div>
                        <div className="buttonContainer" data-item={id}>
                            <p>{desc}</p>

                        </div>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}