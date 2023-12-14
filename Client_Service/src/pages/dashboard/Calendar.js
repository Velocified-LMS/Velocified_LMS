import React, { useEffect, useState } from 'react';
import './Calendar.css';
import { Search } from '@mui/icons-material';
import { TextField, InputAdornment, Checkbox } from "@mui/material";
import PathOverview from './PathOverview';
import PathDefinition from './PathDefinition';
import { getActivities } from '@/services/ApiService';

const ListCalendar = ({path, isOpen}) => {

    const handleClose = () => {
      isOpen(false);
    };
    const [PathViewVisible, setPathVisible] = useState(false);
    const togglePathView = (visible) => {
        setPathVisible(visible);
    };
    const [PathDefinitionViewVisible, setPathDefinitionVisible] = useState(false);
    const togglePathDefinitionView = (visible) => {
        setPathDefinitionVisible(visible);
    };
    const [days, setDays] = useState({});
    useEffect(() => {
        getActivities(path._id).then((activities) => {
            let activityList = {}
            activities.data.map(element => {
                if (element.day in activityList) {
                    activityList[element.day].push(element)
                } else {
                    activityList[element.day] = [element]
                }
            });
            setDays(activityList);
        });
    }, []);
    if (path === undefined)
        return "Loading...";
    const completion = path.completed || 0;
    return (
    <div className="modal">
        {PathViewVisible && <PathOverview isOpen={togglePathView} path={path} /> }
        {PathDefinitionViewVisible && <PathDefinition isOpen={togglePathDefinitionView} path={path} /> }
        <div className="popup">
            <div className="modalContent">
            <div className="header">
                <div className="pathTitle left">
                    {path.pathName}
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="path" onClick={togglePathView}>
                Path Overview
            </div>
            <div className="path" onClick={togglePathDefinitionView}>
                Proficiency Definition
            </div>
            <div className="scrollableContentListCalendar">
                    {Object.entries(days).map(([day, activities], i) => {
                        return (
                        <div className='activities' style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                            <div className='calendar-item day'>
                                Day {day}
                            </div>
                            <div style={{width: '100%'}}>
                                {
                                    activities.map((activity, index) => {
                                        return(
                                        <div key={index + i * 999}>
                                            <div className='calendar-item activity'>    
                                                <div className='left' >{activity.activityName}</div>
                                            </div>
                                            {index + 1 !== activities.length && <div className='space'/>}
                                        </div>);
                                    })
                                }
                            </div>
                        </div>);
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCalendar;
