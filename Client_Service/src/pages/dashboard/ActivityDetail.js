import React, { useState } from 'react';
import "./ActivityDetail.css";
import PathFeedback from './PathFeedback';
import styles from "./dashboard.module.css"
import { updateActivity, updateUser } from '@/services/ApiService';

const ActivityDetail = ({ isOpen, activity, user }) => {

    const handleClose = () => {
        isOpen(false);
    };
    const [PathFeedbackVisible, setPathFeedbackVisible] = useState(false);
    const togglePathFeedback = (visible) => {
        setPathFeedbackVisible(visible);
    };

    if (activity === undefined || user === undefined)
    return "Loading...";

    const [notes, setNotes] = useState(user.activities[activity._id].notes);
    const feedback = user.activities[activity._id].feedback;
    const [completed, setCompleted] = useState(user.activities[activity._id].completed);

    const handleNotes = (event) => {
        setNotes(event.target.value)
    };

    const saveNotes = () => {
        user.activities[activity._id].notes = notes
        user.activities[activity._id].completed = completed;
        updateUser(user);
        isOpen(false);
    };

    return (
        <div className="modal">
            {PathFeedbackVisible && <PathFeedback isOpen={togglePathFeedback}/> }
            <div className="popup">
                <div className="modalContent">
                <div className="header">
                    <div className="pathTitle left">
                        {activity.activityName}
                    </div>
                    <div onClick={handleClose} className='right'>
                        <img src='/icons/close.svg' style={{height: '30%'}}/>
                    </div> 
                </div>

                    <div className='scrollableContentAD ' style={{margin:'5%', 'overflow-y': 'scroll', height: '50vh'}} >
                        <div style={{display:'flex', flexDirection:'column'}} >
                            <div style={{'margin-right': '5%'}}>
                                Update on Activity
                                <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}} readOnly value={activity.update}/>
                            </div>
                            <div style={{'margin-right': '5%'}}>
                                Activity Description
                                <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}} readOnly value={activity.activityDescription}/>
                            </div>
                            {/* <div className='description' >
                                Activity Description
                                <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}} readOnly value={activity.activityDescription}/>
                            </div> */}
                            <div className='activityState'>
                                {/* <input type='checkbox' checked={signoff} onChange={() => setSignoff(!signoff)}/>
                                <label>Sign-Off</label>  */}
                                <input type='checkbox' onChange={() => setCompleted(!completed)} checked={completed}/>
                                <label>Complete</label>     
                            </div>
                            <div style={{'margin-right': '5%'}}>
                                Message to Coach
                                <textarea 
                                    id="myNotes" value={notes} onChange={handleNotes} 
                                    name="myNotes" rows="6" cols="30" 
                                    style={{border:'1px solid #DADADA'}}/>
                            </div>
                            <div style={{'margin-right': '5%'}}>
                                Message from Coach
                                <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}} readOnly value={feedback}/>
                            </div>
                            {/* <div className="path-feedback" style={{fontSize: '17px', fontWeight: 600}} onClick={saveNotes} >
                                Save Notes
                            </div> */}
                            {/* <div className="path-feedback" style={{fontSize: '17px', fontWeight: 600}} onClick={togglePathFeedback} >
                                Path feedback
                            </div> */}
                            </div>
                            <div className="save" style={{
                                alignItems:'center',
                                display: 'flex',
                                justifyContent: 'center',
                                height: '3vh',
                                width: '10vw',
                                position: 'absolute',
                                bottom: '18vh',
                                left: '45vw',
                                background: '#6E28EE',
                                'border-radius': '16px',
                                border: '1px solid #',
                                color: '000'

                            }} onClick={saveNotes} >
                                Save Message
                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActivityDetail;
