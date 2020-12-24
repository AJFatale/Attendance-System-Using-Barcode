import React from 'react';
import {Link } from 'react-router-dom';
import CloseIcon from "@material-ui/icons/Close";
import './SidebarNav.css';
import HomeSidebarOption from './HomeSidebarOption';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';

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
               <Link to='/login' className="sidebarNav_link">
               <li>
                   <button onClick={close} className="sidebarNav_button">Login</button>
               </li>  
               </Link>
               <Link to='/register' style={{textDecoration:"none"}}>
                <li>
                   <button onClick={close} className="sidebarNav_button">Register</button>
                </li>
               </Link>
                <HomeSidebarOption Icon={AccountCircleRoundedIcon} title="Student Details" onClick={close}/>
                <HomeSidebarOption Icon={LibraryBooksRoundedIcon} title="Student Attendence" onClick={close} />
                <HomeSidebarOption Icon={DescriptionIcon} title="Report" onClick={close}/>
           </ul>
        </div>
    );
}

export default SidebarNav;
