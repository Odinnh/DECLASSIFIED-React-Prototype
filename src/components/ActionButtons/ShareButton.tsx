import { Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const ShareButton = ({id, notification}) => {
    return <Button><ContentCopyIcon htmlColor='var(--clr-blue)' onClick={() => {
        navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}/${id}`);
        notification(id);
    } } /></Button>;
}