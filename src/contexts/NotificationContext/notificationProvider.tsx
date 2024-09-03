import React, { ReactNode, useRef } from 'react';
import { NotificationContext } from './notificationContext';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner';

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const snackbarRef = useRef<{ handleClick: (msg: string) => void }>(null);

    const triggerNotification = (notificationMessage: string) => {
        if (snackbarRef.current) {
            snackbarRef.current.handleClick(notificationMessage);
        }
    };

    return (
        <NotificationContext.Provider value={{ triggerNotification }}>
            {children}
            <NotificationBanner ref={snackbarRef} />
        </NotificationContext.Provider>
    );
};
