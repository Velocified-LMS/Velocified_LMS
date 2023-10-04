import React, { useState } from 'react';
import "./Modal.css";

const Modal = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal">
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <div className="popup">
            <div className="modalContent">
            <div className="header">
                <div className="pathTitle">
                    Path Name
                </div>
                <div onClick={handleClose}>
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
      )}
    </div>
  );
};

export default Modal;
