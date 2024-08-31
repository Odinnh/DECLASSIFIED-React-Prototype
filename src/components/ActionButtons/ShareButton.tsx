import { Button } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

export const ShareButton = ({id, notification}) => {
    return <Button><ShareIcon htmlColor='var(--clr-blue)' onClick={() => {
        navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}?id=${id}`);
        notification(id);
    } } /></Button>;
}