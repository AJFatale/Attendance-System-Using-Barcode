import React,{useContext,useState} from 'react';
import HomeSidebar from './HomeSidebar';
import './StudentReport.css';
import Navbar from './Navbar';
import { MyContext } from '../../contexts/MyContext'
// Importing the Login & Register Componet
import FacultyLogin from './FacultyLogin'
import FacultyRegister from './FacultyRegister'
import SidebarNav from './SidebarNav';

function StudentReport() {
    const { rootState } = useContext(MyContext);
    const { isAuth,  showLogin } = rootState;

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
        <div>
        <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}
        </div>
        <div className="studentReport">
            <HomeSidebar />
            <h1 className="studentReport_title">Student report</h1>
        </div>
        </div>
    );
} else if (showLogin) {
    return <FacultyLogin />;
}
else {
    return <FacultyRegister />;
}
}

export default StudentReport;
