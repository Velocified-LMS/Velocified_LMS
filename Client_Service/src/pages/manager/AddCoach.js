import React, { useState } from 'react';
import "./AddCoach.css";
import { TextField } from '@mui/material';
import { createUser, getUser, getUserData, updateUser } from '../../services/ApiService';


const AddCoach = ({ isOpen, path, user }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const [input, setInput] = useState("");
  const [userError, setUserError] = useState(false);

  const addCoach = async () => {
    const res = await getUser({'email': input});
    
    if(res.data[0] === undefined || res.data[0] === null) {
      const coach = {
        email: input,
        access: 'coach',
        coach: [path.pathId],
        company: user.company,
        username: path.pathName + ":coach"
      }
      const response = await createUser(coach);
    } else {
      const coach = res.data[0];
      const paths = [...coach.coach, path.pathId]
      coach.coach = paths.reduce((unique, item) => {
        if (!unique.includes(item)) {
          unique.push(item);
        }
        return unique;
      }, []);
      coach.access = "coach";
      const response = await updateUser(coach);
    }
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupAC">
            <div className="modalContentAC">
            <div className="headerAC">
                <div className="pathTitle left">
                    Add Manager
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div>
              <br></br>
              {userError && <p>User is already registered</p>}
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
