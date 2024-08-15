import styled from '@emotion/styled';
import BugReportIcon from '@mui/icons-material/BugReport';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { DefaultPOIData, IIntelItem } from '../../data/intel';
import { CustomImage } from '../CustomImage';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../data/db';
import { deleteCollectedIntel, addCollectedIntel } from '../../data/dataAccessLayer';
import { useMapEvents } from 'react-leaflet';
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { GetMapById } from '../../data/mapDetails';

const StyledIntelActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledAccordionDetails = styled(AccordionDetails)`
    img {
        width: 100%;
    }
`

const IntelSubheading = styled(Typography)`
    font-weight: bold;
    text-align: center;
`

const IntelDescription = styled(Typography)`
    text-align: center;
`

export const IntelListMenuItem = ({
    id,
    faction,
    season,
    typeDesc,
    loc,
    map,
    title,
    desc,
    img = undefined
}: IIntelItem) => {
    const { setCurrentMapWithValidation: setCurrentMap, currentMap } = useContext(DeclassifiedContext);
    const mapInstance = useMapEvents({});
    const [expanded, setExpanded] = useState(false);
    const IntelHasLocation = loc !== DefaultPOIData.nullLoc;
    const IntelIsOnAnotherMap = map !== currentMap.id;
    const isCollected = useLiveQuery(() => db.intelCollected.get(id));
    var mapItem = GetMapById(map!);

    return (
        <Accordion onChange={() => setExpanded(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="intel-item"
                className="intel-item-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            {expanded ? (<StyledAccordionDetails>
                <CustomImage src={img ? `https://i.imgur.com/${img}m.jpg` : undefined} altText='Placeholder' />
                <IntelSubheading>
                    {map} - {season} - {typeDesc} - {faction}
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
                        }}><LocationOnIcon /></Button>
                        : <Button disabled><LocationOnIcon /></Button>
                    }
                    {isCollected ? (<Button onClick={() => deleteCollectedIntel(id)} ><CheckBoxIcon /></Button>) : (<Button onClick={() => addCollectedIntel(id)}><CheckBoxOutlineBlankIcon /></Button>)}
                    <Button><ShareIcon /></Button>
                    <Button><BugReportIcon /></Button>
                </StyledIntelActionContainer>
            </StyledAccordionDetails>) : (null)}

        </Accordion>
    )
}
