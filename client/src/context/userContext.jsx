import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);

    async function getLoggedIn() {
        console.log("In Auth Context");
        const loggedInRes = await axios.get('/api/validate-token');
        console.log(`user logged in: ${loggedInRes}`)
        console.log(loggedInRes)
        setIsLoggedIn(loggedInRes.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, getLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export { AuthContextProvider} ;