
import { Icon } from '@mui/material';
import React, { useContext } from 'react'
import { useMapEvents } from 'react-leaflet';
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus, faFolderOpen, faGear, faList  } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';


export const UserInterface = () => {
    const { drawerState, toggleDrawer } = useContext(IntelContext);
    const mapInstance = useMapEvents({});

    return (
        <div id="ui">
            <div>
                <div className="zoom-container ui">
                    <button className="zoom- btn ui" onClick={() => mapInstance.zoomIn()}><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon ></button>
                    <button className="zoom- btn ui" onClick={() => mapInstance.zoomOut()}> <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon ></button>
                </div>
                {/* <div>
                    <!-- <button className="btn ui" id="color-scheme-toggle">
                        <i className="fas fa-layer-group"></i>
                    </button> -->
                </div> */}
            </div>
            <div>
                <div>
                    <button className="btn ui" onClick={toggleDrawer('bottom', true)}><FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
                    </button>
                    <button className="btn ui" onClick={toggleDrawer('bottom', true)}><FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                    </button>
                    <a className="btn ui" href="./challenge.html"><FontAwesomeIcon icon={faList}></FontAwesomeIcon > </a>
                </div>
                <div>
                    {/* <button className="btn ui" id="color-scheme-toggle" onClick="setColorScheme()"><i className="fas fa-moon"></i>
                    </button> */}
                    <a title="Join us on discord!" href="https://discord.gg/4Xqj8XntFe" target="_blank" className="btn ui"
                        id="discord"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon > </a>
                    <a title="Help us out on Github!" href="https://github.com/Miss-placed/DECLASSIFIED" target="_blank"
                        className="btn ui" id="github"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon > </a>
                </div>
            </div>
        </div>
    )
}
