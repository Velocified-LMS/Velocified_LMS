import React from "react"
import  { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import '@/app/globals.css'
import styles from "./coach.module.css"
import Navbar from "@/app/components/navbar";

import InformationPopup from "./informationPopup";
import ListCalendar from "./Calendar";
import Messenger from "./messenger";
import Profileeditor from "./Profileeditor";


const CoachDashboard = () => {
    const language = "English"
    const userName = "User Name"
    const path = "Path Name"
    const day = "Day "+ 4
    const currentDate = new Date()
    const ActivityTitle = "Activity 1"
    const ActivityDescription = "This is a description of the activity"
    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. 
    In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. 
    In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing 
    In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing `;
    const startDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const users = [
        {
          "name": "User 1",
          "progress": "75%",
          "currentActivity": "Activity A"
        },
        {
          "name": "User 2",
          "progress": "50%",
          "currentActivity": "Activity B"
        },
        {
          "name": "User 3",
          "progress": "90%",
          "currentActivity": "Activity C"
        }
        ,
        {
          "name": "User 4",
          "progress": "50%",
          "currentActivity": "Activity B"
        },
        {
          "name": "User 5",
          "progress": "90%",
          "currentActivity": "Activity C"
        }
        
      ];

    
    const [selectedOption, setSelectedOption] = React.useState('');
      
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [checkedStates, setCheckedStates] = useState(users.map(() => false));

    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };

    const [pathViewVisible, setPathViewVisible] = useState(false);
    const togglePathView = (visible) => {
        setPathViewVisible(visible);
    };

    const [listViewVisible, setListViewVisible] = useState(false);
    const toggleListView = (visible) => {
        setListViewVisible(visible);
    };
  

    const [ProfileeditorViewVisible, setProfileeditorViewVisible] = useState(false);
    const toggleProfileeditorView = (visible) => {
        setProfileeditorViewVisible(visible);
    };


      const [showMessenger, setShowMessenger] = useState(false);
      const toggleMessenger = () => {
        setShowMessenger(!showMessenger);
      };
    return (
        <div className={styles.page}>
            {pathViewVisible && <InformationPopup children={content} isOpen={togglePathView}/>}
            {listViewVisible && <ListCalendar children={content} isOpen={toggleListView}/>}
            {showMessenger && <Messenger />}
            {ProfileeditorViewVisible && <Profileeditor isOpen={toggleProfileeditorView } />}
            
            <Navbar />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                <div className={styles.profileContainer} >
                <div onClick={toggleProfileeditorView}>
                    <img className={styles.editprofile} src="/settings.svg" alt="Edit Profile" />
                </div>
                <img className={styles.profile} src="/Icon1.svg" alt="Profile"  />
                    
                </div>
                <div className={styles.text} style={{justifyContent: 'center'}}>
                    Powered by VELOCIFIED
                </div>
                </div>
                <div className={styles.dashboardBody}>
                    <div className={styles.sidebar}>
                        <div className={styles.text}>
                            <div style={{fontSize: 20}}>
                                { userName }
                            </div>
                            <div style={{fontSize: 16}}>
                                Coach
                            </div>
                            <div className={styles.language} style={{fontSize: 16}}>
                                { language }
                            </div>
                            <div className={styles.path}>
                                <div style={{fontSize: 20}}>
                                        { path }
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.studentActivity}>
                            <div className={styles.messages} onClick={toggleMessenger}>
                                <div className={styles.messageText}>
                                    Messages
                                </div>
                            </div>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                displayEmpty
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#6E28EE', 
                                      },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#6E28EE', 
                                    },
                                    '&:focus .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#6E28EE', 
                                    },
                                    width:'15vw',
                                    backgroundColor:'white',
                                }}
                            >
                                <MenuItem value="" disabled>
                                Change Path
                                </MenuItem>
                                <MenuItem value="option1">Path 1</MenuItem>
                                <MenuItem value="option2">Path2</MenuItem>
                                <MenuItem value="option3">Path 3</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className={styles.activities}>
                         <div className={styles.activityHeader}>
                            <div className={styles.tabGroup}>
                                <TextField
                                    id="outlined-basic"
                                    label="Search User"
                                    color="secondary"
                                    InputProps={{
                                        style: {
                                            borderRadius: "10px",
                                            height: "40px",
                                            width: "400px",
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
                            <div className={styles.tabGroup}>
                                <div onClick={toggleListView}>
                                    <img src="/icons/vector.svg" />
                                </div>
                                <div className={styles.space} />
                                <div className={styles.space} />  
                            </div>
                        </div>
                        <div className={styles.user_list_container}>
                            {users.map((user, index) => (
                                <div key={index} className={styles.user_list}>
                                <span className={styles.user_name}>{user.name}</span>
                                <span className={styles.user_progress}>{user.progress}</span>
                                <span className={styles.user_activity}>{user.currentActivity}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.signoff}>
                            <div className={styles.activityHeader}>
                                Sign-Offs
                            </div>
                            <div className={styles.user_signoff_container}>
                                {users.map((user, index) => (
                                    <div key={index} className={styles.user_list}>
                                    <span className={styles.user_signoff_name}>UserName</span>
                                    <span className={styles.user_signoff_activity}>Activity</span>
                                    <span className={styles.user_signoffcheckbox}>
                                    <Checkbox
                                        checked={checkedStates[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                        color="primary"
                                    />
                                    </span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.signoff_container}>
                                <button className={styles.signoff_button}>Sign-off</button>
                                <Checkbox
                                    color="primary"
                                />
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CoachDashboard;