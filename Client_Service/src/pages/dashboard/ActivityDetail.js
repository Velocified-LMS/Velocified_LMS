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
                            <div style={{'margin-right': '0%'}}>
                                Update on Activity
                                <div
                                    id="feedback"
                                    name="feedback"
                                    style={{
                                        border: '1px solid #DADADA',
                                        minHeight: '50px', // simulates 'rows' attribute in textarea
                                        maxHeight: '150px', // maximum height before scrolling
                                        overflowY: 'auto', // adds scrollbar if content exceeds maxHeight
                                        padding: '5px', // optional, for better text spacing
                                        textAlign: 'left', // ensures text alignment is consistent with the source
                                        whiteSpace: 'pre-wrap', // respects new lines and spaces
                                        wordBreak: 'break-word' // ensures long words do not overflow
                                    }}
                                    readOnly={true}
                                    dangerouslySetInnerHTML={{ __html: activity.update }}
                                />
                                {/* <textarea id="feedback" name="feedback" rows="6" cols="30" style={{border:'1px solid #DADADA'}} readOnly value={activity.update}/> */}
                            </div>
                            <div style={{ marginRight: '0%' }}>
                                Activity Description
                                <div
                                    id="feedback"
                                    name="feedback"
                                    style={{
                                        border: '1px solid #DADADA',
                                        minHeight: '100px', // simulates 'rows' attribute in textarea
                                        maxHeight: '300px', // maximum height before scrolling
                                        overflowY: 'auto', // adds scrollbar if content exceeds maxHeight
                                        padding: '5px', // optional, for better text spacing
                                        textAlign: 'left', // ensures text alignment is consistent with the source
                                        whiteSpace: 'pre-wrap', // respects new lines and spaces
                                        wordBreak: 'break-word' // ensures long words do not overflow
                                    }}
                                    readOnly={true}
                                    dangerouslySetInnerHTML={{ __html: activity.activityDescription }}
                                />
                            </div>

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
