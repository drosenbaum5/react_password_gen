import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Login extends Component {
    state = {
        email: '',
        password: '',
        confirm: ''
    }

    handleChange = (evt) => {
        this.setState({ [evt.currentTarget.name]: evt.currentTarget.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { email, password } = this.state
        // Temp User Obj
        let user = {
            email: email,
            password: password
        }

        console.log(user);
        // Send User Info to Backend Server

        // Reset Component State
        this.setState({ 
            email: '',
            password: '',
            confirm: ''
        });
    }

    render() {
        return (
            <>
            <Container className="login">
                <div>
                    <h1>Login Component</h1>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm"
                            name="confirm"
                            value={this.state.confirm}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                    </Form>
            </Container>
            </>
        )
    }
}


export default Login;