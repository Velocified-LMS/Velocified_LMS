import React from "react"
import  { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Search } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import PathOverview from './PathOverview';
import PathDefinition from './PathDefinition';
import NewActivity from "./NewActivity";
import ActivityEdit from "./ActivityEdit";
import CreatePath from "./CreatePath";
import AddCoach from "./AddCoach";
import BlockUser from "./BlockUser";

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
    const data = [
        { day: '1', activities: ['Activity1', 'Activity2'] },
        { day: '2', activities: ['Activity3', 'Activity4'] },
        { day: '3', activities: ['Activity5'] },
      ];


    

    const [selectedOption, setSelectedOption] = React.useState('');
      
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };



    const [ProfileeditorViewVisible, setProfileeditorViewVisible] = useState(false);
    const toggleProfileeditorView = (visible) => {
        setProfileeditorViewVisible(visible);
    };

    
    const [PathViewVisible, setPathVisible] = useState(false);
    const togglePathView = (visible) => {
        setPathVisible(visible);
    };

    const [PathDefinitionViewVisible, setPathDefinitionVisible] = useState(false);
    const togglePathDefinitionView = (visible) => {
        setPathDefinitionVisible(visible);
    };

    const [NewActivityVisible, setNewActivityVisible] = useState(false);
    const toggleNewActivityView = (visible) => {
        setNewActivityVisible(visible);
    };

    const [ActivityEditVisible, setActivityEditVisible] = useState(false);
    const toggleActivityEditView = (visible) => {
        setActivityEditVisible(visible);
    };

    const [CreatePathVisible, setCreatePathVisible] = useState(false);
    const toggleCreatePathView = (visible) => {
        setCreatePathVisible(visible);
    };

    const [AddCoachVisible, setAddCoachVisible] = useState(false);
    const toggleAddCoachView = (visible) => {
        setAddCoachVisible(visible);
    };

    const [BlockUserVisible, setBlockUserVisible] = useState(false);
    const toggleBlockUserView = (visible) => {
        setBlockUserVisible(visible);
    };



    const [selectedActivity, setSelectedActivity] = useState(null);
    const handleActivityClick = (activity) => {
        toggleActivityEditView(true);
        setSelectedActivity(activity);
        
      };
   

    return (
        <div className={styles.page}>
            {ProfileeditorViewVisible && <Profileeditor isOpen={toggleProfileeditorView } />}
            {PathViewVisible && <PathOverview isOpen={togglePathView}/> }
            {PathDefinitionViewVisible && <PathDefinition isOpen={togglePathDefinitionView}/> }
            {NewActivityVisible && <NewActivity isOpen={toggleNewActivityView}/> }
            {CreatePathVisible && <CreatePath isOpen={toggleCreatePathView}/> }
            {AddCoachVisible && <AddCoach isOpen={toggleAddCoachView}/> }
            {BlockUserVisible && <BlockUser isOpen={toggleBlockUserView}/> }

            {ActivityEditVisible && <ActivityEdit activity={selectedActivity} isOpen={toggleActivityEditView} /> }
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
                                <div className={styles.dashboardText} onClick={toggleCreatePathView} >
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
                                <div className={styles.dashboardText} onClick={toggleAddCoachView} >
                                    Add Coach
                                </div>
                            </div>
                            <div className={styles.dashboardOptionBlock} >
                                <div className={styles.dashboardText} onClick={toggleBlockUserView}>
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
                                    <div className={styles.PathDetailText} onClick={togglePathView}>
                                        Path Overview                      
                                        <DeleteIcon />
                                    </div>
                                    <div className={styles.PathDetailText} onClick={togglePathDefinitionView}>
                                        Proficiency Definition
                                        <DeleteIcon />
                                    </div>
                                </div>
                                <div className={styles.NewActivityButton} onClick={toggleNewActivityView}>
                                        Add New Activity
                                </div>
                                <div className={styles.ActivityCreatorContainer}>
                                <table className={styles.ActivityCreator}>
                                    <tbody>
                                    {data.map((item, index) => (
                                        <React.Fragment key={index}>
                                        {item.activities.map((activity, activityIndex) => (
                                            <tr key={activityIndex} className={styles.PathMargin}>
                                                {activityIndex === 0 ? (
                                                    <td rowSpan={item.activities.length} className={styles.PathDay}>Day {item.day}</td>
                                                ) : null}
                                                <td className={styles.PathActivity}>
                                                    <div className={styles.PathActivityDetail}>
                                                        <span style={{flex:'1', paddingTop:'1.5vh'}} >{activity}  </span>
                                                        <span style={{flex:'1', }}> Require Signoff
                                                        <Checkbox style={{flex:'0'}}/></span>
                                                        <span style={{flex:'1'}}> Attach Milestone
                                                        <Checkbox style={{flex:'0'}}/></span>
                                                        <DeleteIcon style={{flex:'1', paddingTop:'1.5vh'}} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </React.Fragment>
                                    ))}
                                    </tbody>
                                </table>
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