import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import {MyContext} from '../../contexts/MyContext'
import { useHistory } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
// import SidebarNav from '../Navbar/SidebarNav'
import SidebarNav from '../Home/SidebarNav';



function FacultyLogin() {

    const [sidebarOpen,setsidebarOpen] = useState(false);
  const handleOpen = () => {
     setsidebarOpen(true);
  };
  const handleClose = () => {
    setsidebarOpen(false);
 };

    const history = useHistory();


    const {loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email_id:'',
            fpassword:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
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

            history.push("/faculty_dashboard");


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
        <div className="registerMain">
        <div className="display">
        {/* <div>
            <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}
        </div> */}
        <div>

        <Navbar open={handleOpen} />
              {sidebarOpen ? (
                <SidebarNav close={handleClose} sidebarOpen={setsidebarOpen} />
              ) : null}

        </div>
        <div className="login" >
            
            <h1>Login Here</h1>
            

          <form className="login_form" onSubmit={submitForm}>

              <label htmlFor="login-rollno">Email Id: </label>
              <input name="email_id" type="email" autoComplete="off" required value={state.userInfo.email_id} onChange={onChangeValue} />

              <label htmlFor="login-rollno">Password: </label>
              <input name="fpassword" required type="password" autoComplete="off" value={state.userInfo.fpassword} onChange={onChangeValue} />
                {errorMsg}
                {successMsg}
              <input type="submit" value="Login" className="login_button" />
          </form> 
          <div className="login_registerLink">
                <Link to='/faculty_register' style={{textDecoration:"none"}}>
                    <span style={{color:"#ffffff"}}>Not Registered account? Create an account</span>
                </Link>
          </div>
        </div>
        {/* <div><footer></footer></div> */}
        </div>
        </div>
    );
}

export default FacultyLogin;
