import { createContext, useContext } from 'react';

interface NotificationContextProps {
    triggerNotification: (message: string) => void;
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
