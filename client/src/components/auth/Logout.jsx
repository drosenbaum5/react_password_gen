import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/userContext';
import axios from 'axios';

function Logout() {
    const history = useHistory();
    const { getLoggedIn } = useContext(AuthContext);

    async function logout() {
        await axios.get('/api/logout');
        // --> Update Context
        await getLoggedIn();
        history.push('/login');
    }

    return (
        <>
            <button onClick={logout}>Logout</button>
            {/* <a href="/api/logout">Logout</a> */}
        </>
    )
}


export default Logout;