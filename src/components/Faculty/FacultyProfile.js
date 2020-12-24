import React, { useContext,useState } from 'react'
// import {Link} from 'react-router-dom';
import './FacultyProfile.css';
import './StudentAttendence.css';
import HomeSidebar from './HomeSidebar';
import Navbar from './Navbar';
import { MyContext } from '../../contexts/MyContext'
import FacultyLogin from './FacultyLogin'
import FacultyRegister from './FacultyRegister'
import SidebarNav from './SidebarNav'
import './../../images/profile.png'
function FacultyProfile() {
    const { rootState } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;

    const [sidebarOpen,setsidebarOpen] = useState(false);
  const handleOpen = () => {
     setsidebarOpen(true);
  };
  const handleClose = () => {
    setsidebarOpen(false);
 };
    if(isAuth){
    return (
        <div className="registerMain">
        <div><Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}</div>
        <div className="facultyProfile">
           
            <HomeSidebar />

            <div className="currentClass">
            <h1 className="time_display">Profile</h1>
            <div className="facultyProfileDetails">
                
            <table className="student_table">
                <tr>
                    <th>Name:</th>
                    <td><span>{theUser.fname}</span></td>
                </tr>
                <tr>
                    <th>Course/Subject:</th>
                    <td><span>{theUser.course}</span></td>                 
                </tr>
                {/* <tr>
                    <th>Course Code:</th>
                    <td>CS3002</td>
                </tr> */}
                <tr>
                    <th>Email-Id:</th>
                    <td><span>{theUser.email_id}</span></td>
                </tr>
            </table>
            {/* <Link to='/update_details'>
            <button className="facultyProfileUpdate">Update Details</button>
            </Link> */}
            </div>
        </div>
        </div>
        </div>
    );

    }// Showing Login Or Register Page According to the condition
    else if (showLogin) {
        return <FacultyLogin />;
    }
    else {
        return <FacultyRegister />;
    }



}

export default FacultyProfile;
