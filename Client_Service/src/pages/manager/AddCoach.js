import React, { useState } from 'react';
import "./AddCoach.css";
import { TextField } from '@mui/material';

const AddCoach = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupAC">
            <div className="modalContentAC">
            <div className="headerAC">
                <div className="pathTitle left">
                    Add Coach
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div>
              <br></br>
              <div>
                <TextField 
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                placeholder= 'Enter Coach Mail ID'            
                ></TextField>   
              </div>
              
              <br />
              <div>
                <button className="AddCoachBttn"  style={{textAlign: 'center'}}>
                  Add
                </button>
              </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default AddCoach;
