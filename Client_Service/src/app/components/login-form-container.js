import IOSButtonAutoWidthBu from "./i-o-s-button-auto-width-bu";
import styles from "./login-form-container.module.css";

const LoginFormContainer = () => {
  return (
    <div className={styles.login}>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.logInBox}>
        <div className={styles.forgetPasswordResetContainer}>
          <span className={styles.forgetPasswordResetContainer1}>
            <span className={styles.forgetPassword}>Forget Password?</span>
            <b className={styles.b}>{`  `}</b>
            <b>Reset Here.</b>
          </span>
        </div>
        <div className={styles.logInButton}>
          <div className={styles.container} />
          <div className={styles.logIn}>Log in</div>
        </div>
        <div className={styles.enterPasswordButton}>
          <IOSButtonAutoWidthBu
            showButtonAutoPrimary={false}
            iOSButtonAutoWidthBuBorderRadius="16px"
            iOSButtonAutoWidthBuBorder="1px solid var(--color-dimgray-200)"
            iOSButtonAutoWidthBuPosition="absolute"
            iOSButtonAutoWidthBuHeight="100%"
            iOSButtonAutoWidthBuWidth="100%"
            iOSButtonAutoWidthBuTop="0%"
            iOSButtonAutoWidthBuRight="0%"
            iOSButtonAutoWidthBuBottom="0%"
            iOSButtonAutoWidthBuLeft="0%"
            iOSButtonAutoWidthBuBoxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          />
          <img
            className={styles.viewhideIcon}
            alt=""
            src="/viewhide-icon.svg"
          />
          <div className={styles.enterPassword}>Enter Password</div>
        </div>
        <div className={styles.emailphoneusernameButton}>
          <IOSButtonAutoWidthBu
            showButtonAutoPrimary={false}
            iOSButtonAutoWidthBuBorderRadius="16px"
            iOSButtonAutoWidthBuBorder="1px solid var(--color-dimgray-200)"
            iOSButtonAutoWidthBuPosition="absolute"
            iOSButtonAutoWidthBuHeight="100%"
            iOSButtonAutoWidthBuWidth="100%"
            iOSButtonAutoWidthBuTop="0%"
            iOSButtonAutoWidthBuRight="0%"
            iOSButtonAutoWidthBuBottom="0%"
            iOSButtonAutoWidthBuLeft="0%"
            iOSButtonAutoWidthBuBoxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          />
          <div
            className={styles.emailphoneusername}
          >{`Email/phone/username `}</div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logInButton1}>
          <div className={styles.container1} />
          <div className={styles.logIn1}>Log in</div>
        </div>
        <div className={styles.fr}>FR</div>
        <div className={styles.news}>News</div>
        <div className={styles.training}>Training</div>
        <div className={styles.about}>About</div>
        <div className={styles.home}>{`Home `}</div>
        <div className={styles.search}>
          <div className={styles.container2} />
          <div className={styles.search1}>Search</div>
          <img
            className={styles.magnifyingGlassIcon}
            alt=""
            src="/magnifying-glass-icon.svg"
          />
        </div>
        <div className={styles.velocified}>VELOCIFIED</div>
      </div>
    </div>
  );
};

export default LoginFormContainer;
