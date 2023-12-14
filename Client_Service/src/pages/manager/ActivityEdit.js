import React, { useState } from 'react';
import "./ActivityEdit.css";
import { TextField,TextareaAutosize } from '@mui/material';
import { Description } from '@mui/icons-material';
import { updateActivity } from '@/services/ApiService';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ActivityEdit = ({ activity, isOpen }) => {

  if (activity === undefined)
    return "Loading..."

  const [day, setDay] = useState(activity.day);
  const [inputActivity, setInputActivity] = useState(activity.activityName);
  const [description, setDescription] = useState(activity.activityDescription);

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleActivityNameChange = (e) => {
    setInputActivity(e.target.value);
  };

  // const handleActivityDescriptionChange = (e) => {
  //   setDescription(e.target.value);
  // };

  const handleActivityDescriptionChange = (content, delta, source, editor) => {
    setDescription(editor.getHTML()); // or use `content` for raw content
  };

  
  const handleSaveActivity = () => {
    activity.day = day;
    activity.activityDescription = description;
    activity.activityName = inputActivity;
    updateActivity(activity);
    handleClose();
  };

  const handleClose = () => {
    isOpen(false);
  };

  return (
    <div className="modal">
        <div className="popupAE">
            <div className="modalContentAE">
            <div className="headerAE">
                <div className="pathTitle left">
                    Edit Activity Detail
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="contentAE"  >
            <table >
              <tr>
                <td style={{width:'20%'}}>Day</td>
                <td>
                  <TextField
                    value={day}
                    name="day"
                    onChange={handleDayChange}
                    placeholder="Day"
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                    sx={{ width: '30%' }}
                  />
                   {/* {errors.day && <div className="error">{errors.day}</div>} */}
                </td>
              </tr>
              <tr style={{ height: '70px' }}>
                <td>Activity Name</td>
                <td>
                  <TextField
                    placeholder="Name"
                    name="activityName"
                    value={inputActivity}
                    onChange={handleActivityNameChange}
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                    sx={{ width: '60%'}}
                  />
                  {/* {errors.activityName && <div className="error">{errors.activityName}</div>} */}
                </td>
              </tr>
              <tr style={{ height: '25vh' }}>
                <td>Activity Description</td>
                <td style={{ height: '100%' }}>
                  {/* <TextareaAutosize 
                  name="activityDescription"
                    minRows={5} 
                    placeholder="Write Description of the Activity"
                    value={description}
                    onChange={handleActivityDescriptionChange}
                    className="descriptionArea"
                  /> */}
                  <ReactQuill 
                    className="scrollableContentAE"
                    value={description}
                    onChange={handleActivityDescriptionChange}
                    placeholder="Write Description of the Activity"
                    // className="descriptionArea"
                  />
                  {/* {errors.activityDescription && <div className="error">{errors.activityDescription}</div>} */}
                </td>
              </tr>
            </table>
              {/* <div style={{textAlign: 'left' , marginLeft:"2%", marginBottom: "2%"}}> 
                <TextField 
                  inputProps={{
                    style: {
                      height: "5px",
                    },
                  }}
                  placeholder="activity day"
                  value={day}
                  onChange={handleDayChange}
                />
              </div>
              <div style={{textAlign: 'left' , marginLeft:"2%"}}> 
                <TextField 
                  inputProps={{
                    style: {
                      height: "5px",
                    },
                  }}
                  placeholder="activity name"
                  value={inputActivity}
                  onChange={handleActivityNameChange}
                />
              </div>
            <div className="scrollableContent" >
              <TextareaAutosize 
               style={{ width: '100%', height: '100%', resize: 'none', border: 'none' }}
               placeholder='Activity Description'
               value={description}
               onChange={handleActivityDescriptionChange}
              />
              </div> */}
              <button className="Msgsubmit"  style={{textAlign: 'center'}} onClick={handleSaveActivity}>
                Apply changes
              </button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ActivityEdit;
