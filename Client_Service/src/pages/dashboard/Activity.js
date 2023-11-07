import styles from "./Activity.module.css";
import ActivityDetail from "./ActivityDetail";
import { useState } from "react";


const Activity = ({ activity, user, change }) => {
    const Activity = "Activity 1";
    const ActivityDescription = "This is a description of the activity";
    const [ActivityDetailViewVisible, setActivityDetailViewVisible] = useState(false);
    const toggleActivityDetailView = (visible) => {
        change(visible);
        setActivityDetailViewVisible(visible);
    };
    return (
        <div>
            {ActivityDetailViewVisible && <ActivityDetail user={user} activity = {activity} isOpen={toggleActivityDetailView}/>}
            <div className={styles.activity} onClick={toggleActivityDetailView} >
                <div className={styles.activityTitle} >
                    { activity.activityName }
                    <div style={{width: '3%'}} />
                    <div className={styles.star} />
                </div>
                <div style={{fontSize: '16px'}}>{ activity.activityDescription }</div>
            </div>
        </div>
    );
}

export default Activity;