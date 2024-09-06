import styled from "@emotion/styled";
import { Checkbox, FormControlLabel, Paper, Typography } from "@mui/material";
import { useUserContext } from "../../contexts/UserContext/userContextProvider";

const SettingsMenuBackground = styled.div`
        background-color: var(--clr-grey-d);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 10px;
    `;
const SettingsMenuContainer = styled(Paper)`
    padding: 10px;
`
export const SettingsDrawerContent = () => {
    const { isDebugMode, setIsDebugMode } = useUserContext();

    const handleIsDebugChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDebugMode(event.target.checked);
    };

    return (
        <SettingsMenuBackground>
            <SettingsMenuContainer>
                <Typography variant="h5">Settings</Typography>
                <FormControlLabel control={
                    <Checkbox
                        checked={isDebugMode}
                        onChange={handleIsDebugChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />} label="Debug Mode" />
            </SettingsMenuContainer>
        </SettingsMenuBackground>
    )
}
