import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {StudentContext} from '../../contexts/StudentContext'
import './Login.css';
import { useHistory } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import SidebarNav from '../Home/SidebarNav'



function Login() {
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

    const {loginUser,isLoggedIn} = useContext(StudentContext);

    const initialState = {
        userInfo:{
            enrollment_no:'',
            spassword:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On change input value (enrollment_no & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
            history.push("/student_dashboard");

        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

     // Show Message on Error or Success
     let successMsg = '';
     let errorMsg = '';
     if(state.errorMsg){
         errorMsg = <div className="error-msg">{state.errorMsg}</div>;
     }
     if(state.successMsg){
         successMsg = <div className="success-msg">{state.successMsg}</div>;
     }
     


    return (
        <div className = "registerMain">
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
        <div className="login">
           
            <h1>Login Here</h1>
            
          <form className="login_form" onSubmit={submitForm}>
              <label htmlFor="login-rollno">Enrollment No: </label>
              <input type="text" autoComplete="off" name="enrollment_no" required value={state.userInfo.enrollment_no} onChange={onChangeValue} />
              
              <label htmlFor="login-rollno">Password: </label>
              <input type="password" name="spassword" autoComplete="off" required value={state.userInfo.spassword} onChange={onChangeValue} />
              {errorMsg}
              {successMsg}
              <input type="submit" value="Login" className="login_button" />
          </form> 
          <div className="login_registerLink">
                <Link to='/register' style={{textDecoration:"none"}}>
                    <span style={{color:"#ffffff"}}>Not Registered account? Create an account</span>
                </Link>
          </div>
          {/* <div className="login_registerLink">
                <button onClick={toggleNav}>Register</button>
            </div> */}


        </div>
        </div>
    );
}

export default Login;
