import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul class="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    )
}


export default Navbar;