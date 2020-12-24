import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import './Navbar.css';
import {StudentContext} from '../../contexts/StudentContext'

function Navbar({open}) {
    const {logoutUser,rootState} = useContext(StudentContext);
    const {isAuth} = rootState;
    if(isAuth){
        
        return (


        <div className="navbar">
            <div className="navbar_logo">
                <Link to='/' style={{textDecoration:"none"}}>
                    <h1 className="navbar_logo">Attendance System</h1>
                </Link>
            </div>
                        
            <div className="navbar_hamburger">
                <MenuIcon className="hamburger" onClick={open} />
            </div>
            <div>
            {/* <div className="navbar_logo"><span>{theUser.email_id}</span></div> */}

            <button className="sidebarNav_button" onClick={logoutUser}>Logout</button>
            </div>
            

        </div>
    );
        }
}

export default Navbar
