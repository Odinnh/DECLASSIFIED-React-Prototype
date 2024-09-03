import { createContext, useContext, useEffect, useState } from "react";
import { UserContextProps } from "./types";

const initialContextValues = {
    isMobile: window.innerWidth <= 768,
    setIsMobile: () => { },
    isDebugMode: true,
    setIsDebugMode: () => { },
    mapItemId: null,
    updateMapItemId: () => { },
    triggerNotification: () => { },
    setNotificationDelegate: () => { }
};

export const UserContext = createContext<UserContextProps>(initialContextValues);

// Default no-op function
const defaultNotification = (msg: string) => {
    console.warn("Notification function not set yet:", msg);
};

export const UserContextProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);
    const [isDebugMode, setIsDebugMode] = useState(initialContextValues.isMobile);
    const [mapItemId, setMapItemId] = useState<string | null>(null);
    const [triggerNotification, setNotificationDelegate] = useState<((msg: string) => void) | null>(null);

    const updateMapItemId = (id: string | undefined) => {
        if (id) {
            setMapItemId(id);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <UserContext.Provider value={{
            isMobile,
            setIsMobile,
            isDebugMode,
            setIsDebugMode,
            mapItemId,
            updateMapItemId,
            triggerNotification: triggerNotification || defaultNotification,
            setNotificationDelegate
        }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
