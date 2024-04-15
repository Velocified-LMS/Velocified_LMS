import "../../pages/globals.css";
import "../../app/globals.css";

import React from "react";
import { useState, useEffect } from "react";
import Collapsible from "react-collapsible";

import styles from "./dashboard.module.css";
import Navbar from "../../app/components/navbar";
// import ProgressBar from "../../app/components/ProgressBar";
import Activity from "./Activity";
import Donut from "./Donut";
import InformationPopup from "./informationPopup";
import ListCalendar from "./Calendar";
import Messenger from "./messenger";
import Calendar from "./FullCalender";
import Milestone from "./Milestone";
import Profileeditor from "./Profileeditor";
import {
  getUserData,
  getPath,
  getActivities,
  updateUser,
  getUser,
  getAccess,
  getMessage,
} from "../../services/ApiService";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const verifyAccess = async () => {
    try {
      const response = await getAccess("user");
    } catch (error) {
      console.error("API request error:", error);
      router.back();
    }
  };
  useEffect(() => {
    verifyAccess();
  }, []);
  const language = "English";
  const currentDate = new Date();
  const ActivityTitle = "Activity 1";
  const ActivityDescription = "This is a description of the activity";
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. 
    In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. 
    In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing 
    In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam nec nulla venenatis pharetra. Integer eget odio auctor, convallis ante ac, vestibulum sapien. Fusce sit amet hendrerit nisl. Aenean tristique leo vel nulla lacinia, eget condimentum quam bibendum. Vivamus scelerisque, quam at sollicitudin suscipit, arcu felis eleifend odio, in euismod nisi arcu ut est. In hac habitasse platea dictumst. Sed non hendrerit justo. Nulla facilisi. Quisque rhoncus tristique justo, nec pharetra libero congue a. Sed et malesuada dolor, quis ullamcorper turpis. Suspendisse potenti. Nam feugiat tortor a ex sollicitudin, vel interdum odio scelerisque. Maecenas at tellus vel risus pharetra convallis vel eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing `;
  const startDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
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
  const [message, setMessages] = useState([]);
  const [messageChange, setMessageChange] = useState(null);
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
  };

  useEffect(() => {
    initializeData();
  }, [activityChange]);

  const initializeData = async () => {
    /* 
        // getUserData targets an endpoint with Axios 
        // The endpoint is /user/info 
        // The method that the controller runs is getUser which returns an AxiosResponse 
        // Data is held in AxiosResponse.data
        */
    let user = await getUserData();
    user = user.data;
    setUser(user);
    let path = await getPath(user.path);
    path = path.data;
    setPath(path);
    let activities = await getActivities(path._id);
    activities = activities.data;
    setActivities(activities);
    let activityList = {};
    let cnt = 0;
    let messages = await getMessage(path.pathId);
    messages = messages.data;
    // Show latest message 
    setMessages(messages[messages.length - 1]);
    // Rebuilding the activity array in user object?
    activities.map((element) => {
      const activityId = element._id;
      if (user.activities !== undefined && activityId in user.activities) {
        element.completed = user.activities[activityId].completed;
        element.signoff = user.activities[activityId].signoff;
        element.notes = user.activities[activityId].notes;
        element.feedback = user.activities[activityId].feedback;
      } else {
        if (user.activities === undefined) {
          user.activities = {};
        }
        user.activities[activityId] = {
          completed: false,
          notes: "",
          feedback: "",
          signoff: false,
        };
      }
      if (element.completed) cnt += 1;
      if (element.day in activityList) {
        activityList[element.day].push(element);
      } else {
        activityList[element.day] = [element];
      }
    });

    // Creating the completed value for progress donut
    const completion =
      activities.length > 0 ? (cnt / activities.length) * 100 : 0;
    setCompletion(completion.toFixed(1));
    user.completion = completion.toFixed(1);
    setUser(user);
    // updateUser(user).then(() => {
    //     setUser(user);
    // });
    const sortedObject = Object.fromEntries(
      Object.entries(activityList).sort(([key1], [key2]) =>
        key1.localeCompare(key2)
      )
    );

    // Each day has its own set of activities, set them with this
    setDays(sortedObject);
  };

  useEffect(() => {
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

  const [ProfileeditorViewVisible, setProfileeditorViewVisible] =
    useState(false);
  const toggleProfileeditorView = (visible) => {
    setProfileeditorViewVisible(visible);
  };

  const [showMessenger, setShowMessenger] = useState(false);
  const toggleMessenger = () => {
    setShowMessenger(!showMessenger);
  };
  const renderBody = () => {
    return (
      // Where activities are created and rendered
      <div className={styles.gridActivityMain}>
        {days[Object.keys(days)[day]].map((activity, index) => {
          return (
            <Activity
              user={user}
              key={index}
              activity={activity}
              change={listenActivityChange}
            />
          );
        })}
      </div>
    );
  };
  // If any of the Objects didnt load properly, show a Loading message
  if (
    path === null ||
    activities === null ||
    user === null ||
    user.activities === null ||
    days === null
  )
    return "Loading...";
  return (
    <div className={styles.page} data-cy="dashboard-page">
      {pathViewVisible && (
        <InformationPopup children={content} isOpen={togglePathView} />
      )}
      {listViewVisible && <ListCalendar path={path} isOpen={toggleListView} />}
      {CalViewVisible && <Calendar children={content} isOpen={toggleCalView} />}
      {showMessenger && <Messenger user={user} />}
      {MilestoneViewVisible && <Milestone isOpen={toggleMilestoneView} />}
      {ProfileeditorViewVisible && (
        <Profileeditor isOpen={toggleProfileeditorView} user={user} />
      )}

      {/* <Navbar authorized={true}/> */}
      <div className={styles.dashboardContainer} data-cy="dashboard-container">
        {/* Main Grid Start - separate sidebar and activities */}
        <div className={styles.pageGrid}>
          {/* Sidebar Grid Start - Gray Background */}
          <div className={styles.sidebarGrid}>
            <div className={styles.gridUserInfo}>
              <div
                className={styles.profileContainer}
                data-cy="profile-container"
              >
                <div
                  onClick={toggleProfileeditorView}
                  data-cy="edit-profile-button"
                >
                  <img
                    className={styles.editprofile}
                    src="/settings.svg"
                    alt="Edit Profile"
                    data-cy="profile-image"
                  />
                </div>
                <img
                  className={styles.profile}
                  src="/Icon1.svg"
                  alt="Profile"
                />
              </div>

              <div style={{ fontSize: 20 }}>{user.username}</div>
              <div style={{ fontSize: 16 }}>Learner</div>
              <div className={styles.language} style={{ fontSize: 16 }}>
                {language}
              </div>
              <div className={styles.path}>
                <div style={{ fontSize: 20 }}>
                  <a href="./login">{path.pathName}</a>
                </div>
                <div style={{ fontSize: 16 }}>Today's Date: {startDate}</div>
              </div>
            </div>
            {/* Progress Wheel */}
            <div className={styles.gridProgress}>
              {/* <Donut aspectRatio={1} percentage={completion} /> */}
              <div className={styles.headerContainer}><div>Most Recent Completed Activities</div></div>
              <div className={styles.recentProgress}>
                  <div>Understand Object Structure</div>
                  <div>Remove Modals</div>
              </div>
            </div>
            {/* Milestones */}
            <div className={styles.gridMilestones}>
              {/* Header */}
              <div className={styles.headerContainer}>
                <div>Milestones</div>
              </div>
              {/* Milestone */}
              <div className={styles.milestone}>
                <div className={styles.milestoneIcon}>
                  <img src="/emoji_events.svg" />
                </div>
                <div className={styles.milstoneDesc}>1 Year Anniversary!</div>
              </div>
              {/* Milestone */}
              <div className={styles.milestone}>
                <div className={styles.milestoneIcon}>
                  <img src="/emoji_events.svg" />
                </div>
                <div className={styles.milstoneDesc}>50% completion</div>
              </div>
              {/* Milestone */}
              <div className={styles.milestone}>
                <div className={styles.milestoneIcon}>
                  <img src="/emoji_events.svg" />
                </div>
                <div className={styles.milstoneDesc}>
                  First Activity Completed
                </div>
              </div>
            </div>
            {/* Messages */}
            <div className={styles.gridMessages} onClick={toggleMessenger}>
              <div className={styles.headerContainer}><div>Latest Message</div></div>
              <div className={styles.lastMessage}>
                <div>From: {message.sender.name}</div>
                <div>Message: {message.content}</div>
              </div>
            </div>
          </div>
          {/* Activity Grid Start - Gray Background, shorter than sidebar */}
          <div className={styles.activitiesGrid}>
            {/* Recursive call to load body, if there are activities, add them to the screen */}
            {activities.length > 0
              ? renderBody()
              : "No activities found in this path :("}
            <div className={styles.gridDayButtons}>
              {back && (
                <img
                  className={styles.arrow}
                  src="/icons/back.svg"
                  onClick={() => navigate(-1)}
                />
              )}
              {front && (
                <img
                style={{marginLeft: '2px'}}
                  className={styles.arrow}
                  src="/icons/front.svg"
                  onClick={() => navigate(1)}
                />
              )}
              <div className={styles.space} />
              <div className={styles.text}>
                {"Day " + Object.keys(days)[day]}
              </div>
            </div>
            <div className={styles.gridListButtons}>
              <div onClick={toggleListView} data-cy="vector-button">
                <img src="/icons/vector.svg" data-cy="vector-image" />
              </div>
              <div className={styles.space} data-cy="calendar-container" />
              <div className={styles.space} data-cy="calendar-container" />
              <div onClick={toggleCalView} data-cy="calendar-button">
                <img src="/icons/cal.svg" data-cy="calendar-image" />
              </div>
            </div>
            {/* <div className={styles.gridActivityMain}>
                acts
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
