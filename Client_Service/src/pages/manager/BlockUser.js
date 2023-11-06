import React, { useState } from 'react';
import "./BlockUser.css";
import { TextField } from '@mui/material';

const BlockUser = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupBU">
            <div className="modalContentBU">
            <div className="headerBU">
                <div className="pathTitle left">
                    Blocklist User
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%', cursor:'pointer'}}/>
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
                placeholder= 'Enter Mail ID of User'            
                ></TextField>   
              </div>
              
              <br />
              <div>
                <button className="BlockUsrBttn"  style={{textAlign: 'center'}}>
                  Block
                </button>
              </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default BlockUser;
