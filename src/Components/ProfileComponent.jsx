import React, { useContext } from "react";
import userContext from "../context/UserContext";

const ProfileComponent = () =>{
    const {user} = useContext(userContext)
    if(!user) return <h1>Please Login</h1>
    
    return(
        <h2>Welcome {user.userName}</h2>
    )
}
export default ProfileComponent