import React from "react"
import  { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import '@/app/globals.css'
import styles from "./learneradmindashboard.module.css"
import Navbar from "@/app/components/navbar";

import Profileeditor from "./Profileeditor";


const LearnerAdminDashboard = () => {
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



    const [ProfileeditorViewVisible, setProfileeditorViewVisible] = useState(false);
    const toggleProfileeditorView = (visible) => {
        setProfileeditorViewVisible(visible);
    };



    return (
        <div className={styles.page}>
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
                                Administrator 
                            </div>
                            <div className={styles.language} style={{fontSize: 16}}>
                                { language }
                            </div>
                        </div>
                        <div className={styles.studentActivity}>
                            <div className={styles.dashboardOption} >
                                <div className={styles.dashboardText}>
                                    Create Path
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
                                Manage Path
                                </MenuItem>
                                <MenuItem value="option1">Path 1</MenuItem>
                                <MenuItem value="option2">Path2</MenuItem>
                                <MenuItem value="option3">Path 3</MenuItem>
                            </Select>
                            <div className={styles.dashboardOption} >
                                <div className={styles.dashboardText}>
                                    Add Coach
                                </div>
                            </div>
                            <div className={styles.dashboardOptionBlock} >
                                <div className={styles.dashboardText}>
                                    Blocklist User
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activities}>
                         <div className={styles.activityHeader}>
                            <div className={styles.tabGroup}>
                            <div  style={{fontSize:'20px', fontFamily:'Roboto' }}>
                                Manage Path
                            </div>
                            </div>
                            
                        </div>
                        <div className={styles.user_list_container}>
                            <div className={styles.PathManagerConatainer} >
                                <div className={styles.PathManagerTab}>
                                    <div className={styles.PathDetailText}>
                                        Path Name
                                    </div>
                                    <div className={styles.PathDetailText}>
                                        #users/#seats
                                    </div>
                                </div>
                                <div className={styles.PathManagerTab}>
                                    <div className={styles.PathDetailText}>
                                        Path Overview
                                    </div>
                                    <div className={styles.PathDetailText}>
                                        Proficiency Definition
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.signoff}>
                           
                            
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LearnerAdminDashboard;