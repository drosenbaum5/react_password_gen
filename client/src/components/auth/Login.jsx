import React, { Component, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';

function Login(props) {
    
    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = (evt) => {
        setUser({...user, [evt.currentTarget.name]: evt.currentTarget.value });
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const { email, password, confirm } = user
        // Temp User Obj
        let currentUser = {
            email: email,
            password: password,
            confirm: confirm
        }

        console.log(currentUser);
        let data = JSON.stringify(currentUser);
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        // Send User Info to Backend Server
        let userRes = await Axios.post('/api/login', data, config)

        console.log(userRes);

        // Set Token in Local Storage
        let token = userRes.data.token;
        if(!token) {
            localStorage.setItem('auth-token', '');
        } else {
            localStorage.setItem('auth-token', token);
        }

        // Reset Component State
        setUser({ 
            email: '',
            password: '',
            confirm: ''
        });

        history.push("/");
    }

    return (
        <>
        <Container className="login">
            <div>
                <h1>Login Component</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        value={user.email}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm"
                        name="confirm"
                        value={user.confirm}
                        onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
                </Form>
        </Container>
        </>
    )
}


export default Login;