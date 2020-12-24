import React, { useContext,useState} from 'react'
import HomeSidebar from './HomeSidebar';
import './TimeTable.css';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PopUp from './PopUp';
import PopUpContent from './PopUpContent';
import Navbar from './Navbar';
import { MyContext } from '../../contexts/MyContext'
import FacultyLogin from './FacultyLogin'
import FacultyRegister from './FacultyRegister'
import SidebarNav from './SidebarNav'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';

const fetchURL = "http://localhost/ams-api/faculty-api/"



function TimeTable() {
    const { rootState } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;

    const [stime, setstime] = useState('10:00');
    const [etime, setetime] = useState('10:00');

const [success, setRes] = useState(null);

    const [date,setDate] = useState(new Date());
    const [openPopup,setOpenPopup] = useState(false);
    const changeDate = (date) => {
        setDate(date);
    };

   
    const [sidebarOpen,setsidebarOpen] = useState(false);
  const handleOpen = () => {
     setsidebarOpen(true);
  };
  const handleClose = () => {
    setsidebarOpen(false);
 };

const handleSubmit = event => {
    event.preventDefault();

    axios.post(`${fetchURL}/createClass.php`, { course:theUser.course,
    ldate:date,
    start_time:stime,
    end_time:etime })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res){
            setRes('Class Created Sucessfully');
        }
      })
      
  }

    if(isAuth){

    return (
        <div >
        <div>
        <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}
        </div>
        <div className="timeTable">
            <HomeSidebar />
            <div className="current_class">
                <div className="select_date">
                    <strong style={{marginBottom:"5px"}}>Selected Date: {date.toDateString()}</strong>
                    <button className="addSlot_button" onClick={()=>setOpenPopup(true)}>Add Slot</button>
                    <p className="date_title">{date.toDateString()}</p>  
                    <Calender onChange={changeDate} value={date} className="time_calender" /> 
                </div> 
                <div className="alloted_class">
                    <strong className="allotedClass_title">1 Session(s) for {date.getDate() + "/"+ parseInt(date.getMonth()+1) +"/"+date.getFullYear()}</strong>
                    <div className="scheduled_class">
                       <strong style={{padding:"20px 5px"}}>{theUser.course} | Theory</strong>
                       <hr />
                       <p className="time_display">Start Time {stime}</p>
                        <TimePicker onChange={setstime} value={stime} />
                        <p className="time_display">End Time {etime}</p>
                        <TimePicker onChange={setetime} value={etime} />
                       {/* <p style={{padding:"5px"}}>{theUser.course}</p> */}
                       {/* <hr /> */}
                       {/* <p style={{padding:"5px"}}>


                       </p> */}
                       <hr />
                       {success}
                       <div style={{padding:"10px"}}>
                        <button onClick={handleSubmit}className="addSlot_button"  style={{backgroundColor:"#8A2BE2",margin:"0 10px"}}>Add Class</button>
                        {/* <button className="addSlot_button" style={{backgroundColor:"#FF00FF"}}>Delete</button> */}
                        
                       </div>
                    </div> 
                </div>          
               
            </div>
           <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
           <PopUpContent />
           </PopUp>
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

export default TimeTable;
