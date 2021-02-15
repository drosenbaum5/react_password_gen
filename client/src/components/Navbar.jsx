import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <> 
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Password</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}


export default Navigation;