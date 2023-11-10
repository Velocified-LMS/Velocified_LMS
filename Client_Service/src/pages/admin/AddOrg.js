import React, { useState } from 'react';
import "./AddOrg.css";
import { TextField } from '@mui/material';

const AddOrg = ({ isOpen, children }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const [contactFields, setContactFields] = useState(['Contact 1']); // Initialize with one field

  const handleAddContact = () => {
    const newField = `Contact ${contactFields.length + 1}`;
    setContactFields([...contactFields, newField]);
  };

  const [divisionFields, setDivisionFields] = useState(['Division 1']); // Initialize with one field

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
                    Add Organization
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
                    height: "5px"
                  },
                }}
                placeholder= 'Organization Name'
                className='OrgDetailField'            
                ></TextField>   
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
                className='OrgDetailField'          
                ></TextField>   
              </div>
              </div>
              <br />
             
      {contactFields.map((field, index) => (
        <div key={index} className='OrgDetailAddableField'>
          <span>
            <TextField
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
              placeholder={field}
            />
          </span>
          {index === contactFields.length - 1 && (
            <span onClick={handleAddContact} >
              <img src='/add_contact.svg' alt='Add Contact'  style ={{ height:'80%', widht:'80%'}}/>
            </span>
          )}
        </div>
      ))}
   
              <br />
              {divisionFields.map((dfield, index) => (
        <div key={index} className='OrgDetailAddableField'>
          <span>
            <TextField
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
              placeholder={dfield}
            />
          </span>
          {index === divisionFields.length - 1 && (
            <span onClick={handleAddDivision} >
              <img src='/add_contact.svg' alt='Add Division'  style ={{ height:'80%', widht:'80%'}}/>
            </span>
          )}
        </div>
      ))}
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

export default AddOrg;
