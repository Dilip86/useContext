import React, { useContext, useState } from "react";
import userContext from "../context/UserContext";

const LoginComponent = () =>{
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const {setUser}  = useContext(userContext)

    function handleClick(e){
        e.preventDefault()
        setUser({userName, setUserName})
    }
    return( 
        <>
            <h1>Login Page</h1>
            <input
            type="text"
            value={userName}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
            />
            {" "}
            <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
        </>
    )
}
export default LoginComponent