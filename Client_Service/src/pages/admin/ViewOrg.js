import React, { useState } from 'react';
import "./ViewOrg.css";
import { TextField } from '@mui/material';

const ViewOrg = ({ isOpen, org }) => {

  const handleClose = () => {
    isOpen(false);
  };

  if (org === undefined)
    return "Loading...";

  const [contactFields, setContactFields] = useState([...org.contact]); 

  const handleAddContact = () => {
    const newField = `Contact ${contactFields.length + 1}`;
    setContactFields([...contactFields, newField]);
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
                {org.Organization_name}    
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
                value={org.Location} 
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
              value={field}
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

export default ViewOrg;
