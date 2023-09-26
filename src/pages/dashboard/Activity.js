import styles from "./Activity.module.css"

const Activity = ({ title, description }) => {
    const Activity = "Activity 1"
    const ActivityDescription = "This is a description of the activity"
    return (
        <div className={styles.activity} >
            <div className={styles.activityTitle} >
                { title }
                <div style={{width: '3%'}} />
                <div className={styles.star} />
            </div>
            <div style={{fontSize: '16px'}}>{ description }</div>
        </div>
    );
}

export default Activity;