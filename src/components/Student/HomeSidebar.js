import React from 'react';
import {Link} from 'react-router-dom';
import './HomeSidebar.css';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import HomeSidebarOption from './HomeSidebarOption';


function HomeSidebar() {

    return (
        <div className="homeSidebar">
            <Link to="/student_profile" style={{textDecoration:"none"}}>
                <HomeSidebarOption Icon={AccountCircleRoundedIcon} title="View Profile" />
            </Link>
            <Link to="/view_attendance" style={{textDecoration:"none"}}>
                <HomeSidebarOption Icon={LibraryBooksRoundedIcon} title="View Attendance" />
            </Link>
           

        </div>
    );
}

export default HomeSidebar;
