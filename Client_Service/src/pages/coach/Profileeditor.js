import React, { useState } from 'react';
import "./ProfileModal.css";
const Profileeditor = ({ isOpen, user }) => {

  const handleClose = () => {
    isOpen(false);
  };
  if(user === undefined)
    return "Loading...";
  return (
    <div className="profilemodal">
        <div className="popup">
            <div className="profilemodalContent">
              <div className="header">
                <div className="pathTitle left">
                     PROFILE
                </div>
                <div onClick={handleClose} className='right'>
                    Done
                </div> 
              </div>
              <div className="profilehead">
                <img src="/Icon1.svg" className='profile_icon' />
                <img src="/profile-background.svg" className='profile_background' />   
                <div style={{backgroundColor:"#5A20C3", width:'30vw', height:'5vh', marginTop:'-4px'}}> </div>
              </div>
             
              <div className="Name">{ user.username }</div>
              <table className="profile-table">
                <tbody>
                  <tr>
                    <td>User Guide</td>
                  </tr>
                  <tr>
                    <td>Completion Certificate</td>
                  </tr>
                  <tr>
                    <td>Change Password</td>
                  </tr>
                  <tr>
                    <td>Logout</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  );
};

export default Profileeditor;
