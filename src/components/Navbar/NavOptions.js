import React from 'react';
import {Link} from 'react-router-dom';
import './NavOptions.css';

function NavOptions() {
    return (
        <div className="navOptions">
            <ul className="nav_mainLink">
                <Link to="/faculty_login" className="nav_link">
                  <li className="nav_register">Faculty Login</li>
                </Link>
                <Link to="/faculty_register" className="nav_link">
                  <li className="nav_register">Faculty Register</li>
                </Link>
                <Link to="/login" className="nav_link">
                  <li className="nav_register">Login</li>
                </Link>
                <Link to="/register" className="nav_link">
                  <li className="nav_register">Register</li>
                </Link>      
            </ul>
        </div>
    )
}

export default NavOptions
