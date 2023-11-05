import React, { useState } from 'react';
import "./CreatePath.css";
import { TextField } from '@mui/material';

const CreatePath = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupCP">
            <div className="modalContentCP">
            <div className="headerCP">
                <div className="pathTitle left">
                    Create Path
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
                placeholder= 'Enter Path Name'            
                ></TextField>   
              </div>
              <br />
              <div>
                <TextField 
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                placeholder= 'Enter number of Seats'   
                ></TextField>        
              </div>
              <br />
              <div>
                <button className="CreatePathBttn"  style={{textAlign: 'center'}}>
                  Create
                </button>
              </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default CreatePath;
