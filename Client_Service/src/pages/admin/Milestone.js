import React, { useState } from 'react';
import "./Milestone.css";

const Milestone = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupMilestone">
            <div className="modalContentM">
            <div className="headerMilestone">
                <div className="pathTitle left">
                    Congratulations !
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="contentMilestone">
              <img src="/emoji_events.svg" />
            <div className="scrollableContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor orci eu lobortis.</p>
                    {children}
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Milestone;
