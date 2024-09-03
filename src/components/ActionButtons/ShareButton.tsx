import { Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useUserContext } from "../../contexts/DeclassifiedContext/userContextProvider";

export const ShareButton = ({id}) => {
    const { triggerNotification } = useUserContext();
    return <Button><ContentCopyIcon htmlColor='var(--clr-blue)' onClick={() => {
        console.log('SHARE BUTTON: window.location.origin: ', window.location);
        // navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}/${id}`);
        navigator.clipboard.writeText(`${window.location.origin}/${id}`);
        triggerNotification(`Copied Link To Clipboard`);
    } } /></Button>;
}