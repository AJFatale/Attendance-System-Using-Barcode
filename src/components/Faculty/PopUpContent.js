import React, { useContext, useState } from 'react'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './PopUpContent.css';
import { MyContext } from '../../contexts/MyContext'

function PopUpContent() {
    const { rootState } = useContext(MyContext);
    const { theUser } = rootState;

    const [value, onChange] = useState('10:00');
    const [time, setTime] = useState('10:00');
    const selectTime = (time) => {
        setTime(time);
    }

    
 
    return (
        <div className="popUpContent">
            <div className="popUpContent_One">
                {/* <select defaultValue="select subject" className="select_option"> */}
                <strong className="select_option">{theUser.course}</strong>
                {/* <option>DS</option>
                    <option>OOPs</option>
                    <option>DAA</option>
                    <option>JAVA</option> */}
                {/* </select> */}
                <div className="popUpContent_OneTwo">
                    {/* <p>Date</p> */}
                    <form className="popUpContent_TwoForm">
                        <p className="time_display">Start Time {time}</p>
                        <TimePicker onChange={selectTime} value={time} className="time_picker" />
                        <p className="time_display">End Time {value}</p>
                        <TimePicker onChange={onChange} value={value} />
                        {/* <label style={{color:"black"}}>Duration in hours {time}</label> */}
                        {/* <input type="text"style={{backgroundColor:"white",border:"1px solid darkgrey",color:"black"}}/> */}
                        <button className="discard_button" style={{backgroundColor:"#66FFFF"}}>Confirm</button>
                    </form>

                    {/* <button className="discard_button" onnclick={loginUser}>Discard</button> */}
                </div>

            </div>
            <div className="popUpContent_Two">
                {/* <select defaultValue="select subject" className="select_option">
                    <option>Practical</option>
                    <option>Theory</option>
                </select> */}

            </div>

        </div>
    )
}

export default PopUpContent
