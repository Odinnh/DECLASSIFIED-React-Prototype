import React, { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NotificationBanner = React.forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleClick = (msg: string) => {
        setMessage(msg);
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    React.useImperativeHandle(ref, () => ({
        handleClick,
    }));

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="info">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
});

export default NotificationBanner;
