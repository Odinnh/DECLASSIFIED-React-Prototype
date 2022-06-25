import { Accordion, AccordionSummary, Typography, AccordionDetails, AccordionActions, Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BugReportIcon from '@mui/icons-material/BugReport';

const StyledIntelList = styled.div`
    background-color: var(--clr-grey-d);
    padding: 10px;
`

const StyledIntelActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledAccordionDetails = styled(AccordionDetails)`
    img {
        width: 100%;
    }
`

export const IntelList = () => {
    const [imgLoaded, setImageLoaded] = useState(false);

    return (
        <StyledIntelList >
            <Accordion>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="intel-item"
                    id="intel-item-header"
                >
                    <Typography>Intel Name</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    <img 
                    src='./assets/img/intelScreenshot/placeholder.png'
                    alt='Placeholder'
                    onLoad={() => setImageLoaded(true)}
                    />
                    {imgLoaded ? null : (<CircularProgress />)}
                    <Typography>
                        Map - Season X - Intel Type - Faction
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <StyledIntelActionContainer>
                        <Button><LocationOnIcon /></Button>
                        <Button><CheckBoxOutlineBlankIcon /></Button>
                        <Button><ShareIcon /></Button>
                        <Button><BugReportIcon /></Button>
                    </StyledIntelActionContainer>
                </StyledAccordionDetails>
            </Accordion>
        </StyledIntelList>
    )
}
