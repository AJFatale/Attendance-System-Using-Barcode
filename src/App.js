import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Student/Login';
import Register from './components/Student/Register';
import FacultyRegister from './components/Faculty/FacultyRegister';
import FacultyLogin from './components/Faculty/FacultyLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyContextProvider from './contexts/MyContext';
import StudentContextProvider from './contexts/StudentContext';
import StudentDashboard from './components/Student/StudentDashboard'
import FacultyDashboard from './components/Faculty/FacultyDashboard'
import FacultyProfile from './components/Faculty/FacultyProfile';
import UpdateDetails from './components/Faculty/UpdateDetails';
import StudentAttendence from './components/Faculty/StudentAttendence';
import StudentReport from './components/Faculty/StudentReport';
import CurrentClass from './components/Faculty/CurrentClass';
import TimeTable from './components/Faculty/TimeTable';
import StudentProfile from './components/Student/StudentProfile'
import ViewAttendance from './components/Student/ViewAttendance'





function App() {

  return (
    <StudentContextProvider>
      <MyContextProvider>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
              <Route exact path='/faculty_register'>
                <FacultyRegister />
              </Route>
              <Route exact path='/faculty_login'>
                <FacultyLogin />
              </Route>
              <Route exact path='/student_dashboard'>
                <StudentDashboard />
              </Route>
              <Route exact path='/faculty_dashboard'>
                <FacultyDashboard />
              </Route>
              <Route exact path='/faculty_profile'>
                <FacultyProfile />
              </Route>
              <Route exact path='/student_profile'>
                <StudentProfile />
              </Route>
              <Route exact path='/update_details'>
                <UpdateDetails />
              </Route>
              <Route exact path='/student_attendence'>
                <StudentAttendence />
              </Route>
              <Route exact path='/current_class'>
                <CurrentClass />
              </Route>
              <Route exact path='/time_table'>
                <TimeTable />
              </Route>
              <Route exact path='/student_report'>
                <StudentReport />
              </Route>
              <Route exact path='/view_attendance'>
                <ViewAttendance />
              </Route>
            </Switch>
          </Router>
        </div>
      </MyContextProvider>
    </StudentContextProvider>

  );
}

export default App;
