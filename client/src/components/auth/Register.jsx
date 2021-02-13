import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Register extends Component {

    state = {
        first: '',
        last: '',
        username: '',
        email: '',
        password: '',
        confirm: ''
    }

    handleChange = (evt) => {
        this.setState({ [evt.currentTarget.name]: evt.currentTarget.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { first, last, username, email, password } = this.state
        // Temp User Obj
        let newUser = {
            first: first,
            last: last,
            username: username,
            email: email,
            password: password
        }

        console.log(newUser);

        // Reset Component State
        this.setState({ 
            first: '',
            last: '',
            username: '',
            email: '',
            password: '',
            confirm: ''
        });
    }

    render() {
        return (
            <>
            <Container className="register">
                <div>
                    <h1>Register Component</h1>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="first"
                            value={this.state.first}
                            onChange={this.handleChange}
                            placeholder="Enter First Name" 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Last Name"
                            name="last"
                            value={this.state.last}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
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


export default Register;