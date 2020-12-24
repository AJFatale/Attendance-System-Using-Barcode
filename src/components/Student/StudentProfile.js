import React, { useContext,useState } from 'react'
import './StudentProfile.css';
import './ViewAttendance.css';
import HomeSidebar from './HomeSidebar';
import Navbar from './Navbar';
import { StudentContext } from '../../contexts/StudentContext'
import SidebarNav from './SidebarNav'
import Login from './Login'
import Register from './Register'


function StudentProfile() {
    const { rootState } = useContext(StudentContext);
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
        <div>
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
                    <td>{theUser.sname}</td>
                </tr>
                <tr>
                    <th>Course/Subject:</th>
                    <td>{theUser.course}</td>                 
                </tr> 
                                <tr>
                    <th>Semester:</th>
                    <td>{theUser.semester}</td>
                </tr>
                <tr>
                    <th>Email-Id:</th>
                    <td>{theUser.email_id}</td>
                </tr>
            </table>

            
    </div>
            {/* <Link to='/update_details'>
            <button className="facultyProfileUpdate">Update Details</button>
            </Link> */}
            </div>
        </div></div>
        
    );

    }// Showing Login Or Register Page According to the condition
    else if (showLogin) {
        return <Login />;
    }
    else {
        return <Register />;
    }



}

export default StudentProfile;
