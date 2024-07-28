import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const Context = createContext(null)

export const ContextProvider = (props) => {
<<<<<<< HEAD
=======
    const [activeMenu, setActiveMenu] = useState(false)

    // const location = useLocation()
    // const { pathname } = location;
    // console.log(pathname)
>>>>>>> 86ed5d1faa66f7375286ad42afd128ebfa99fc9e

    const contextValue = {activeMenu, setActiveMenu}

    return(
        <Context.Provider>{props.children}</Context.Provider>
    )
}