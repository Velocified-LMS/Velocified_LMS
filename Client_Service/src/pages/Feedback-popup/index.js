import { Button } from "@mui/material";
import styles from "./index.module.css";

const FeedbackPopup = () => {
  return (
    <div className={styles.feedbackPopup}>
      <div className={styles.feedbackPopupChild} />
      <div className={styles.feedbackField}>{`Feedback Field `}</div>
      <Button
        className={styles.feedbackPopupItem}
        sx={{ width: 236 }}
        color="primary"
        name="Submit"
        variant="contained"
      />
      <div className={styles.submit}>Submit</div>
      <div className={styles.feedbackPopupInner} />
      <div className={styles.pathFeedback}>Path Feedback</div>
      <div className={styles.date}>
        <div className={styles.notes}>
          <div className={styles.addYourHolidayContainer}>
            <ul className={styles.addYourHoliday}>Add your holiday</ul>
          </div>
          <div className={styles.addYourHolidayContainer}>
            <ul className={styles.addYourHoliday}>Write somthing here</ul>
          </div>
          <div className={styles.addYourHolidayContainer}>
            <ul className={styles.addYourHoliday}>Write somthing here</ul>
          </div>
        </div>
        <div className={styles.date1}>
          <div className={styles.div}>28</div>
          <img
            className={styles.weatherIcons}
            alt=""
            src="/weather-icons.svg"
          />
        </div>
        <div className={styles.tags}>
          <div className={styles.tags1}>
            <div className={styles.emojisParent}>
              <div className={styles.emojis}>
                <div className={styles.div1}>😐</div>
              </div>
              <div className={styles.work}>Work</div>
            </div>
          </div>
          <div className={styles.tags2}>
            <div className={styles.emojisParent}>
              <div className={styles.emojis}>
                <div className={styles.div1}>😷</div>
              </div>
              <div className={styles.life}>Life</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.closeRingIcon} alt="" src="/close-ring.svg" />
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Est sit amet
        facilisis magna etiam tempor orci eu lobortis.
      </div>
    </div>
  );
};

export default FeedbackPopup;
