import styled from '@emotion/styled';
import BugReportIcon from '@mui/icons-material/BugReport';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import { Accordion, AccordionDetails, AccordionSummary, Button, Icon, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { DefaultPOIData, IIntelItem } from '../../data/intel';
import { CustomImage } from '../CustomImage';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../data/db';
import { deleteCollectedIntel, addCollectedIntel } from '../../data/dataAccessLayer';
import { useMapEvents } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { GetMapById } from '../../data/mapDetails';
import { redirectToGithub } from '../../helpers/github';

export interface IIntelItemWithHandler extends IIntelItem {
    notification: (intelId: string) => void;
    isMarker?: boolean;
}

const StyledAccordion = styled(Accordion)`
    background-color: var(--clr-bg-inverted);

    .collected {
        background: linear-gradient(245deg, 
            rgba(255, 255, 255, 0) 0%, 
            var(--clr-green) 0%, 
            var(--clr-green) 15%, 
            rgba(255, 255, 255, 0) 10%);
        svg[data-testid="ExpandMoreIcon"] {
            color: var(--clr-white);
        }
    }

    .intel-item-header[data-faction="Requiem"] .icon {
        background-color: var(--clr-blue);
    }

    .intel-item-header[data-faction="Omega"] .icon {
        background-color: var(--clr-red);
    }

    .intel-item-header[data-faction="Maxis"] .icon {
        background-color: var(--clr-blue-d);
    }

    .intel-item-header[data-faction="Dark Aether"] .icon {
        background-color: var(--clr-purple);
    }

    .intelTitle {
        padding-left: 7px;
    }
`
const IntelSummary = styled(AccordionSummary)`
    padding-left: 0px;
    min-height: unset;

    .MuiTypography-h2 {
        font-size: 1.1rem;
    }

    .Mui-expanded &&& {
        min-height: unset;
        margin: unset;
    }

    .MuiAccordionSummary-content,
    .MuiAccordionSummary-content.MuiAccordionSummary-contentGutters {
        align-items: center;
        margin: 0px;
        width: 100%;
        overflow: hidden;
    }

    .icon {
        height: 100%;
        padding: 10px;
    }

    .intelTitle {
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        text-wrap: pretty;
        text-align: center;
    }
`

const StyledAccordionDetails = styled(AccordionDetails)`
    img {
        width: 100%;
    }
    padding: 0px;
`

const IntelDetails = styled.div`
    h3 {
        font-size: 0.8rem;
    }
    p {
        font-size: 0.7rem;
    }
    svg {
        font-size: 1.2rem;
    }
        
    padding: 8px;
`

const StyledIntelActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const IntelSubheading = styled(Typography)`
    font-weight: bold;
    text-align: center;
`

const IntelDescription = styled(Typography)`
    text-align: center;
`

export const IntelDetailsItem = ({
    id,
    faction,
    season,
    typeDesc,
    loc,
    map,
    title,
    desc,
    img = undefined,
    notification,
    isMarker = false
}: IIntelItemWithHandler) => {
    const { setCurrentMapWithValidation: setCurrentMap, currentMap } = useContext(DeclassifiedContext);
    const mapInstance = useMapEvents({});
    const [expanded, setExpanded] = useState(false);
    const IntelHasLocation = loc !== DefaultPOIData.nullLoc;
    const IntelIsOnAnotherMap = map !== currentMap.id;
    const isCollected = useLiveQuery(() => db.intelCollected.get(id));
    const mapItem = GetMapById(map!);

    return (
        <StyledAccordion defaultExpanded={isMarker} onChange={() => setExpanded(!expanded)} >
            <IntelSummary
                expandIcon={isMarker ? null : <ExpandMoreIcon />}
                aria-controls="intel-item"
                className={`intel-item-header ${isCollected ? 'collected' : ''}`}
                data-faction={faction}
                data-type={typeDesc}
            >
                <img className='icon' src={`/assets/img/markers/${typeDesc.toLowerCase()}.png`} alt="Icon" />
                <Typography
                    variant='h2'
                    className='intelTitle'>
                    {title}
                </Typography>
            </IntelSummary>
            {isMarker || expanded ? (
                <StyledAccordionDetails>
                    <CustomImage src={img ? `https://i.imgur.com/${img}m.jpg` : undefined} altText='Placeholder' />
                    <IntelDetails>
                        <IntelSubheading variant='h3'>
                            {mapItem?.title} - {season} - {typeDesc} - {faction}
                        </IntelSubheading>
                        <IntelDescription>
                            {desc}
                        </IntelDescription>
                        <StyledIntelActionContainer>
                            {IntelHasLocation && mapItem?.mapCanRender ?
                                <Button onClick={() => {
                                    if (IntelIsOnAnotherMap) {

                                        if (mapItem && mapItem.mapCanRender) {
                                            var mapSetResult = setCurrentMap(mapItem);
                                            if (mapSetResult) {
                                                mapInstance.flyTo(loc, 4);
                                            }
                                        }
                                    } else {
                                        mapInstance.flyTo(loc, 4);
                                    }
                                }}><LocationOnIcon htmlColor='var(--clr-blue)' /></Button>
                                : <Button disabled><LocationOnIcon htmlColor='var(--clr-blue)' /></Button>
                            }
                            {isCollected ? (<Button onClick={() => deleteCollectedIntel(id)} ><CheckBoxIcon htmlColor='var(--clr-blue)' /></Button>) : (<Button onClick={() => addCollectedIntel(id)}><CheckBoxOutlineBlankIcon /></Button>)}
                            <Button><ShareIcon htmlColor='var(--clr-blue)' onClick={() => {
                                navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}?id=${id}`);
                                notification(id)
                            }} /></Button>
                            <Button onClick={() => redirectToGithub(id, typeDesc, "Fix", mapItem)} ><BugReportIcon htmlColor='var(--clr-red)' /></Button>
                        </StyledIntelActionContainer>
                    </IntelDetails>
                </StyledAccordionDetails>) : (null)}

        </StyledAccordion>
    )
}
