import React, { ReactNode, useRef } from 'react';
import { Snackbar } from '@mui/material';
import { NotificationContext } from './notificationContext';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner';

// The NotificationProvider component
export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const snackbarRef = useRef<{ handleClick: (msg: string) => void }>(null);

    // The notification function
    const triggerNotification = (notificationMessage: string) => {
        if (snackbarRef.current) {
            snackbarRef.current.handleClick(notificationMessage);
        }
    };

    return (
        <NotificationContext.Provider value={{ triggerNotification }}>
            {children}

            {/* Snackbar component where the ref will be used */}
            <NotificationBanner ref={snackbarRef} />
        </NotificationContext.Provider>
    );
};
