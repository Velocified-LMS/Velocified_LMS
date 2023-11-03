import React, { useState } from 'react';
import "./Milestone.css";
import { TextareaAutosize } from '@mui/material';

const PathFeedback = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupMilestone">
            <div className="modalContentM">
            <div className="headerMilestone">
                <div className="pathTitle left">
                  Path Feedback
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            
            <div className="scrollableContent">
            <TextareaAutosize 
                    minRows={5} 
                    placeholder="Write Feedback"
                    
                    className="descriptionArea"
                  />
            </div>
            
            <button className="Msgsubmit" >
              Submit
            </button>
            </div>
            
            
        </div>
    </div>
  );
};

export default PathFeedback;
