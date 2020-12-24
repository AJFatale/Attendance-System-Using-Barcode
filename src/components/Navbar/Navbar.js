import React from 'react';
import { Link } from 'react-router-dom';
import NavOptions from './NavOptions';
import MenuIcon from "@material-ui/icons/Menu";
import './Navbar.css';

function Navbar({open}) {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <Link to='/' style={{textDecoration:"none"}}>
                    <h1 className="navbar_logo">Attendence System</h1>
                </Link>
            </div>
            <NavOptions />
            <div className="navbar_hamburger">
                <MenuIcon className="hamburger" onClick={open} />
            </div>
        </div>
    );
}

export default Navbar
