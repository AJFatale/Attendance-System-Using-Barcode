import React, { useContext,  useState } from 'react'
import HomeSidebar from './HomeSidebar';
// import './StudentAttendence.css';
import './CurrentClass.css';
import Navbar from './Navbar';
import { MyContext } from '../../contexts/MyContext'
import SidebarNav from './SidebarNav'
// Importing the Login & Register Componet
import FacultyLogin from './FacultyLogin'
import FacultyRegister from './FacultyRegister'
import axios from 'axios'

const fetchURL = "http://localhost/ams-api/faculty-api"

function CurrentClass() {

    const initialState = {
        userInfo: {
            date: '',
            course: '',
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
        const response = await axios.get(`${fetchURL}/getLecture.php?id=${theUser.course}`)
        setData(response.data)
        // console.log(data)
    }

    const { rootState } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;
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
                <div><Navbar open={handleOpen} />
                    {sidebarOpen ? (
                        <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
                    ) : null}
                </div>
                <div className="currentClassMain">
                    <HomeSidebar />
                    <div className="currentClass">
                        <h1 className="time_display">Lectures List</h1>
                        <div className="currentClass_search">
                        <form onSubmit={submitForm}>
                                <select name="course" value={state.userInfo.course} onChange={onChangeValue} required >
                                    {/* <option  value="Select Course">Select Course</option> */}
                                    <option defaultValue value={theUser.course}>{theUser.course}</option>
                                    {/* <input className="searchInput" type="search" placeholder="Filter" /> */}
                                </select>
                                
                                <input type="submit" onClickclassName="currentClass_button" value="Get Lectures" className="currentClass_button" />

                            </form>
                            
                        </div>
                        <table className="student_table">
                            <thead className="student_head">
                                <tr className="student_row">
                                    <th>Course Name</th>
                                    <th>Date</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                </tr>
                            </thead>

                            {data?.map((item) =>
                                <tr className="student_row">
                                    <td>{item.course}</td>
                                    <td>{item.ldate}</td>
                                    <td>{item.start_time}</td>
                                    <td>{item.end_time}</td>
                                </tr>
                            )}

                            {/* <tr className="student_row">
                                <th>1</th>
                                <td>BE18123</td>
                                <td>John Williamson</td>
                                <td></td>
                                <td>{theUser.course}</td>
                                <td>70%</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>BE18132</td>
                                <td>Jacob Potter</td>
                                <td>CS3001</td>
                                <td>Data Structure</td>
                                <td>60%</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>BE18453</td>
                                <td>Helly Shah</td>
                                <td>CS3001</td>
                                <td>Data Structure</td>
                                <td>75%</td>
                            </tr> */}



                        </table>

                    </div>
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

export default CurrentClass;