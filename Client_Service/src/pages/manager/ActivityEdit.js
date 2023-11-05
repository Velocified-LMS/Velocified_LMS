import React, { useState } from 'react';
import "./ActivityEdit.css";
import { TextField,TextareaAutosize } from '@mui/material';
const ActivityEdit = ({ activity, isOpen }) => {

  const [inputActivity, setInputActivity] = useState(activity);

  const handleActivityChange = (e) => {
    setInputActivity(e.target.value);
  };

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupAE">
            <div className="modalContentAE">
            <div className="headerAE">
                <div className="pathTitle left">
                    Edit Activity Detail
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="contentAE"  >
              <div style={{textAlign: 'left' , marginLeft:"2%"}}> 
              <TextField
              
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
              placeholder={activity}
              value={inputActivity}
              onChange={handleActivityChange}
              ></TextField>
              </div>
            <div className="scrollableContent" >
              <TextareaAutosize 
               style={{ width: '100%', height: '100%', resize: 'none', border: 'none' }}
               placeholder='Activity Description'
               >

               </TextareaAutosize>
              </div>
              <button className="Msgsubmit"  style={{textAlign: 'center'}}>
              Apply changes
            </button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ActivityEdit;
