import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/userContext';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

function Login(props) {
    
    const history = useHistory();
    const { getLoggedIn } = useContext(AuthContext);

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
            },
            withCredentials: true
        }
        // Send User Info to Backend Server
        await axios.post('/api/login', data, config)
        await getLoggedIn();
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