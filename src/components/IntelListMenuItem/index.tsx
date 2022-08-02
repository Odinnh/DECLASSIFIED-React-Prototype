import styled from '@emotion/styled'
import { Accordion, Typography, Button, AccordionDetails, AccordionSummary } from '@mui/material'
import { CustomImage } from '../CustomImage'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BugReportIcon from '@mui/icons-material/BugReport';
import { IntelItem } from '../../data/intel';
import { useState } from 'react';

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

}: IntelItem) => {
    const [expanded, setExpanded] = useState(false);


    return (
        <Accordion onChange={() => setExpanded(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="intel-item"
                id="intel-item-header"
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
                    <Button><CheckBoxOutlineBlankIcon /></Button>
                    <Button><ShareIcon /></Button>
                    <Button><BugReportIcon /></Button>
                </StyledIntelActionContainer>
            </StyledAccordionDetails>) : (null)}

        </Accordion>
    )
}
