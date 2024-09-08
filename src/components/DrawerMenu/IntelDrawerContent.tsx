import styled from "@emotion/styled";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { IntelList } from "../IntelList";
import { IntelListMenu } from "../IntelListMenu";





interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export const IntelAndEasterEggDrawerContent = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (<>
        <Box sx={{ bgcolor: 'background.paper' }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                >
                    <Tab label="Intel" {...a11yProps(0)} />
                    <Tab label="Easter Eggs" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <StyledTabPanel value={value} index={0} dir={theme.direction}>
                <StyledIntelFilter id="intel-filter">
                    <IntelList />
                    <IntelListMenu />
                </StyledIntelFilter>
            </StyledTabPanel>
            <StyledTabPanel value={value} index={1} dir={theme.direction}>
                Easter Eggs Ennit
            </StyledTabPanel>
        </Box>

    </>
    )
}


const StyledIntelFilter = styled.div`
        background-color: var(--clr-grey-d);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    `;
const StyledTabPanel = styled(TabPanel)`
.MuiBox-root{
    padding: unset;
}
`