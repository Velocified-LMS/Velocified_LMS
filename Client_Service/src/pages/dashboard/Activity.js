import styles from "./Activity.module.css";
import ActivityDetail from "./ActivityDetail";
import { useState } from "react";


const Activity = ({ activity, user, change }) => {
    const [ActivityDetailViewVisible, setActivityDetailViewVisible] = useState(false);
    const toggleActivityDetailView = (visible) => {
        change(visible);
        setActivityDetailViewVisible(visible);
    };
    if (activity === undefined)
        return "Loading...";
    return (
        <div>
            {ActivityDetailViewVisible && <ActivityDetail user={user} activity = {activity} isOpen={toggleActivityDetailView}/>}
            <div className={styles.activity} onClick={toggleActivityDetailView} >
                <div className={styles.activityTitle} >
                    { activity.activityName }
                    {/* <div style={{width: '3%'}} /> */}
                    {/* <div className={styles.star} /> */}
                </div>
                {/* <div
                    id="feedback"
                    name="feedback"
                    style={{
                        // border: '1px solid #DADADA',
                        minHeight: '50px', // simulates 'rows' attribute in textarea
                        maxHeight: '', // maximum height before scrolling
                        overflowY: 'auto', // adds scrollbar if content exceeds maxHeight
                        padding: '5px', // optional, for better text spacing
                        textAlign: 'left', // ensures text alignment is consistent with the source
                        whiteSpace: 'pre-wrap', // respects new lines and spaces
                        wordBreak: 'break-word' // ensures long words do not overflow
                    }}
                    readOnly={true}
                    dangerouslySetInnerHTML={{ __html: activity.activityDescription }}
                /> */}
            </div>
        </div>
    );
}

export default Activity;