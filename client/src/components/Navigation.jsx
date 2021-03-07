import React, { useContext } from 'react';
import AuthContext from '../context/userContext';
import { Navbar, Nav } from 'react-bootstrap';
import Logout from './auth/Logout';

function Navigation() {

    const { isLoggedIn } = useContext(AuthContext);

    return (
        <> 
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Password</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>

                    { isLoggedIn ? (
                        <>
                            <Nav.Link>
                                <Logout />
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}


export default Navigation;