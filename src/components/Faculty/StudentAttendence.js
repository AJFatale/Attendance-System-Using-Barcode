import React, { useContext, useState } from 'react'
import HomeSidebar from './HomeSidebar';
import { MyContext } from '../../contexts/MyContext'
import SidebarNav from './SidebarNav'
import './StudentAttendence.css';
import Navbar from './Navbar';
import FacultyLogin from './FacultyLogin'
import FacultyRegister from './FacultyRegister'
import axios from 'axios'

const fetchURL = "http://ams-api.freecluster.eu/ams-api/faculty-api/"
function StudentAttendence() {
    const { rootState } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;
    const initialState = {
        userInfo: {
            date: '',
            course:''            
        },
        
    }    
        
const [state, setState] = useState(initialState);
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }
    

//str.split(" ")[0]    
    const [data, setData] = useState(null)

    const submitForm = async (event) => {
        event.preventDefault();
        try{
        
        const response = await axios.get(`${fetchURL}/getAttendance.php?course=${theUser.course}&date=${state.userInfo.course.split(" ")[0]}&start_time=${state.userInfo.course.split(" ")[1]}&end_time=${state.userInfo.course.split(" ")[2]}`)
      
        setData(response.data);  
        console.log(response.data);
        }catch( err ){
            console.error(err);
        }   
        
       
    }


    

    const [lecture, setLectures] = useState(null)
    const getLectures = async (event) => {
        event.preventDefault();
        const response = await axios.get(`${fetchURL}/getLecture.php?id=${theUser.course}`)
        setLectures(response.data)
        console.log(lecture)
        
    }

    //console.log(state.userInfo.course.split(" ")[0])
    //console.log(state.userInfo.course.split(" ")[1])
    //console.log(state.userInfo.course.split(" ")[2])

    

   

    const [sidebarOpen, setsidebarOpen] = useState(false);
    const handleOpen = () => {
        setsidebarOpen(true);
    };
    const handleClose = () => {
        setsidebarOpen(false);
    };

    

    if (isAuth) {
        return (
            <div>
                {/* {this.state.userInfo=theUser} */}
                <div>
                    <Navbar open={handleOpen} />
                    {sidebarOpen ? (
                        <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
                    ) : null}

                </div>


                <div className="studentAttendence">
                    <HomeSidebar />

                    {/* <h1 className="studentAttendence_title">Attendence</h1> */}

                    <div className="currentClass">
                        <h1 className="time_display">Student Attendance</h1>
                        <div className="currentClass_search">
                            {/* <form onSubmit={submitForm}>
                                <select name="course" value={state.userInfo.course} onChange={onChangeValue} required >
                                    <option value={theUser.course}>{theUser.course}</option>
                                </select>                              
                                <input type="submit"  value="Get Atendance" className="currentClass_button" />
                            </form> */}
                            <button className="currentClass_button" onClick={getLectures}>Get Lectures</button>

                            <form onSubmit={submitForm}>
                                {/* <p classname="time_display">{theUser.course}</p> */}
                                <select name="course" value={state.userInfo.course} onChange={onChangeValue} required >
                                 <option defaultValue ></option>
                                {lecture?.map((item) =>
                                 <option value={item.ldate+' '+item.start_time+' '+item.end_time}>{item.ldate+' '+item.start_time+' to '+item.end_time}</option>)
                                 }
                                </select>                              
                                <input type="submit"  value="Get Atendance" className="currentClass_button" />
                            </form>


                            <div>

                                {/* <label htmlFor="register-class">Course/Subject: </label> */}
                                {/* <input type="text" autoComplete="off" /> */}




                                {/* <button onClickclassName="currentClass_button" style={{ backgroundColor: "#8A2BE2" }}>Present</button> */}
                                {/* <button className="currentClass_button" style={{ backgroundColor: "#FF00FF" }}>Absent</button> */}
                            </div>
                        </div>

                        <table className="student_table">
                            <thead className="student_head">
                                <tr className="student_row">
                                    {/* <th>Date</th> */}
                                    <th>Enrollment No.</th>
                                    {/* <th>Start Time</th> */}
                                    <th>Student Name</th>
                                    <th>In Time</th>

                                </tr>
                            </thead>
                            {/* <tbody className="student_body"> */}
                            {                              
                            data?.map((item) =>
                                <tr className="student_row">
                                    <td>{item.enrollment_no}</td>
                                    <td>{item.sname}</td>

                                    <td>{item.in_time}</td>
                                </tr>
                            )
                            }
                        </table>
                         {/* {console.log(lecture)}  */}
                    </div></div>
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

export default StudentAttendence;
