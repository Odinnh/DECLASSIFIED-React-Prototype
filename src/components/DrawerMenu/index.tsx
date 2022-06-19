import { Accordion, AccordionDetails, AccordionSummary, SwipeableDrawer, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { IntelList } from '../IntelList'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const DrawerMenu = () => {
    const { drawerState, toggleDrawer } = useContext(IntelContext);

    return (
        <SwipeableDrawer
            anchor={'bottom'}
            open={drawerState['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
        >
            <div className={"IntelMenu"}>
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
            </div>
            <IntelList />
            {/* <ExpandableMenu>
            <IntelFilter />
            <ListButtons />
        </ExpandableMenu> */}
        </SwipeableDrawer>
    )
}
