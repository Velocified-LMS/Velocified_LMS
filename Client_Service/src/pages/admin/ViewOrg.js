import React, { useState } from 'react';
import "./ViewOrg.css";
import { TextField } from '@mui/material';

const ViewOrg = ({ isOpen, org }) => {

  const handleClose = () => {
    isOpen(false);
  };

  if (org === undefined)
    return "Loading...";

    // hook uses an array of fields to add to the popup
  const [contactFields, setContactFields] = useState(null); 

  const handleAddContact = () => {
    const newField = `Contact ${contactFields.length + 1}`;
    setContactFields([...contactFields, newField]); // add to the hook array
  };

  const [divisionFields, setDivisionFields] = useState(['Division 1']); 

  const handleAddDivision = () => {
    const newField = `Division ${divisionFields.length + 1}`;
    setDivisionFields([...divisionFields, newField]);
  };

  return (
    <div className="modal">
        <div className="popupBU">
            <div className="modalContentBU">
            <div className="headerBU">
                <div className="pathTitle left">
                {org.name}    
                              </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%', cursor:'pointer'}}/>
                </div> 
            </div>
            <div>
              <br></br>
              <div>  
              </div>
              
              <br />
              <div>
              <div>
                <TextField 
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                placeholder= 'Location' 
                value={org.address} 
                className='OrgDetailField'          
                ></TextField>   
              </div>
              <br/>
              <div>
                <TextField 
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                placeholder= 'Email address' 
                value={org.email} 
                className='OrgDetailField'          
                ></TextField>   
              </div>
              </div>
              <br />
              <div>
                <button className="AddOrgBttn"  style={{textAlign: 'center'}}>
                  Add
                </button>
              </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ViewOrg;
