import React, { useState } from 'react';
import "./ActivityEdit.css";
import { TextField,TextareaAutosize } from '@mui/material';
import { Description } from '@mui/icons-material';
import { updateActivity } from '@/services/ApiService';
const ActivityEdit = ({ activity, isOpen }) => {

  if (activity === undefined)
    return "Loading..."

  const [inputActivity, setInputActivity] = useState(activity.activityName);
  const [description, setDescription] = useState(activity.activityDescription);

  const handleActivityNameChange = (e) => {
    setInputActivity(e.target.value);
  };

  const handleActivityDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveActivity = () => {
    activity.activityDescription = description;
    activity.activityName = inputActivity;
    updateActivity(activity);
    handleClose();
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
                placeholder="activity name"
                value={inputActivity}
                onChange={handleActivityNameChange}
              />
              </div>
            <div className="scrollableContent" >
              <TextareaAutosize 
               style={{ width: '100%', height: '100%', resize: 'none', border: 'none' }}
               placeholder='Activity Description'
               value={description}
               onChange={handleActivityDescriptionChange}
              />
              </div>
              <button className="Msgsubmit"  style={{textAlign: 'center'}} onClick={handleSaveActivity}>
                Apply changes
              </button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ActivityEdit;
