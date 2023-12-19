import React, { useState, useEffect } from 'react';
import "./ActivityDetail.css";
import styles from "./coach.module.css"
import { updateActivity, updateUser } from '@/services/ApiService';
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
    const [activityVal, setActivity] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [completed, setCompleted] = useState(false);
    const [signoff, setSignoff] = useState(false);
    const [notes, setNotes] = useState("");
    const [update , setUpdated] = useState(null);

    const handleFeedback = (content, delta, source, editor) => {
        setFeedback(editor.getHTML());
    };

    const handleUpdate =  (content, delta, source, editor) => {
        setUpdated(editor.getHTML());
    };

    const saveNotes = () => {
        user.activities[activity._id].notes = notes
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
                        {activity.activityName}
                    </div>
                    <div onClick={handleClose} className='right'>
                        <img src='/icons/close.svg' style={{height: '30%'}}/>
                    </div> 
                </div>

                    <div className='scrollableContentAD ' style={{margin:'5%', 'overflow-y': 'scroll', height: '50vh'}} >

                        <div style={{display:'flex', flexDirection:'column'}} >
                            <div style={{ marginRight: '0%' }}>
                                Activity Description
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    value={activity.activityDescription}
                                    readOnly={true}
                                    theme={"bubble"}
                                    placeholder="Activity description"
                                />
                            </div>

                            <div className='activityState'>
                                <input type='checkbox' onChange={() => setSignoff(!signoff)} checked={signoff}/>
                                <label>Complete</label>     
                            </div>

                            <div style={{'margin-right': '0%'}}>
                                Update on Activity
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    value={update}
                                    onChange={handleUpdate}
                                    placeholder="Write Description of the Activity"
                                />
                            </div>


                            <div style={{'margin-top': '3%'}}>
                                Message to User
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    value={feedback}
                                    onChange={handleFeedback}
                                    placeholder="Write Description of the Activity"
                                />
                            </div>
                            <div style={{'margin-top': '3%'}}>
                                Message from User
                                <ReactQuill 
                                    className="scrollableContentAE"
                                    value={notes}
                                    readOnly={true}
                                    theme={"bubble"}
                                    placeholder="Message from User"
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
