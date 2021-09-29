import React, { useContext,useState } from 'react'
import HomeSidebar from './HomeSidebar';
import { StudentContext } from '../../contexts/StudentContext'

import './ViewAttendance.css';
import Navbar from './Navbar';
import Login from './Login'
import Register from './Register'
import SidebarNav from './SidebarNav'
import axios from 'axios'


const fetchURL = "http://localhost/ams-api/student-api/"


function ViewAttendance() {

  const initialState = {
    userInfo: {
        date: '',
        enrollment_no: '',
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

const [data, setData] = useState(null)
const submitForm = async (event) => {
    event.preventDefault();
    const response = await axios.get(`${fetchURL}/read.php?enrollment_no=${theUser.enrollment_no}&course=${state.userInfo.enrollment_no}`)
    setData(response.data)
    console.log(data)
}

  const { rootState } = useContext(StudentContext);
  const { isAuth, theUser, showLogin } = rootState;
    
  const [courses, setCourses] = useState(null)
    const getCourses = async (event) => {
        event.preventDefault();
        const response = await axios.get(`${fetchURL}/getCourses.php?enrollment_no=${theUser.enrollment_no}`)
        setCourses(response.data)
        // console.log(courses)
        
    }
  // const [data, setData] = useState(null)
  //   const getData = () =>
  //   fetch(`${fetchURL}/read.php?id=${theUser.enrollment_no}`)
  //     .then((res) => res.json())
  //     useEffect(() => {
  //       getData().then((data) => setData(data))
  //     }) // eslint-disable-line react-hooks/exhaustive-deps

 


    

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
        <div className="studentAttendence">
            <HomeSidebar />

            <div className="currentClass">
            <h1 className="time_display">Attendence</h1>
            <div className="currentClass_search">
            <button className="currentClass_button" onClick={getCourses}>My Courses</button>

                        <form onSubmit={submitForm}>
                                <select name="enrollment_no" value={state.userInfo.enrollment_no} onChange={onChangeValue} required >
                                <option defaultValue ></option>
                                {courses?.map((item) =>
                                    <option  value={item.course}>{item.course}</option>)}
 
                                    </select>
                                
                                <input type="submit" onClickclassName="currentClass_button" value="Get Attendance" className="currentClass_button" />

                            </form>
                        </div>




            <table className="student_table">
            <thead className="student_head">
                <tr className="student_row">
                    {/* <th>Enrollment No.</th> */}
                    <th>Subject</th>
                    <th>Date</th>
                    <th>In Time</th>
                </tr>
            </thead>
            {/* <tbody className="student_body"> */}
            {data?.map((item) => 
                <tr className="student_row">
                    {/* <td>{item.enrollment_no}</td> */}
                    <td>{item.course}</td>
                    <td>{item.date}</td>
                    <td>{item.in_time}</td>
                    
                </tr>
                
            )}</table>
        </div>
        </div>
        </div>
    );
 }
 else if (showLogin) {
    return <Login />;
}
else {
    return <Register />;
}
}

export default ViewAttendance;
