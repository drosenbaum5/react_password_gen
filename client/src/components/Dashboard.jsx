import React, { Component, useState, useEffect, useContext } from 'react';
import UserContext from '../context/userContext';
import axios from 'axios';

// class Dashboard extends Component {
const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const { userData, setUser } = useContext(UserContext);
    console.log(userData);
    // console.log(token);

    useEffect(() => {
        // axios.get("/api/users", { headers: { 'x-auth-token': userData.token }}).then(data => {
        //     console.log(data.data.allUsers);
        //     setUsers({ users: data.data.allUsers })
        // });
    }, []);

    return (
        <div>
            <h1>Dashboard Component</h1>

        </div>
    )
}

export default Dashboard;