import React, { useState } from 'react';
import "./ActivityDetail.css";
import PathFeedback from './PathFeedback';
import { updateUser } from '@/services/ApiService';

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
    const [completed, setCompleted] = useState(user.activities[activity._id].completed);
    const [signoff, setSignoff] = useState(user.activities[activity._id].signoff);

    const handleNotes = (event) => {
        setNotes(event.target.value)
    };

    const saveNotes = () => {
        user.activities[activity._id].notes = notes
        user.activities[activity._id].completed = completed;
        user.activities[activity._id].signoff = signoff;
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

                    <div className='scrollableContentAD ' style={{margin:'5%'}} >
                        <div style={{display:'flex', flexDirection:'column'}} >
                        <div className='description' >
                            {activity.activityDescription}
                        </div>
                        <div className='activityState'>
                            <input type='checkbox' checked={signoff} onChange={() => setSignoff(!signoff)}/>
                            <label>Sign-Off</label> 
                            <input type='checkbox' onChange={() => setCompleted(!completed)} checked={completed}/>
                            <label>Complete</label>     
                        </div>
                        <div className="notes-container">
                            My Notes
                            <textarea 
                                id="myNotes" value={notes} onChange={handleNotes} 
                                name="myNotes" rows="6" cols="30" 
                                style={{border:'1px solid #DADADA'}}/>
                        </div>
                        <div className="feedback-container">
                            Feedback Notes
                            <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}}></textarea>
                        </div>
                        <div className="path-feedback" style={{fontSize: '17px', fontWeight: 600}} onClick={saveNotes} >
                            Save Notes
                        </div>
                        <div className="path-feedback" style={{fontSize: '17px', fontWeight: 600}} onClick={togglePathFeedback} >
                            Path feedback
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActivityDetail;
