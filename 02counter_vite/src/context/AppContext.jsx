import { createContext } from "react";

export const AppContext=createContext();


const ContextProvider=(props)=>{
    const phone="+92 1234567899"

    return(
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider