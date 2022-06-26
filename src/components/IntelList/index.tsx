import { Accordion, AccordionSummary, Typography, AccordionDetails, AccordionActions, Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BugReportIcon from '@mui/icons-material/BugReport';
import { CustomImage } from '../CustomImage';

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



const IntelSubheading = styled(Typography)`
    font-weight: bold;
    text-align: center;
`

const IntelDescription = styled(Typography)`
    text-align: center;
`

export const IntelList = () => {


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
                    <CustomImage src='./assets/img/intelScreenshot/placeholder.png' altText='Placeholder' />
                    <IntelSubheading>
                        Map - Season X - Intel Type - Faction
                    </IntelSubheading>
                    <IntelDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </IntelDescription>
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
