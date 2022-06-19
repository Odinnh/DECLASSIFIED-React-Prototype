import styled from '@emotion/styled';
import { SwipeableDrawer } from '@mui/material'
import { useContext } from 'react'
import { IntelContext } from '../../contexts/IntelContext/IntelContextProvider';
import { ExpandableMenu } from '../ExpandableMenu';
import { IntelActionButtons } from '../IntelActionButtons';
import { IntelFilterMenu } from '../IntelFilterMenu';
import { IntelList } from '../IntelList'

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
    .MuiDrawer-paper {
        height: 75%;
    }
`
const StyledIntelFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const DrawerMenu = () => {
    const { drawerState, toggleDrawer } = useContext(IntelContext);

    return (
        <StyledSwipeableDrawer
            anchor={'bottom'}
            open={drawerState['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
        >
            <StyledIntelFilter>
                <IntelList />
                <ExpandableMenu />
            </StyledIntelFilter>
        </StyledSwipeableDrawer>
    )
}
