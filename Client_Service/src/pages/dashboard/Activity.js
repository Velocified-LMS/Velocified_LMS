import styles from "./Activity.module.css";
import ActivityDetail from "./ActivityDetail";
import { useState } from "react";


const Activity = ({ title, description }) => {
    const Activity = "Activity 1";
    const ActivityDescription = "This is a description of the activity";
    const [ActivityDetailViewVisible, setActivityDetailViewVisible] = useState(false);
    const toggleActivityDetailView = (visible) => {
        setActivityDetailViewVisible(visible);
    };
    return (
        <div>
            {ActivityDetailViewVisible && <ActivityDetail  isOpen={toggleActivityDetailView}/>}
        <div className={styles.activity} onClick={toggleActivityDetailView} >
            
            <div className={styles.activityTitle} >
                { title }
                <div style={{width: '3%'}} />
                <div className={styles.star} />
            </div>
            <div style={{fontSize: '16px'}}>{ description }</div>
        </div>
        </div>
    );
}

export default Activity;