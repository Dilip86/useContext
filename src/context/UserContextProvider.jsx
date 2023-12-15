import React, { useState } from "react";
import userContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState('')
    return( 
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default UserContextProvider