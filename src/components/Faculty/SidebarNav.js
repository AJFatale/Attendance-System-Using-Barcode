import React,{useContext} from 'react';
import {Link } from 'react-router-dom';
import CloseIcon from "@material-ui/icons/Close";
import './SidebarNav.css';
import HomeSidebarOption from './HomeSidebarOption';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CropFreeIcon from '@material-ui/icons/CropFree';
// import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {MyContext} from '../../contexts/MyContext'


function SidebarNav({close,sidebarOpen}) {
    const {logoutUser} = useContext(MyContext)
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
               {/* <Link to='/login' className="sidebarNav_link">
               <li>
                   <button onClick={close} className="sidebarNav_button">Login</button>
               </li>  
               </Link>
               <Link to='/register'>
                <li>
                   <button onClick={close} className="sidebarNav_button">Register</button>
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
                </li>  */}
               {/* </Link> */}
               
               <Link to="/faculty_profile" onClick={close} style={{textDecoration:"none"}}>
                   <HomeSidebarOption Icon={AccountCircleRoundedIcon} title="View Profile" />
               </Link>
               <Link to="/current_class" onClick={close} style={{textDecoration:"none"}}>
                   <HomeSidebarOption Icon={CropFreeIcon} title="Lectures" />
               </Link>
               <Link to="/time_table" onClick={close} style={{textDecoration:"none"}}>
                   <HomeSidebarOption Icon={CalendarTodayIcon} title="Time Table" />
               </Link>
               <Link to="/student_attendence" onClick={close} style={{textDecoration:"none"}}>
                   <HomeSidebarOption Icon={LibraryBooksRoundedIcon} title="Student Attendence" />
               </Link>
               {/* <Link to="/student_report" onClick={close} style={{textDecoration:"none"}}>
                   <HomeSidebarOption Icon={DescriptionIcon} title="Report" />
               </Link>              */}
               <button className = "sidebarNav_button" onClick={logoutUser}>Logout</button>

           </ul>
        </div>
    );
}

export default SidebarNav;
