import React, {useState} from 'react';
// import {MyContext} from '../../contexts/MyContext'
// import FacultyLogin from '../Faculty/FacultyLogin'
// import FacultyRegister from '../Faculty/FacultyRegister'
import Navbar from '../Navbar/Navbar'
// import SidebarNav from '../Navbar/SidebarNav'
import './Home.css';
import SidebarNav from './SidebarNav';


function Home() {

    const [sidebarOpen,setsidebarOpen] = useState(false);
    const handleOpen = () => {
       setsidebarOpen(true);
    };
     const handleClose = () => {
      setsidebarOpen(false);
   };

    // const {rootState} = useContext(MyContext); //logoutUser
    // const {isAuth,showLogin} = rootState; //theUser

    
    return (
        <div>
                    <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}

        <div className="home">
        {/* <div>
            <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}
        </div> */}
            {/* <HomeSidebar /> */}
            <div className="home_body">
                <h1 className="home_heading">Cloud Based Attendence System</h1>          
                <img className="home_image" src="https://blog.mantratec.com/Images/post-img/lg/2019/cloud-based-technology-is-the-future-of-time-attendance.jpg" alt="" />
            </div>
        </div>
        </div>
    )
    // Showing Login Or Register Page According to the condition
    // else if(showLogin){
    //     return <FacultyLogin />;
    // }
    // else{
    //     return <FacultyRegister />;
    // }
    
}

export default Home;
