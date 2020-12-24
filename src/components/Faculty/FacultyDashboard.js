import React, { useContext,useState } from 'react'
import { MyContext } from '../../contexts/MyContext'
import Navbar from './Navbar'
import './FacultyDashboard.css'
import HomeSidebar from './HomeSidebar'
import SidebarNav from './SidebarNav'
import FacultyLogin from './FacultyLogin'
import FacultyRegister from './FacultyRegister'

function FacultyDashboard() {

    const { rootState } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;

    const [sidebarOpen,setsidebarOpen] = useState(false);
  const handleOpen = () => {
     setsidebarOpen(true);
  };
  const handleClose = () => {
    setsidebarOpen(false);
 };

    if (isAuth) {
        return (
            
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
                       <li>Name:<span>{theUser.fname}</span></li>
                       <li>Email:<span>{theUser.email_id}</span></li>
                       <li>Course:<span>{theUser.course}</span></li>
                     </ul></div>

                    
                </div></div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if (showLogin) {
        return <FacultyLogin />;
    }
    else {
        return <FacultyRegister />;
    }

}

export default FacultyDashboard;