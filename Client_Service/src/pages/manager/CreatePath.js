import React, { useState } from 'react';
import "./CreatePath.css";
import { TextField } from '@mui/material';
import { createPath, getCompany, updateCompany } from '../../services/ApiService';
import { combineEventUis } from '@fullcalendar/core/internal';

const CreatePath = ({ isOpen, company, setPath }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const [pathName, setPathName] = useState("");
  const [seats, setSeats] = useState(0);

  const handleCreate = async () => {
    const path = {
      pathName: pathName,
      seats: seats,
      company: company
    }
    const response = await createPath(path);
    setPath(response.data)
    // const cmp = await getCompany(company);
    const cmp = {
      data: {
        name: "TestOrg",
        email: "iphantomeckoi@gmail.com",
        address: "ASU",
        domain: "gmail.com",
        seats: 0,
        __v: 0
      }
    }
    if(cmp.data.seats === undefined || cmp.data.seats === null) {
      cmp.data.seats = 0
    }
    const updatedCompany = {
      id: company,
      update: {
        seats: parseInt(cmp.data.seats) + parseInt(seats),
      }
    }
    const res = await updateCompany(updatedCompany);
    handleClose();
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
                value={pathName}
                onChange={(e) => setPathName(e.target.value)}       
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
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                ></TextField>        
              </div>
              <br />
              <div>
                <button className="CreatePathBttn"  style={{textAlign: 'center'}} onClick={handleCreate}>
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
