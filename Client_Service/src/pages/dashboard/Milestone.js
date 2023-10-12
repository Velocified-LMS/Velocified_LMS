import React, { useState } from 'react';
import "./Modal.css";

const Milestone = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popup">
            <div className="modalContent">
            <div className="header">
                <div className="pathTitle left">
                    Congratulations !
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="content">
                <div className="scrollableContent">
                    {children}
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Milestone;
