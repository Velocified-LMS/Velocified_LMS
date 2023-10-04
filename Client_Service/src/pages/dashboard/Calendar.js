import React, { useState } from 'react';
import './Calendar.css';
import { Search } from '@mui/icons-material';
import { TextField, InputAdornment, Checkbox } from "@mui/material";

const ListCalendar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
    const completion = 30;
    return (
    <div className="modal">
        <button onClick={handleOpen}>Open Modal</button>
        {isOpen && (
        <div className="popup">
            <div className="modalContent">
            <div className="header">
                <div className="pathTitle left">
                    Path Name
                </div>
                <div className='pathTitle center'>
                    {completion + '% completed'}
                </div>
                <div onClick={handleClose} className='right'>
                    <img src='/icons/close.svg' style={{height: '30%'}}/>
                </div> 
            </div>
            <div className="search-container">
                <TextField
                    id="search"
                    className='search'
                    label=""
                    InputProps={{
                        style: {
                            borderRadius: "10px",
                            height: "80%",
                            width: "90%",
                            backgroundColor: "#FFF"
                        }
                        ,
                        startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </div>
            <div className="path">
                Path Overview
            </div>
            <div className="path">
                Path Definition
            </div>
            <div className="scrollableContent">
                <div className='activities' style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <div className='calendar-item day'>
                        Day 1
                    </div>
                    <div style={{width: '100%'}}>
                        <div className='calendar-item activity'>    
                            <div className='left'>Activity 1</div>
                            <Checkbox checked={true} className='right'/>
                        </div>
                        <div className='space'/>
                        <div className='calendar-item activity'>
                            Activity 1
                        </div>
                        <div className='space'/>
                        <div className='calendar-item activity'>
                            Activity 1
                        </div>
                    </div>

                </div>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <div className='calendar-item day'>
                        Day 2
                    </div>
                    <div style={{width: '100%'}}>
                        <div className='calendar-item activity'>
                            Activity 1
                        </div>
                        <div className='space'/>
                        <div className='calendar-item activity'>
                            Activity 1
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
        )}
    </div>
    );
};

export default ListCalendar;
