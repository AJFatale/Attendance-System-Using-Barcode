import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import {StudentContext} from '../../contexts/StudentContext'
import './Register.css';
import { useHistory } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import SidebarNav from '../Home/SidebarNav'


function Register() {
    const [sidebarOpen,setsidebarOpen] = useState(false);
  const handleOpen = () => {
     setsidebarOpen(true);
  };
  const handleClose = () => {
    setsidebarOpen(false);
 };
    // const [rollno,setRollno]=useState();
    // const [password,setPassword]=useState();
    const history = useHistory();

    const {registerUser} = useContext(StudentContext);
    const initialState = {
        userInfo:{
            sname:'',
            enrollment_no:'',
            email_id:'',
            semester:'',
            course:'',
            spassword:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
            history.push("/login");

        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }







    return (
        <div className="registerMain">
        <div>
            
            <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}
        </div>
        <div className="register">
            <h1>Register Here</h1>
          <form className="register_form" onSubmit={submitForm}>

              <label htmlFor="register-name">Full Name: </label>
              <input type="text" autoComplete="off" name="sname" required value={state.userInfo.sname} onChange={onChangeValue} />
              
              {/* <label htmlFor="register-class">Class: </label>
              <input type="text" autoComplete="off" /> */}

              <label htmlFor="register-rollno">Enrollment No: </label>
              <input type="text" autoComplete="off" name="enrollment_no" required value={state.userInfo.enrollment_no} onChange={onChangeValue}/>

              <label htmlFor="register-semester">Semester: </label>
              {/* <input type="text" autoComplete="off" /> */}
              <select id="semester "name="semester" className="select" value={state.userInfo.semester} onChange={onChangeValue} required>
                  <option defaultValue value="N/A"></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>                  
              </select>

              <label htmlFor="register-email">Email Id: </label>
              <input type="email" autoComplete="off" name="email_id" required value={state.userInfo.email_id} onChange={onChangeValue} />

              <label htmlFor="register-rollno">Registered Subjects/Course: </label>
              {/* <input type="text" autoComplete="off" /> */}
              <select className="select" name="course" value={state.userInfo.course} onChange={onChangeValue} required >
                  <option defaultValue value="N/A"></option>
                  <option value="CS3005:Data Mining and warehousing">CS3005:Data Mining and warehousing</option>
                  <option value="CS3002:Operating System">CS3002:Operating System</option>
                  <option value="CS3003:Theory of Computation">CS3003:Theory of Computation</option>
                  <option value="CS3001:Design and Analysis of Algorithm">CS3001:Design and Analysis of Algorithm</option>
                  <option value="CS4008:PL1 Cloud Computing">CS4008:PL1 Cloud Computing</option>
                  <option value="CS3004:Software Engineering">CS3004:Software Engineering</option>
                  </select>

              <label htmlFor="register-rollno">Password: </label>
              <input name="spassword" type="password" autoComplete="off" required value={state.userInfo.spassword} onChange={onChangeValue} />

              {/* <label htmlFor="register-rollno">Confirm Password: </label>
              <input type="password" autoComplete="off" name="spassword" required value={state.userInfo.spassword} onChange={onChangeValue}/> */}

{/* {state.userInfo.sname}
{state.userInfo.enrollment_no}
{state.userInfo.email_id}
{state.userInfo.spassword}
{state.userInfo.course}
{state.userInfo.semester} */}
              {errorMsg}
              {successMsg}
              
              <input type="submit" value="Register" className="register_button" />
          </form> 
          <div className="register_loginLink">
                <Link to='/login' style={{textDecoration:"none"}}>
                    <span style={{color:"#ffffff"}}>Alredy Have account ? Login</span>
                </Link>
          </div>

            {/* <div className="register_loginLink">
                <button  onClick={toggleNav}>Login</button>
            </div> */}

        </div>
        </div>
    );
}

export default Register;
