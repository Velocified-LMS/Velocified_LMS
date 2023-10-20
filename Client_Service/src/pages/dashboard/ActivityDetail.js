import React, { useState } from 'react';
import "./ActivityDetail.css";
import { Margin } from '@mui/icons-material';

const ActivityDetail = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popup">
            <div className="modalContent">
            <div className="header">
                <div className="pathTitle left">
                    Activity Name
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>

                <div className='scrollableContentAD ' style={{margin:'5%'}} >
                    <div style={{display:'flex', flexDirection:'column'}} >
                    <div className='description' >
                        Description about the Activity
                    </div>
                    <div className='activityState'>
                    <input type='checkbox' />
                        <label>Sign-Off</label> 
                        <input type='checkbox' />
                        <label>Complete</label>     
                    </div>
                    <div class="notes-container">
                        My Notes
                        <textarea id="myNotes" name="myNotes" rows="6" cols="30" style={{border:'1px solid #DADADA'}}></textarea>
                    </div>
                    <div class="feedback-container">
                        Feedback Notes
                        <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}}></textarea>
                    </div>
                    <div class="path-feedback" style={{fontSize: '17px', fontWeight: 600}} >
                                Path feedback
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ActivityDetail;
