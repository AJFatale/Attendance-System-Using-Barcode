import React, {useContext,useState} from 'react'
import {StudentContext} from '../../contexts/StudentContext'
import Navbar from './Navbar';
import './StudentDashboard.css'
import SidebarNav from './SidebarNav';
import HomeSidebar from './HomeSidebar';
import Login from './Login'
import Register from './Register'

function StudentDashboard(){

    const {rootState} = useContext(StudentContext);
    const {isAuth,theUser,showLogin} = rootState;

    const [sidebarOpen,setsidebarOpen] = useState(false);
    const handleOpen = () => {
       setsidebarOpen(true);
    };
    const handleClose = () => {
      setsidebarOpen(false);
   };


    if(isAuth)
    {
        return(
            // <div className="userInfo">
            //    <Navbar open={handleOpen} />
            //   {sidebarOpen ? (
            //     <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
            //   ) : null}
            //     <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
            //    <div> Hello<span>{theUser.sname}</span>
            //    <ul>
            //           <li>Name:<span>{theUser.sname}</span></li>
            //           <li>Enrollment No.:<span>{theUser.enrollment_no}</span></li>
            //           <li>Email:<span>{theUser.email_id}</span></li>
            //           <li>Course:<span>{theUser.course}</span></li>
            //           <li>Semester:<span>{theUser.semester}</span></li>
            //    </ul>

               
               
            //    </div>
            //    {/* <div className="_email"><span>{theUser.email_id}</span></div> */}
            //     {/* <button onClick={logoutUser}>Logout</button> */}
            // </div>
            <div>
            <div>        
           <Navbar open={handleOpen} />
          {sidebarOpen ? (
            <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
          ) : null}

            </div>

            <div className="home">
                <HomeSidebar />
                <div className="home_body">
                <div className="_img"><span role="img" aria-label="User Image">👦</span></div>Hello <span>{theUser.fname}</span>
               <ul>
               <li>Name:<span>{theUser.sname}</span></li>
                      <li>Enrollment No.:<span>{theUser.enrollment_no}</span></li>
                       <li>Email:<span>{theUser.email_id}</span></li>
                       <li>Course:<span>{theUser.course}</span></li>
                       <li>Semester:<span>{theUser.semester}</span></li>
                 </ul></div>

                
            </div></div>



        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default StudentDashboard;