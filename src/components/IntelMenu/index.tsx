import { SwipeableDrawer } from '@mui/material'
import React, { useContext } from 'react'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { IntelList } from '../IntelList'



export const IntelMenu = () => {
    const { drawerState, toggleDrawer} = useContext(IntelContext);

    return (
        <SwipeableDrawer
            anchor={'bottom'}
            open={drawerState['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
        >
            <div>IntelMenu</div>
            <IntelList />
            {/* <ExpandableMenu>
            <IntelFilter />
            <ListButtons />
        </ExpandableMenu> */}
        </SwipeableDrawer>
    )
}
