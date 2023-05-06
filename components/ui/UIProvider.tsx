import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from '.'

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}

export const UIProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    // abrir menu
    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    };

    // cerrar menu
    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' });
    }

    return (
        <UIContext.Provider value={{
            ...state,

            // Metodos
            closeSideMenu,
            openSideMenu,
        }}>
            { children }
        </UIContext.Provider>
    )
};