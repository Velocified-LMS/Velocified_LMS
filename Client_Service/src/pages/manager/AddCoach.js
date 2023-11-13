import React, { useState } from 'react';
import "./AddCoach.css";
import { TextField } from '@mui/material';
import { getUser, getUserData, updateUser } from '@/services/ApiService';


const AddCoach = ({ isOpen, path }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const [input, setInput] = useState("");
  const [userError, setUserError] = useState(false);

  const addCoach = async () => {
    const res = await getUser({'email': input});
    if(res.data[0] === undefined || res.data[0] === null) {
      setUserError(true);
      return;
    }
    const user = res.data[0];
    const paths = [...user.coach, path]
    user.coach = paths.reduce((unique, item) => {
      if (!unique.includes(item)) {
        unique.push(item);
      }
      return unique;
    }, []);
    if(user.access === undefined || user.access === "user") {
      user.access = "coach";
    }
    const response = await updateUser(user);
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupAC">
            <div className="modalContentAC">
            <div className="headerAC">
                <div className="pathTitle left">
                    Add Coach
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div>
              <br></br>
              {userError && <p>User has to be registered first to be made a coach</p>}
              <div>
                <TextField 
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                placeholder= 'Enter Coach Mail ID'  
                value = {input}
                onChange={(e) => setInput(e.target.value)}     
                ></TextField>   
              </div>
              
              <br />
              <div>
                <button className="AddCoachBttn"  style={{textAlign: 'center'}} onClick={addCoach}>
                  Add
                </button>
              </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default AddCoach;
