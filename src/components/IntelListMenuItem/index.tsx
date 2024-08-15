import styled from '@emotion/styled';
import BugReportIcon from '@mui/icons-material/BugReport';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { IIntelItem } from '../../data/intel';
import { CustomImage } from '../CustomImage';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../data/db';
import { deleteCollectedIntel, addCollectedIntel } from '../../data/dataAccessLayer';

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
    const [expanded, setExpanded] = useState(false);

    const isCollected = useLiveQuery(() => db.intelCollected.get(id));


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
                    <Button><LocationOnIcon /></Button>
                    {isCollected ? (<Button onClick={() => deleteCollectedIntel(id)} ><CheckBoxIcon /></Button>) : (<Button onClick={() => addCollectedIntel(id)}><CheckBoxOutlineBlankIcon /></Button>)}
                    <Button><ShareIcon /></Button>
                    <Button><BugReportIcon /></Button>
                </StyledIntelActionContainer>
            </StyledAccordionDetails>) : (null)}

        </Accordion>
    )
}
