import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;

    // Metodos
    closeSideMenu: () => void
    openSideMenu: () => void,
}

export const UIContext = createContext({} as ContextProps);