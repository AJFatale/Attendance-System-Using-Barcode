import React from 'react';
import {Link} from 'react-router-dom';
import './HomeSidebar.css';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeSidebarOption from './HomeSidebarOption';


function HomeSidebar() {

    return (
        <div className="homeSidebar">
            <Link to="/faculty_profile" style={{textDecoration:"none"}}>
                <HomeSidebarOption Icon={AccountCircleRoundedIcon} title="View Profile" />
            </Link>
            <Link to="/current_class" style={{textDecoration:"none"}}>
                <HomeSidebarOption Icon={CropFreeIcon } title="Current Class" />
            </Link>
            <Link to="/time_table" style={{textDecoration:"none"}}>
                <HomeSidebarOption Icon={CalendarTodayIcon} title="Time Table" />
            </Link>
            <Link to="/student_attendence" style={{textDecoration:"none"}}>
                <HomeSidebarOption Icon={LibraryBooksRoundedIcon} title="Student Attendence" />
            </Link>
            <Link to="/student_report" style={{textDecoration:"none"}}>
                <HomeSidebarOption Icon={DescriptionIcon} title="Report" />
            </Link>

        </div>
    );
}

export default HomeSidebar;
