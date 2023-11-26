import React from "react"
import  { useState, useEffect } from "react";

import '@/app/globals.css'
import styles from "./dashboard.module.css"
import Navbar from "@/app/components/navbar";
import Activity from "./Activity";
import Donut from "./Donut";
import InformationPopup from "./informationPopup";
import ListCalendar from "./Calendar";
import Messenger from "./messenger";
import Calendar from "./FullCalender";
import Milestone from "./Milestone";
import Profileeditor from "./Profileeditor";
import { getUserData, getPath, getActivities, updateUser, getUser, getAccess } from "@/services/ApiService";
import { useRouter } from "next/router";


const Dashboard = () => {
    const router  = useRouter();
    const verifyAccess = async () => {
        try {
            const response = await getAccess('user');
        } catch (error) {
            console.error('API request error:', error);
            router.back();
        }
    };
    useEffect(() => {
        verifyAccess();
    }, []); 
    const language = "English"
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
    const [user, setUser] = useState(null);
    const [completion, setCompletion] = useState(0);
    const [path, setPath] = useState(null);
    const [activities, setActivities] = useState([]);
    const [days, setDays] = useState(null);
    const [day, setDay] = useState(0);
    const [back, setBack] = useState(false);
    const [front, setFront] = useState(true);
    const [listViewVisible, setListViewVisible] = useState(false);
    const [activityChange, setActivityChange] = useState(false);
    const listenActivityChange = (event) => {
        setActivityChange(event);
    };
    const toggleListView = (visible) => {
        setListViewVisible(visible);
    };
    const [pathViewVisible, setPathViewVisible] = useState(false);
    const togglePathView = (visible) => {
        setPathViewVisible(visible);
    };
    const navigate = (increment) => {
        const courseLength = Object.keys(days).length;
        const nextDay = (increment + day) % courseLength;
        setDay(nextDay);
        if (nextDay !== 0) {
            setBack(true);
        } else setBack(false);
        if (nextDay === courseLength - 1) {
            setFront(false);
        } else setFront(true);

    }

    useEffect(() => {
        initializeData();
    }, [activityChange]);

    const initializeData = async () => {
        let user = await getUserData();
        user = user.data
        setUser(user);
        let path = await getPath(user.path);
        path = path.data
        setPath(path);
        let activities = await getActivities(path._id);
        activities = activities.data;
        setActivities(activities);
        let activityList = {}
        let cnt = 0;
        activities.map(element => {
            const activityId = element._id;
            if(user.activities !== undefined && activityId in user.activities) {
                element.completed = user.activities[activityId].completed;
                element.signoff = user.activities[activityId].signoff;
                element.notes = user.activities[activityId].notes;
                element.feedback = user.activities[activityId].feedback;
            } else {
                if(user.activities === undefined) {
                    user.activities = {};
                }
                user.activities[activityId] = {
                    completed: false,
                    notes: "",
                    feedback: "",
                    signoff: false
                };
            }
            if (element.completed) cnt += 1;
            if (element.day in activityList) {
                activityList[element.day].push(element)
            } else {
                activityList[element.day] = [element]
            }
        });
        const completion = (cnt / activities.length) * 100;
        setCompletion(completion.toFixed(1));
        user.completion = completion.toFixed(1);
        updateUser(user).then(() => {
            setUser(user);
        });
        const sortedObject = Object.fromEntries(
            Object.entries(activityList).sort(([key1], [key2]) => key1.localeCompare(key2))
        );
        setDays(sortedObject);
    };

    useEffect (() => {
        initializeData();
    }, []);


    const [MilestoneViewVisible, setMilestoneViewVisible] = useState(false);
    const toggleMilestoneView = (visible) => {
        setMilestoneViewVisible(visible);
    };

    const [CalViewVisible, setCalViewVisible] = useState(false);
    const toggleCalView = (visible) => {
        setCalViewVisible(visible);
    };

    const [ProfileeditorViewVisible, setProfileeditorViewVisible] = useState(false);
    const toggleProfileeditorView = (visible) => {
        setProfileeditorViewVisible(visible);
    };

    const [showMessenger, setShowMessenger] = useState(false);
    const toggleMessenger = () => {
    setShowMessenger(!showMessenger);
    };

    if (path === null || activities === null || user === null || user.activities === null || days === null)
        return "Loading...";;
    return (
        <div className={styles.page} data-cy="dashboard-page">
            {pathViewVisible && <InformationPopup children={content} isOpen={togglePathView}/>}
            {listViewVisible && <ListCalendar path={path} isOpen={toggleListView}/>}
            {CalViewVisible && <Calendar children={content} isOpen={toggleCalView}/>}
            {showMessenger && <Messenger user={user}/>}
            {MilestoneViewVisible && <Milestone isOpen={toggleMilestoneView}/> } 
            {ProfileeditorViewVisible && <Profileeditor isOpen={toggleProfileeditorView } user={user} />}
            
            <Navbar authorized={true}/>
            <div className={styles.dashboardContainer} data-cy="dashboard-container">
                <div className={styles.dashboardHeader}>
                <div className={styles.profileContainer} data-cy="profile-container"  >
                <div onClick={toggleProfileeditorView} data-cy="edit-profile-button">
                    <img className={styles.editprofile} src="/settings.svg" alt="Edit Profile" data-cy="profile-image" />
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
                                Learner
                            </div>
                            <div className={styles.language} style={{fontSize: 16}}>
                                { language }
                            </div>
                            <div className={styles.path}>
                                <div style={{fontSize: 20}}>
                                    <a href="./login">
                                        { path.pathName }
                                    </a>
                                </div>
                                <div style={{fontSize: 16}}>{ startDate }</div>
                            </div>
                        </div>
                        <div className={styles.studentActivity}>
                            <Donut percentage={completion}/>
                            <div className={styles.text} style={{fontSize: '20px', fontWeight: 600, cursor: 'pointer'}} onClick={toggleMilestoneView}>
                                Milestones
                            </div>
                            <div className={styles.messages} onClick={toggleMessenger}>
                                <div className={styles.messageText}>
                                    Messages
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activities}>
                        <div className={styles.activityHeader}>
                            <div className={styles.tabGroup}>
                                {back && <img src="/icons/back.svg" onClick={() => navigate(-1)}/>}
                                <div className={styles.space} />
                                <div className={styles.text}>{"Day "+Object.keys(days)[day]}</div>
                                <div className={styles.space} />
                                {front && <img src="/icons/front.svg" onClick={() => navigate(1)}/>}
                            </div>
                            <div className={styles.tabGroup} data-cy="vector-container">
                                <div onClick={toggleListView} data-cy="vector-button">
                                    <img src="/icons/vector.svg" data-cy="vector-image" />
                                </div>
                                <div className={styles.space} data-cy="calendar-container"/>
                                <div className={styles.space} data-cy="calendar-container"/>
                                <div onClick={toggleCalView} data-cy="calendar-button">
                                    <img src="/icons/cal.svg" data-cy="calendar-image"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.activityBody} >
                            {days[Object.keys(days)[day]].map((activity, index) => {
                                return <Activity user={user} key={index} activity={activity} change={listenActivityChange} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;