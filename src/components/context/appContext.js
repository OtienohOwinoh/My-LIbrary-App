import { createContext, useContext} from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error('Appcontext must be within AppContextProvider!')
    }

    return context;
}

const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = () => {

    }

    const removeFromFavorites = (id) =>
    {

    }

    return (
        <AppContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>;
        {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider