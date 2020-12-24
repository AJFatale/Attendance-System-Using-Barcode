import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
import {MyContext} from '../../contexts/MyContext'
import { useHistory } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
// import SidebarNav from '../Navbar/SidebarNav'
import SidebarNav from '../Home/SidebarNav';


function Faculty_Register() {
    const [sidebarOpen,setsidebarOpen] = useState(false);
  const handleOpen = () => {
     setsidebarOpen(true);
  };
  const handleClose = () => {
    setsidebarOpen(false);
 };

    const history = useHistory();


    const {registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            fname:'',
            email_id:'',
            fpassword:'',
            course:'',
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
            history.push("/faculty_login");

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
            {/* <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null} */}
        </div>
        <div className="register">
            <h1>Register Here</h1>
          <form className="register_form" onSubmit={submitForm} >

              <label htmlFor="register-name">Full Name: </label>
              <input name="fname" required type="text" value={state.userInfo.fname} onChange={onChangeValue} autoComplete="off" />
              
              {/* <label htmlFor="register-class">Class: </label>
              <select className="select" name="class" value={state.userInfo.classs} onChange={onChangeValue} required >
                  <option defaultValue value="N/A"></option>
                  <option value="FE">FE</option>
                  <option value="SE">SE</option>
                  <option value="TE">TE</option>
                  <option value="BE">BE</option>
                  </select> */}
             
              <label htmlFor="register-class">Course/Subject: </label>
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

              <label htmlFor="register-email">Email-Id: </label>
              <input name="email_id" required value={state.userInfo.email_id} onChange={onChangeValue} type="email" autoComplete="off" />

              <label htmlFor="register-rollno">Password: </label>
              <input name="fpassword" type="password" required value={state.userInfo.fpassword} onChange={onChangeValue} autoComplete="off" />
              
              {/* <label htmlFor="register-rollno">Confirm Password: </label>
              <input type="password" autoComplete="off" /> */}
              
              {errorMsg}
              {successMsg}

              <input type="submit" value="Register" className="register_button" />
          </form> 
          <div className="register_loginLink">
                <Link to='/faculty_login' style={{textDecoration:"none"}}>
                    <span style={{color:"#ffffff"}}>Alredy Have account ? Login</span>
                </Link>
          </div>
        </div>
        </div>
    );
}

export default Faculty_Register;
