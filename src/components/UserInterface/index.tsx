import { useCallback, useContext, useEffect, useRef } from 'react'
import { useMapEvent, useMapEvents } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus, faFolderOpen, faGear } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from '@emotion/styled';
import { useUserContext } from '../../contexts/DeclassifiedContext/userContextProvider';
import NotificationBanner from '../NotificationBanner/NotificationBanner';

const StyledUiContainer = styled.div<{ $isMobile?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    width: 100vw;
    height: 100svh;
    bottom: 0;
    padding: 20px;
    z-index: var(--z-index-ui);
    pointer-events: none;
    
    >div{
    display:flex;
    justify-content: ${props => props.$isMobile ? "flex-start" : "space-between"};

    .zoom-container {
        visibility: ${props => props.$isMobile ? "hidden" : "visible"};
    }
    }
`

export const UserInterface = () => {
    const { toggleDrawer } = useContext(DeclassifiedContext);
    const { isMobile, isDebugMode, setNotificationDelegate } = useUserContext();
    const mapInstance = useMapEvents({});

    const snackbarRef = useRef<{
        handleClick: (msg: string) => void;
    }>(null);

    const triggerNotification = useCallback((notificationMessage: string) => {
        if (snackbarRef.current) {
            snackbarRef.current.handleClick(notificationMessage);
        }
    }, []);

    useEffect(() => {
        setNotificationDelegate(triggerNotification);
    }, [setNotificationDelegate, triggerNotification]);


    useMapEvent("click", (props) => {
        let location = "[" + props.latlng.lat + ", " + props.latlng.lng + "]";
        if (isDebugMode) {
            navigator.clipboard.writeText(location);
            triggerNotification("Location Copied to Clipboard");
        }
        // TODO : Add the ability to submit a new location to the map
        // else if (app.submittingLocation) {
        //     redirectToGithub({ itemType: app.currentContribType, issueType: "New", location: location });
        // }
    });

    return (
        <>
            <StyledUiContainer $isMobile={isMobile} id="ui">
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
                    <div className="bottom-left-ui">
                        <button className="btn ui" onClick={toggleDrawer(true)}><FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
                        </button>
                        <button className="btn ui" onClick={toggleDrawer(true)}><FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </button>
                        {/* <a className="btn ui" href="./challenge.html"><FontAwesomeIcon icon={faList}></FontAwesomeIcon > </a> */}
                    </div>
                    <div className="bottom-right-ui">
                        {/* <button className="btn ui" id="color-scheme-toggle" onClick="setColorScheme()"><i className="fas fa-moon"></i>
                    </button> */}
                        <a title="Join us on discord!" href="https://discord.gg/4Xqj8XntFe" target="_blank" className="btn ui"
                            id="discord" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon > </a>
                        <a title="Help us out on Github!" href="https://github.com/Miss-placed/DECLASSIFIED" target="_blank"
                            className="btn ui" id="github" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon > </a>
                    </div>
                </div>
            </StyledUiContainer>
            <NotificationBanner ref={snackbarRef} />
        </>
    )
}
