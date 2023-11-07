import React, { useState } from 'react';
import "./NewActivity.css";
import { TextField,TextareaAutosize } from '@mui/material';
import { createActivity } from '@/services/ApiService';

const NewActivity = ({ isOpen, path }) => {

  const handleClose = () => {
    isOpen(false);
  };

  const [formData, setFormData] = useState({
    day: '',
    date: '',
    activityName: '',
    activityDescription: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateDate = (date) => {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    return dateRegex.test(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.day) {
      newErrors.day = 'Day is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }else if (!validateDate(formData.date)) {
      newErrors.date = 'Invalid date format (mm/dd/yyyy)';
    }

    if (!formData.activityName) {
      newErrors.activityName = 'Activity Name is required';
    }

    if (!formData.activityDescription) {
      newErrors.activityDescription = 'Activity Description is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      formData.path = path
      const response = await createActivity(formData);
      handleClose();
    }
  };

  return (
    <div className="modal">
        <div className="popupMilestone">
            <div className="modalContentM">
            <div className="headerMilestone">
                <div className="pathTitle left">
                    Add New Activity
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="scrollableContent">
            <form onSubmit={handleSubmit}>
            <table >
              <tr>
                <td style={{width:'20%'}}>Day</td>
                <td>
                  <TextField
                    value={formData.day}
                    name="day"
                    onChange={handleInputChange}
                    placeholder="Day"
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                    sx={{ width: '30%' }}
                  />
                   {errors.day && <div className="error">{errors.day}</div>}
                </td>
              </tr>
              <tr style={{ height: '70px' }}>
                <td>Date</td>
                <td style={{width:'30%'}}>
                  <TextField
                    placeholder="mm/dd/yyyy"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                    sx={{ width: '40%'}}
                  />
                  {errors.date && <div className="error">{errors.date}</div>}
                </td>
              </tr>
              <tr style={{ height: '70px' }}>
                <td>Activity Name</td>
                <td>
                  <TextField
                    placeholder="Name"
                    name="activityName"
                    value={formData.activityName}
                    onChange={handleInputChange}
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                    sx={{ width: '60%'}}
                  />
                  {errors.activityName && <div className="error">{errors.activityName}</div>}
                </td>
              </tr>
              <tr style={{ height: '70px' }}>
                <td>Activity Description</td>
                <td >
                  <TextareaAutosize 
                  name="activityDescription"
                    minRows={5} 
                    placeholder="Write Description of the Activity"
                    value={formData.activityDescription}
                    onChange={handleInputChange}
                    className="descriptionArea"
                  />
                  {errors.activityDescription && <div className="error">{errors.activityDescription}</div>}
                </td>
              </tr>
            </table>
            <button className="Msgsubmit" type="submit">
              Submit
            </button>
            </form>
                </div>
    
            </div>
        </div>
    </div>
  );
};

export default NewActivity;
