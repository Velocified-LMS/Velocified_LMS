import React from "react"
import  { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from "@mui/material";
import { Edit, Delete, Update } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import PathOverview from './PathOverview';
import PathDefinition from './PathDefinition';
import NewActivity from "./NewActivity";
import ActivityEdit from "./ActivityEdit";
import CreatePath from "./CreatePath";
import AddCoach from "./AddCoach";
import BlockUser from "./BlockUser";
import { getUserData, getPathsByCompany, getAccess, updateUser, getActivities } from "../../services/ApiService";
import { useRouter } from "next/router";
import '../../app/globals.css'
import styles from "./learneradmindashboard.module.css"
import Navbar from "../../app/components/navbar";

import Profileeditor from "./Profileeditor";


const LearnerAdminDashboard = () => {
    const router = useRouter();
    const verifyAccess = async () => {
        try {
            const response = await getAccess('admin');
        } catch (error) {
            router.back(error);
            console.error('API request error:', error);
        }
    };
    useEffect(() => {
        verifyAccess();
    }, []);
    const language = "English"
    // const userName = "User Name"
    // const path = "Path Name"
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
    const [days, setDays] = useState({});
    const [activities, setActivities] = useState([])
    const [user, setUser] = useState(null);
    const [paths, setPaths] = useState([]);
    const [path, setPath] = React.useState(null);
    const [selected, setSelected] = useState(-1);
    const [PathDefinitionViewVisible, setPathDefinitionVisible] = useState(false);
    const togglePathDefinitionView = (visible) => {
        setPathDefinitionVisible(visible);
    };
    useEffect (() => {
        getUserData().then((user) => {
            setUser(user.data);
        });
    }, []);

    useEffect (() => {
        if(user && user.company)
            getPathsByCompany(user.company).then((paths) => {
                setPaths(paths.data);
            });
    }, [user, path]);

    const [NewActivityVisible, setNewActivityVisible] = useState(false);
    const toggleNewActivityView = (visible) => {
        setNewActivityVisible(visible);
    };

    const [ActivityEditVisible, setActivityEditVisible] = useState(false);
    const toggleActivityEditView = (visible) => {
        setActivityEditVisible(visible);
    };

    useEffect (() => {
        if (path) {
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
        }
    }, [NewActivityVisible, path, ActivityEditVisible]);
      
    const handleChange = (event) => {
        const selected = event.target.value;
        setSelected(selected);
        setPath(paths[selected]);
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

    const renderBody = (path) => {
        return(

           <div style={{height: '100%'}}>
           <div style={{height: '100%'}}>
               <div className={styles.PathManagerConatainer} >
                   <div className={styles.PathManagerTab}>
                       <div className={styles.PathDetailText}>
                           {path.pathName}
                       </div>
                       <div className={styles.PathDetailText}>
                           {path.seats}
                       </div>
                   </div>
                   <div className={styles.PathManagerTab}>
                       <div className={styles.PathDetailText}>
                           <div style={{width: '100%'}} onClick={togglePathView}>Path Overview</div>
                           <Edit onClick={() => console.log("meow")}/>
                       </div>
                       <div className={styles.PathDetailText}>
                           <div style={{width: '100%'}} onClick={togglePathDefinitionView}>Proficiency Definition</div>
                           <Edit />
                       </div>
                   </div>
                   <div className={styles.NewActivityButton} onClick={toggleNewActivityView}>
                           Add New Activity
                   </div>
                   <div className={styles.ActivityCreatorContainer}>
                   <table className={styles.ActivityCreator}>
                       <tbody>
                       {Object.entries(days).map(([day, item]) => (
                           <React.Fragment key={day}>
                           {item.map((activity, activityIndex) => (
                               <tr key={activityIndex} className={styles.PathMargin}>
                                   {activityIndex === 0 ? (
                                       <td rowSpan={item.length} className={styles.PathDay}>Day {day}</td>
                                   ) : null}
                                   <td className={styles.PathActivity} onClick={() => handleActivityClick(activity)}>
                                       <div className={styles.PathActivityDetail}>
                                           <span style={{flex:'1', alignItems: 'center', display: 'flex', justifyContent: 'center'}} >
                                               {activity.activityName}  
                                           </span>
                                           {/* <span style={{flex:'1', }}> Require Signoff */}
                                           {/* <Checkbox style={{flex:'0'}}/></span> */}
                                           {/* <span style={{flex:'1'}}> Attach Milestone */}
                                           {/* <Checkbox style={{flex:'0'}}/></span> */}
                                           <Edit style={{flex:'1', alignItems: 'center', display: 'flex', justifyContent: 'center'}}
                                               onClick={toggleActivityEditView} />
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
               <div style={{height: '100%', backgroundColor: '#F2F2F2'}}></div>
           </div>
           <div className={styles.signoff}/>
           </div>
        );
    };
   
    if (paths === undefined|| user === null) return "Loading...";
    return (
        <div className={styles.page}>
            {ProfileeditorViewVisible && <Profileeditor isOpen={toggleProfileeditorView } user={user}/>}
            {PathViewVisible && <PathOverview isOpen={togglePathView} path={path} /> }
            {PathDefinitionViewVisible && <PathDefinition isOpen={togglePathDefinitionView} path={path} /> }
            {NewActivityVisible && <NewActivity isOpen={toggleNewActivityView} path={path._id}/> }
            {CreatePathVisible && <CreatePath isOpen={toggleCreatePathView} company={user.company} setPath={setPath} /> }
            {AddCoachVisible && <AddCoach isOpen={toggleAddCoachView} user={user} path={path} /> }
            {BlockUserVisible && <BlockUser isOpen={toggleBlockUserView}/> }

            {ActivityEditVisible && <ActivityEdit activity={selectedActivity} isOpen={toggleActivityEditView} /> }
            <Navbar authorized={true}/>
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
                                { user.username }
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
                                value={selected}
                                onChange={(event) => handleChange(event)}
                                displayEmpty
                                fullWidth
                                variant="outlined"
                                sx={{
                                    fontFamily:'Roboto',
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
                                <MenuItem value={-1} disabled>
                                <Typography variant="body1" style={{ fontFamily: 'Roboto' }}>
                                    Manage Path
                                </Typography>
                                </MenuItem>
                                {paths.map((path, i) => {
                                    return <MenuItem key={i} value={i}> <Typography variant="body1" style={{ fontFamily: 'Roboto' }}>{path.pathName} </Typography></MenuItem>
                                })}
                            </Select>
                            <div className={styles.dashboardOption} >
                            <div
                                className={styles.dashboardText}
                                onClick={path === null ? null : toggleAddCoachView}
                                disabled={path === null}
                                style={{ color: path === null ? 'gray' : 'black', cursor: path === null ? 'not-allowed' : 'pointer' }}
                            >
                                Add Manager
                            </div>

                            </div>
                            {/* <div className={styles.dashboardOptionBlock} >
                                <div className={styles.dashboardText} onClick={toggleBlockUserView}>
                                    Blocklist User
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className={styles.activities}>
                        <div className={styles.activityHeader}>
                            <div className={styles.tabGroup}>
                                <div  style={{fontSize:'20px', fontFamily:'Roboto' }}>
                                <p className={styles.pathtext}> Manage Path </p>
                                </div>
                            </div>
                            <div style={{fontSize:'20px', fontFamily:'Roboto' }}>{path ? `Path ID :${path.pathId}`: ""}</div>
                        </div>
                        {path ? renderBody(path) : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnerAdminDashboard;