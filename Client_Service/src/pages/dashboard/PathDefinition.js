import React, { useState } from 'react';
import "./Pathview.css";

const PathDefinition = ({ isOpen, path }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupMilestone">
            <div className="modalContentM">
            <div className="headerMilestone">
                <div className="pathTitle left">
                    Path Definition
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="scrollableContent">
              <p>{ path.proficiencyDefinition}</p>
            </div>
          </div>
      </div>
  </div>
  );
};

export default PathDefinition;
