import React, { useState } from 'react';
import "./Pathview.css";

const PathOverview = ({ isOpen, path }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupMilestone">
            <div className="modalContentM">
            <div className="headerMilestone">
                <div className="pathTitle left">
                    Path Overview
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="scrollableContent">
              <p>{ path.pathOverview }</p>
            </div>
    
          </div>
      </div>
  </div>
  );
};

export default PathOverview;
