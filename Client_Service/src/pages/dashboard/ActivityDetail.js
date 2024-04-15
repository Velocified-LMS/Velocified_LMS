import React, { useState } from 'react';
import "./ActivityDetail.css";
import PathFeedback from './PathFeedback';
import styles from "./dashboard.module.css"
import { updateActivity, updateUser } from '../../services/ApiService';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

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

    const handleNotes = (content, delta, source, editor) => {
        setNotes(editor.getHTML());
    };

    const saveNotes = async () => {
        user.activities[activity._id].notes = notes
        user.activities[activity._id].completed = completed;
        let cnt = 0;
        Object.values(user.activities).forEach(element => {
            if (element.completed)
                cnt += 1
        });
        const completion = user.activities.length > 0 ? (cnt / user.activities.length) * 100 : 0;
        user.completion = completion.toFixed(1);
        await updateUser(user);
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

                    <div className='scrollableContentAD ' style={{margin:'5%', 'overflow-y': 'scroll', height: '50vh', fontWeight: '400'}} >

                        <div style={{display:'flex', flexDirection:'column'}} >
                            <div style={{ marginRight: '0%' }}>
                                Activity Description
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    style={{height: '30vh'}}
                                    value={activity.activityDescription}
                                    readOnly={true}
                                    theme={"bubble"}
                                    placeholder="Activity Description"
                                />
                            </div>

                            <div className='activityState'>
                                <input type='checkbox' onChange={() => setCompleted(!completed)} checked={completed}/>
                                <label>Complete</label>     
                            </div>

                            <div style={{'margin-right': '0%'}}>
                                Update on Activity
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    value={activity.update}
                                    readOnly={true}
                                    theme={"bubble"}
                                    placeholder="Update of the Activity"
                                />
                            </div>


                            <div style={{'margin-top': '3%'}}>
                                Message to Coach
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    value={notes}
                                    onChange={handleNotes}
                                    placeholder="Message to Coach"
                                />
                            </div>
                            <div style={{'margin-top': '3%'}}>
                                Message from Coach
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    value={feedback}
                                    readOnly={true}
                                    theme={"bubble"}
                                    placeholder="Message from the coach"
                                />
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
        </div>
    );
};

export default ActivityDetail;
