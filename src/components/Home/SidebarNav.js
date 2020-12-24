import React from 'react';
import {Link } from 'react-router-dom';
import CloseIcon from "@material-ui/icons/Close";
import './SidebarNav.css';

function SidebarNav({close,sidebarOpen}) {
    let classes = "sidebarNav";
    if(sidebarOpen){
        classes="sidebarNav open";
    }
    return (
        <div className={classes}>
           <ul>
               <li>
                   <CloseIcon onClick={close}className="sidebarNav_close" />
               </li>
               <Link to='/' className="sidebarNav_link">
               <li>
                   <button onClick={close} className="sidebarNav_button">Home</button>
               </li>  
               </Link>
               <Link to='/login' className="sidebarNav_link">
               <li>
                   <button onClick={close} className="sidebarNav_button">Student Login</button>
               </li>  
               </Link>
               <Link to='/register'>
                <li>
                   <button onClick={close} className="sidebarNav_button">Student Register</button>
                </li>
               </Link>
               <Link to="/faculty_login">
                <li>
                   <button onClick={close} className="sidebarNav_button">Faculty Login</button>
                </li>
               </Link>
               <Link to="/faculty_register">
               <li>
                   <button onClick={close} className="sidebarNav_button">Faculty Register</button>
                </li> 
               </Link>             
           </ul>
        </div>
    );
}

export default SidebarNav;
