import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledIntelList = styled.div`
    background-color: var(--clr-grey-d);
    padding: 10px;
`

export const IntelList = () => {
    return (
        <StyledIntelList >
            <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        </StyledIntelList>
    )
}
