import Navbar from "@/app/components/navbar";
import styles from "./index.module.css";

const SettingsPopup = () => {
  return (
    <div className={styles.settingsPopup}>
      <div className={styles.background} />
      <div className={styles.links}>
        <a className={styles.logOut} href="https://velocified.com/">
          Log Out
        </a>
        <div className={styles.divider4} />
        <a className={styles.changeLanguage} href="https://velocified.com/">
          Change Language
        </a>
        <div className={styles.divider3} />
        <a className={styles.changePassword} href="https://velocified.com/">
          Change Password
        </a>
        <div className={styles.divider2} />
        <a className={styles.userGuide} href="https://velocified.com/">
          User Guide
        </a>
        <div className={styles.divider1} />
      </div>
      <div className={styles.nameField}>
        <input
          className={styles.container}
          name="uname"
          placeholder="Name"
          type="text"
        />
        <div className={styles.name}>Name</div>
      </div>
      <div className={styles.userPhoto}>
        <img
          className={styles.userPhotoPlaceholder}
          alt=""
          src="/user-photo-placeholder@2x.jpg"
        />
        <img className={styles.addIcon} alt="" src="/add-icon.svg" />
      </div>
      <a className={styles.done}>Done</a>
    </div>
  );
};

export default SettingsPopup;
