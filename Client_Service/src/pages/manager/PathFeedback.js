import React, { useState } from 'react';
import "./Milestone.css";

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
            <div className="contentMilestone">
            <div className="scrollableContent">
              <p>Hiii</p>
            </div>
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
