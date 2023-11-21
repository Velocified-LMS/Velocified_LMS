import React, { useEffect, useState } from 'react';
import "./ActivityDetail.css";
import { getActivity, updateActivity, updateUser } from '@/services/ApiService';

const ActivityDetail = ({ isOpen, activity, user }) => {

    const handleClose = () => {
        isOpen(false);
    };

    const [activityVal, setActivity] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [completed, setCompleted] = useState(false);
    const [signoff, setSignoff] = useState(false);
    const [notes, setNotes] = useState("");
    const [update , setUpdated] = useState(null);

    const handleNotes = (event) => {
        setFeedback(event.target.value)
    };

    const handleUpdate = (event) => {
        setUpdated(event.target.value);
    };

    const saveNotes = () => {
        user.activities[activity._id].notes = notes
        user.activities[activity._id].completed = completed;
        user.activities[activity._id].signoff = signoff;
        user.activities[activity._id].feedback = feedback;
        updateUser(user);
        activity.update = update;
        updateActivity(activity);
        isOpen(false);
    };

    useEffect(() => {
        const initializeData = async () => {
            setFeedback(user.activities[activity._id].feedback);
            setNotes(user.activities[activity._id].notes);
            setCompleted(user.activities[activity._id].completed);
            setSignoff(user.activities[activity._id].signoff);
            setActivity(activity);
            setUpdated(activity.update)
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

                <div className='scrollableContentAD ' style={{margin:'5%', 'overflow-y': 'scroll', height: '50vh'}} >
                    <div style={{display:'flex', flexDirection:'column'}} >
                        <div style={{'margin-right': '5%'}}>
                            Update on Activity
                            <textarea 
                                id="update" value={update} onChange={handleUpdate} 
                                name="Update" rows="6" cols="30" 
                                style={{border:'1px solid #DADADA'}}/>
                        </div>
                        <div style={{'margin-right': '5%'}}>
                            Activity Description
                            <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}} readOnly value={activity.activityDescription}/>
                        </div>
                        <div className='activityState'>
                            <input type='checkbox' checked={signoff} onChange={() => setSignoff(!signoff)}/>
                            <label>Sign-Off</label> 
                        </div>
                        <div style={{'margin-right': '5%'}}>
                            Message from User:
                            <textarea 
                                id="myNotes" value={notes} readOnly 
                                name="myNotes" rows="6" cols="30" 
                                style={{border:'1px solid #DADADA'}}/>
                        </div>
                        <div style={{'margin-right': '5%'}}>
                            Message from you:
                            <textarea 
                                id="feedback" name="feedback" 
                                rows="6" cols="30" style={{border:'1px solid #DADADA'}} 
                                value={feedback} onChange={handleNotes}
                                />
                        </div>
                        </div>
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
    );
};

export default ActivityDetail;
