import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const Context = createContext(null)

export const ContextProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState(false)

    // const location = useLocation()
    // const { pathname } = location;
    // console.log(pathname)

    const contextValue = {activeMenu, setActiveMenu}

    return(
        <Context.Provider>{props.children}</Context.Provider>
    )
}