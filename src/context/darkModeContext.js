import { createContext, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);

    return(
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}