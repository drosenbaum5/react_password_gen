import React, { Component, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

// class Login extends Component {
function Login() {
    
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirm: ''
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    // state = {
    //     email: '',
    //     password: '',
    //     confirm: ''
    // }

    const handleChange = (evt) => {
        // this.setState({ [evt.currentTarget.name]: evt.currentTarget.value })
        setUser({...user, [evt.currentTarget.name]: evt.currentTarget.value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // const { email, password } = this.state
        const { email, password } = user
        // Temp User Obj
        let currentUser = {
            email: email,
            password: password
        }

        console.log(currentUser);
        // Send User Info to Backend Server
        
        // Reset Component State
        setUser({ 
            email: '',
            password: '',
            confirm: ''
        });
        // this.setState({ 
        //     email: '',
        //     password: '',
        //     confirm: ''
        // });
    }

    // render() {
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
    // }
}


export default Login;