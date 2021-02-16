import React, { Component, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

function Register() {

    // Set State Hooks
    const [values , setValues] = useState({
        first: '',
        last: '',
        username: '',
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = (evt) => {
        setValues({...values, [evt.currentTarget.name]: evt.currentTarget.value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const { first, last, username, email, password } = values
        // Temp User Obj
        let newUser = {
            first: first,
            last: last,
            username: username,
            email: email,
            password: password
        }

        console.log(newUser);
        // Send User Info to Backend Server
        let user = await Axios.post('http://localhost:3001/api/register', newUser)
        console.log(`User: ${user}`);

        // Reset Component State
        setValues({ 
            first: '',
            last: '',
            username: '',
            email: '',
            password: '',
            confirm: ''
        });
    }

    return (
        <>
        <Container className="register">
            <div>
                <h1>Register Component</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="first"
                        value={values.first}
                        onChange={handleChange}
                        placeholder="Enter First Name" 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Last Name"
                        name="last"
                        value={values.last}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        value={values.email}
                        onChange={handleChange} />
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
                        value={values.password}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm"
                        name="confirm"
                        value={values.confirm}
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


export default Register;