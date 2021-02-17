import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get("/api/users").then(data => {
            // console.log(data.data.allUsers);
            this.setState({ users: data.data.allUsers })
        });
    }


    render() {
        return (
            <div>
                <h1>Dashboard Component</h1>
                {this.state.users.map(user => {
                    return (
                        <div className={user.id} key={user._id} >
                            <p>{user.first}</p>
                            <p>{user.last}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    )})}
            </div>
        )
    }
}

export default Dashboard;