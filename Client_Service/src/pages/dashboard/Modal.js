import React, { useState } from 'react';
import styles from "./Modal.module.css";

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
        <div className={styles.popup}>
            <div className={styles.modalContent}>
            <div className={styles.header}>
                <div className={styles.pathTitle}>
                    Path Overview
                </div>
                <div onClick={handleClose}>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className={styles.content}>
                <div className={styles.scrollableContent}>
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
