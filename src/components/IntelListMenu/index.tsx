import styled from '@emotion/styled'
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material'
import React from 'react'
import { IntelActionButtons } from '../IntelActionButtons'
import { IntelFilterMenu } from '../IntelFilterMenu'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const StyledExpandableMenu = styled.div`
    display: grid;
    justify-items: center;
    background-color: var(--clr-grey-d);
    position: sticky; 
    bottom: 0;
`

const StyledAccordion = styled(Accordion)`
    width: 100%;
    margin: 0;
    box-shadow: none;
`

export const IntelListMenu = () => {
    return (
        <StyledExpandableMenu>
            <StyledAccordion>
                <AccordionSummary
                    expandIcon={<FilterAltIcon />}
                    aria-controls="intel-filter"
                    id="intel-filter-header"
                >
                    <TextField id="intelSearch" label="Outlined" variant="outlined" />
                </AccordionSummary>
                <AccordionDetails>
                    <IntelFilterMenu />
                </AccordionDetails>
            </StyledAccordion>
            <IntelActionButtons />
        </StyledExpandableMenu>
    )
}
