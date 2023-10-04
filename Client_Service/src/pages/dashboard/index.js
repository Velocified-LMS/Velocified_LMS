import React from "react"
import  { useState } from "react";

import styles from "./dashboard.module.css"
import Navbar from "@/app/components/navbar";
import Activity from "./Activity";
import Donut from "./Donut";
import Modal from "./Modal";
import Messenger from "./messenger";

const Dashboard = () => {
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

    const handleMessages = () => {

    };

      const [showMessenger, setShowMessenger] = useState(false);
      const toggleMessenger = () => {
        setShowMessenger(!showMessenger);
      };
    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <img 
                        className={styles.profile} 
                        src=""
                    />
                    <div className={styles.text} style={{justifyContent: 'center'}}>
                        powered by VELOCIFIED
                    </div>
                </div>
                <div className={styles.dashboardBody}>
                    <div className={styles.sidebar}>
                        <div className={styles.text}>
                            <div style={{fontSize: 20}}>
                                { userName }
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
                                        { path }
                                    </a>
                                </div>
                                {/* <Modal children={content}/> */}
                                <ListCalendar children={content}/>
                                <div style={{fontSize: 16}}>{ startDate }</div>
                            </div>
                        </div>
                        <div className={styles.studentActivity}>
                            <Donut percentage={18.2}/>
                            <div className={styles.text} style={{fontSize: '20px', fontWeight: 600}}>
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
                                <img src="/icons/back.svg" />
                                <div className={styles.space} />
                                <div className={styles.text}>{day}</div>
                                <div className={styles.space} />
                                <img src="/icons/front.svg" />
                            </div>
                            <div className={styles.tabGroup}>
                                <img src="/icons/vector.svg" />
                                <div className={styles.space} />
                                <div className={styles.space} />
                                <img src="/icons/cal.svg" />
                            </div>
                        </div>
                        <div className={styles.activityBody} >
                            <Activity title={ActivityTitle} description={ActivityDescription} />
                            <Activity title={ActivityTitle} description={ActivityDescription} />
                            <Activity title={ActivityTitle} description={ActivityDescription} />
                            <Activity title={ActivityTitle} description={ActivityDescription} />
                        </div>
                    </div>
                </div>
            </div>
            {showMessenger && <Messenger />}
        </div>
    );
}

export default Dashboard;