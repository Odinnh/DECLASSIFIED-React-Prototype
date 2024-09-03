import { createContext, useContext } from 'react';

// Define the shape of your context
interface NotificationContextProps {
    triggerNotification: (message: string) => void;
}

// Create the context
export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

// Custom hook to use the context
export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
