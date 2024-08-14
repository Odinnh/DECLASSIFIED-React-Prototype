import { createContext, useEffect, useState } from "react";
import { UserContextProps } from "./types";

const initialContextValues =  {
    isMobile: window.innerWidth <= 768
};

export const UserContext = createContext<UserContextProps>(initialContextValues);

export const UserContextProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(initialContextValues.isMobile);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])



    const context = {
        isMobile
    }
    return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
}
