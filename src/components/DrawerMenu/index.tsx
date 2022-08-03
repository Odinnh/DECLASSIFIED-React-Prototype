import styled from '@emotion/styled';
import { SwipeableDrawer } from '@mui/material'
import { useContext } from 'react'
import { DeclassifiedContext } from '../../contexts/DeclassifiedContext/declassifiedContextProvider';
import { IntelListMenu } from '../IntelListMenu';
import { IntelActionButtons } from '../IntelActionButtons';
import { IntelFilterMenu } from '../IntelFilterMenu';
import { IntelList } from '../IntelList'

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
    .MuiDrawer-paper {
        @media (max-width: 900px) {
            height: 75%;
        }
        @media (min-width: 900px) {
            height: 100%;
            width: 500px;
        }
    }
`
const StyledIntelFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const DrawerMenu = () => {
    const { drawerState, toggleDrawer } = useContext(DeclassifiedContext);
    let width = window.innerWidth;
    return (
        <StyledSwipeableDrawer
            anchor={(width > 900) ? 'left' : 'bottom'}
            open={drawerState}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <StyledIntelFilter>
                <IntelList />
                <IntelListMenu />
            </StyledIntelFilter>
        </StyledSwipeableDrawer>
    )
}
