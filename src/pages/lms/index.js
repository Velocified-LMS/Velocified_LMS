import Navbar from "@/app/components/navbar";
import styles from "./index.module.css";

const ActivityWindow = () => {
  return (
    <div className={styles.activityWindow}>
      <div className={styles.activityWindowChild} />
      <div className={styles.activityWindowItem} />
      <div className={styles.activityWindowInner} />
      <div className={styles.myNotes}>
        <span className={styles.myNotesTxtContainer}>
          <p className={styles.blankLine}>My Notes</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </span>
      </div>
      <div className={styles.pathFeedback}> Path Feedback</div>
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
            src="/weather-icons1.svg"
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
      <div className={styles.date2}>
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
            src="/weather-icons2.svg"
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
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.date4}>
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
              src="/weather-icons2.svg"
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
        <img className={styles.closeRingIcon} alt="" src="/close-ring1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.activityName}>Activity Name</div>
      </div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Est sit amet
        facilisis magna etiam tempor orci eu lobortis.
      </div>
      <div className={styles.markComplete}>Mark Complete</div>
      <div className={styles.signOff}>Sign Off</div>
      <div className={styles.div9}>
        ____________________________________________________________________________________
      </div>
      <div className={styles.container} />
      <div className={styles.loremIpsumDolor1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Est sit amet
        facilisis magna etiam tempor orci eu lobortis.
      </div>
      <div className={styles.projectFeedbackNotes}>Project Feedback Notes</div>
      <div className={styles.ametPorttitor}>amet porttitor</div>
    </div>
  );
};

export default ActivityWindow;
