import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import './Navbar.css';
import {MyContext} from '../../contexts/MyContext'


function Navbar({open}) {
    const {logoutUser,rootState} = useContext(MyContext);
    const {isAuth} = rootState;
    

if(isAuth){
    return (
        
        <div className="navbar">
            <div className="navbar_logo">
                <Link to='/' style={{textDecoration:"none"}}>
                    <h1 className="navbar_logo">Attendence System</h1>
                </Link>
            </div>
            <div className="navbar_hamburger">
                <MenuIcon className="hamburger" onClick={open} />
                
            </div>
            
            <div>
            {/* <div className="navbar_logo"><span>{theUser.email_id}</span></div>            */}
            <button className="sidebarNav_button"onClick={logoutUser}>Logout</button>
        </div>
        </div>
        
        
    );
}
}

export default Navbar
