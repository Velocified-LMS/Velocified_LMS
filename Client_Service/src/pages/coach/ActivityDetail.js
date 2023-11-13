import React, { useEffect, useState } from 'react';
import "./ActivityDetail.css";
import { getActivity, updateUser } from '@/services/ApiService';

const ActivityDetail = ({ isOpen, activity, user }) => {

    const handleClose = () => {
        isOpen(false);
    };

    const [activityVal, setActivity] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [completed, setCompleted] = useState(false);
    const [signoff, setSignoff] = useState(false);
    const [notes, setNotes] = useState("");

    const handleNotes = (event) => {
        setFeedback(event.target.value)
    };

    const saveNotes = () => {
        user.activities[activity._id].notes = notes
        user.activities[activity._id].completed = completed;
        user.activities[activity._id].signoff = signoff;
        user.activities[activity._id].feedback = feedback;
        updateUser(user);
        isOpen(false);
    };

    useEffect(() => {
        const initializeData = async () => {
            setFeedback(user.activities[activity._id].feedback);
            setNotes(user.activities[activity._id].notes);
            setCompleted(user.activities[activity._id].completed);
            setSignoff(user.activities[activity._id].signoff);
            setActivity(activity);
        }
        initializeData();
    }, []);


    if (user === undefined || activity === undefined || activity === null || activityVal === null)
        return "Loading...";

    return (
        <div className="modal">
            <div className="popup">
                <div className="modalContent">
                <div className="header">
                    <div className="pathTitle left">
                        {activityVal.activityName}
                    </div>
                    <div onClick={handleClose} className='right'>
                        <img src='/icons/close.svg' style={{height: '30%'}}/>
                    </div> 
                </div>

                    <div className='scrollableContentAD ' style={{margin:'5%'}} >
                        <div style={{display:'flex', flexDirection:'column'}} >
                        <div className='description' >
                            {activityVal.activityDescription}
                        </div>
                        <div className='activityState'>
                            <input type='checkbox' checked={signoff} onChange={() => setSignoff(!signoff)}/>
                            <label>Sign-Off</label> 
                            {/* <input type='checkbox' onChange={() => setCompleted(!completed)} checked={completed}/>
                            <label>Complete</label>      */}
                        </div>
                        <div className="notes-container">
                            My Notes
                            <textarea 
                                id="myNotes" value={notes} readOnly 
                                name="myNotes" rows="6" cols="30" 
                                style={{border:'1px solid #DADADA'}}/>
                        </div>
                        <div className="feedback-container">
                            Feedback Notes
                            <textarea 
                                id="feedback" name="feedback" 
                                rows="6" cols="30" style={{border:'1px solid #DADADA'}} 
                                value={feedback} onChange={handleNotes}
                                />
                        </div>
                        <div className="path-feedback" style={{fontSize: '17px', fontWeight: 600}} onClick={saveNotes} >
                            Save Notes
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActivityDetail;
