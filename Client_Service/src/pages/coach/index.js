import React from "react"
import  { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Search } from "@mui/icons-material";
import { TextField, InputAdornment, InputLabel } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import '@/app/globals.css'
import styles from "./coach.module.css"
import Navbar from "@/app/components/navbar";
import InformationPopup from "./informationPopup";
import ListCalendar from "../dashboard/Calendar";
import Messenger from "./messenger";
import Profileeditor from "./Profileeditor";
import { getActivities, getAccess, getPath, getUser, getUserData, updateUser } from "@/services/ApiService";
import ActivityDetail from "./ActivityDetail";
import { useRouter } from "next/router";


const CoachDashboard = () => {
    const router = useRouter();
    const verifyAccess = async () => {
        try {
            const response = await getAccess('coach');
        } catch (error) {
            console.error('API request error:', error);
            router.back({ query: { accessDenied: true } });
        }
    };
    useEffect(() => {
        verifyAccess();
    }, []);
    const language = "English"
    const currentDate = new Date()
    const startDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const [path, setPath] = useState(null);
    const [pathName, setPathName] = useState("Path Name");
    const [paths, setPaths] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);
    const [activities, setActivities] = useState(null);
    const [coach, setCoach] = useState(null);
    const [selected, setSelected] = useState(-1);

    const handleChange = (event) => {
        const selected = event.target.value;
        setSelected(selected);
        setPathName(paths[selected].pathName);
        setPath(paths[selected]);
    };

    const [checkedStates, setCheckedStates] = useState(false);

    const handleCheckboxChange = (selectedUser, activityId) => {
        selectedUser.activities[activityId].signoff = !selectedUser.activities[activityId].signoff;
        setCheckedStates(!checkedStates);
        setUser(selectedUser);
        updateUser(selectedUser); 
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

    const [showActivity, setShowActivity] = useState(false);
    const toggleActivity = async (user, activity) => {
        setActivity(activity);
        setUser(user);
        setShowActivity(!showActivity);
    };

    useEffect(() => {
        const initializeData = async () => {
            const coach = await getUserData();
            setCoach(coach.data);
            const pathIds = coach.data.coach;
            const paths = pathIds.map((pathId) => {
                return getPath(pathId);
            });
            let resolvedPaths = await Promise.all(paths);
            resolvedPaths = resolvedPaths.map((path) => path.data);
            setPaths(resolvedPaths)
        };
        initializeData();
    }, []);

    useEffect(() => {
        if(path === null || path === undefined)
            return;
        try {
            setPathName(path.pathName);
            const getUsersAndActivities = async () => {
                const users = await getUser({'path': path.pathId});
                setUsers(users.data);
                const activities = await getActivities(path._id);
                setActivities(activities.data);
            }
            getUsersAndActivities();
        } catch (e) {
            console.log("error");
            return
        }
    }, [path, checkedStates]);

    if(coach === null)
        return "Loading...";
    

    return (
        <div className={styles.page}>
            {listViewVisible && <ListCalendar path={path} isOpen={toggleListView}/>}
            {showMessenger && <Messenger path={path.pathId} />}
            {ProfileeditorViewVisible && <Profileeditor isOpen={toggleProfileeditorView } user={coach}/>}
            {showActivity && <ActivityDetail isOpen={() => setShowActivity(!showActivity)} user={user} activity={activity}/>}
            
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
                                { coach.username }
                            </div>
                            <div style={{fontSize: 16}}>
                                Coach
                            </div>
                            <div className={styles.language} style={{fontSize: 16}}>
                                { language }
                            </div>
                            <div className={styles.path}>
                                <div style={{fontSize: 20}}>
                                        { pathName }
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.studentActivity}>
                            <div className={styles.messages}
                                onClick={path !== null ? toggleMessenger : null}
                                style={{
                                    cursor: path === null ? 'not-allowed' : 'pointer',
                                    opacity: path === null ? 0.5 : 1,
                                    /* Add any other styles you want for the disabled and enabled appearance */
                                }}
                            >
                            <div className={styles.messageText}>Messages</div>
                            </div>
                            <Select
                                value={selected}
                                onChange={handleChange}
                                displayEmpty
                                labelid="access-label"
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
                                <MenuItem value={-1} disabled={true}>Select Path</MenuItem>
                                {
                                    paths.map((path, i) => {
                                        return <MenuItem key={i} value={i}>{path.pathName}</MenuItem>;
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div className={styles.activities}>
                         <div className={styles.activityHeader}>
                            <div className={styles.tabGroup}>
                                <p>Users</p>
                                <div onClick={toggleListView} data-cy="vector-button" className="right" 
                                    style={{paddingRight: '5%', paddingTop: '0.5%'}}>
                                    <img src="/icons/vector.svg" data-cy="vector-image" />
                                </div>
                            </div>
                            <div className={styles.tabGroup}>
                                <div className={styles.space} />
                                <div className={styles.space} />  
                            </div>
                        </div>
                        <div className={styles.user_list_container}>
                            {users.map((user, index) => (
                                <div key={index} className={styles.user_list}>
                                <span key={index} className={styles.user_name}>{user.username}</span>
                                <span key={index} className={styles.user_progress}>{user.completion+'%'}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.signoff}>
                            <div className={styles.activityHeader}>
                                Sign-Offs
                            </div>
                            <div className={styles.user_signoff_container}>
                                {
                                    users && users.map((user, i) => {
                                        if(activities === null || activities === undefined || user.activities === undefined)
                                            return null;
                                        if(activities.length !== Object.keys(user.activities).length)
                                            return null;
                                        return (
                                            activities && Object.entries(user.activities).map(([activityId, activity], index) => {
                                                return (
                                                    activity.completed && 
                                                    <div key={i} className={styles.user_list} >
                                                        <span key={i} className={styles.user_signoff_name}>
                                                            {user.username}
                                                        </span>
                                                        <span key={i} className={styles.user_signoff_activity}
                                                         onClick={() => toggleActivity(user, activities[index])}>
                                                            {activities[index].activityName}
                                                        </span>
                                                        <span key={i} className={styles.user_signoffcheckbox}>
                                                        <Checkbox
                                                            key={i}
                                                            checked = {user.activities[activityId].signoff}
                                                            onChange={() => handleCheckboxChange(user, activityId)}
                                                            color="primary"
                                                        />
                                                        </span>
                                                    </div>
                                                );
                                        })
                                    )
                                    })}
                            </div>
                            <div style={{ backgroundColor: '#F2F2F2', height: '100%' }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoachDashboard;