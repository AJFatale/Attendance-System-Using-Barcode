import React, { useContext,useState } from 'react'
import HomeSidebar from './HomeSidebar';
import { MyContext } from '../../contexts/MyContext'
import SidebarNav from './SidebarNav'
import './UpdateDetails.css';
import Navbar from './Navbar';

import FacultyLogin from './FacultyLogin'
import FacultyRegister from './FacultyRegister'

function UpdateDetails() {
    const { rootState } = useContext(MyContext);
    const { isAuth, showLogin } = rootState;

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
        <div className="updateDetails">
            <HomeSidebar />

          <form className="update_form">
          <table className="update_table">
                <tr>
                    <th className="update_heading">Name:</th>
                    <td className="update_data"><input className="update_input" type="text" autoComplete="off" /></td>
                </tr>
                <tr>
                    <th className="update_heading">Course/Subject:</th>
                    <td className="update_data"><input className="update_input" type="text" autoComplete="off" /></td>                 
                </tr>
                <tr>
                    <th className="update_heading">Course Code:</th>
                    <td className="update_data"><input className="update_input" type="text" autoComplete="off" /></td>
                </tr>
                <tr>
                    <th className="update_heading">Email-Id:</th>
                    <td className="update_data"><input className="update_input" type="email" autoComplete="off" /></td>
                </tr>
                <tr>
                    <th className="update_heading"></th>
                    <td className="update_data"><input type="submit" value="Update Details" className="update_button" /></td>
                </tr>
            </table>
          </form>
          
        </div>
        </div>
    );
}
else if (showLogin) {
    return <FacultyLogin />;
}
else {
    return <FacultyRegister />;
}

}

export default UpdateDetails;
