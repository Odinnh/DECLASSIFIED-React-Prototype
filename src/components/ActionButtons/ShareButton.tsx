import { Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const ShareButton = ({id, notification}) => {
    return <Button><ContentCopyIcon htmlColor='var(--clr-blue)' onClick={() => {
        console.log('SHARE BUTTON: window.location.origin: ', window.location);
        // navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}/${id}`);
        navigator.clipboard.writeText(`${window.location.origin}/${id}`);
        notification(id);
    } } /></Button>;
}