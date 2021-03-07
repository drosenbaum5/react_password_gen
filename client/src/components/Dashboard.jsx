import React, { Component, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/userContext';
import axios from 'axios';

// class Dashboard extends Component {
const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loggedIn, setLoggedIn] = useState();

    useEffect(() => {
        isAuth();
    }, []);

    async function isAuth() {
        let authorized = await axios.get('/api/validate-token');
        console.log(`Dashboard Authorized: ${authorized.data}`);
        console.log(authorized);
        setLoggedIn(authorized.data);
    }

    return (
        <div>
            {loggedIn === true && (
                <h1>Dashboard Component - Authorized</h1>
            )}
            {loggedIn === false && (
                <h1>Dashboard Component - Unauthorized</h1>
            )}
        </div>
    )
}

export default Dashboard;