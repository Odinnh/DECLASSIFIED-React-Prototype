import { createContext, useEffect, useState } from "react";
import { UserContextProps } from "./types";

const initialContextValues =  {
    isMobile: window.innerWidth <= 768,
    setIsMobile: () => {},
    mapItemId: null,
    updateMapItemId: () => {}
};

export const UserContext = createContext<UserContextProps>(initialContextValues);

export const UserContextProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);
    const [mapItemId, setMapItemId] = useState<string | null>(null);

    const updateMapItemId = (id: string | undefined) => {
        if (id){
            setMapItemId(id);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])



    const context = {
        isMobile,
        mapItemId,
        updateMapItemId
    }
    return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
}
