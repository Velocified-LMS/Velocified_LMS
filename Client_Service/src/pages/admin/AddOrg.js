import React, { useState } from 'react';
import "./AddOrg.css";
import { TextField } from '@mui/material';
import { createCompany } from '@/services/ApiService';

const AddOrg = ({ isOpen, setCompanies, companies }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactFields, setContactFields] = useState(['']); // Initialize with one field

  const handleAddContact = () => {
    const newField = `Contact ${contactFields.length + 1}`;
    setContactFields([...contactFields, newField]);
  };

  const [divisionFields, setDivisionFields] = useState(['Division 1']); // Initialize with one field

  const handleAddDivision = () => {
    const newField = `Division ${divisionFields.length + 1}`;
    setDivisionFields([...divisionFields, newField]);
  };

  const handleCreateCompany = async () => {
    const company = {
      name: companyName,
      email: email,
      address: address,
      domain: email.split('@')[1],
      seats: 0
    }
    const response = await createCompany(company);
    setCompanies([...companies, response.data]);
    handleClose();
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
                // value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
                // value={address}
                onChange={(e) => setAddress(e.target.value)}      
                ></TextField>   
              </div>
              </div>
              <br />
              <div>
                <TextField 
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                placeholder= 'Email Address'  
                className='OrgDetailField'
                // value={email}
                onChange={(e) => setEmail(e.target.value)}      
                ></TextField>   
              </div>
              <br />
              <div>
                <button className="AddOrgBttn"  style={{textAlign: 'center'}} onClick={handleCreateCompany}>
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
