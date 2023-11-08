import styles from "./index.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img className={styles.profileChild} alt="" src="/rectangle-4284.svg" />
      <div className={styles.profileItem} />
      <b className={styles.done}>Done</b>
      <img
        className={styles.velocifiedSymbol6Icon}
        alt=""
        src="/velocifiedsymbol-6@2x.png"
      />
      <img
        className={styles.velocifiedSymbol7Icon}
        alt=""
        src="/velocifiedsymbol-7@2x.png"
      />
      <div className={styles.profileInner} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-88@2x.png" />
      <img className={styles.addRingIcon} alt="" src="/add-ring.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.profileChild1} />
      <div className={styles.profileChild2} />
      <div className={styles.name}>Name</div>
      <div className={styles.div}>
        _______________________________________________________
      </div>
      <div className={styles.div1}>
        _______________________________________________________
      </div>
      <div className={styles.div2}>
        _______________________________________________________
      </div>
      <div className={styles.div3}>
        _______________________________________________________
      </div>
      <div className={styles.div4}>
        _______________________________________________________
      </div>
      <div className={styles.div5}>
        _______________________________________________________
      </div>
      <div className={styles.userGuide}>User Guide</div>
      <div className={styles.changePassword}>Change Password</div>
      <div className={styles.completionCertificate}>Completion Certificate</div>
      <div className={styles.changeLanguage}>Change Language</div>
      <div className={styles.logOut}>Log Out</div>
      <div className={styles.customPath}>Custom Path</div>
    </div>
  );
};

export default Profile;
