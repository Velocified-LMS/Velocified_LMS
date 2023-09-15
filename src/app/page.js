import LoginFormContainer from "./components/login-form-container";
import styles from "./login.module.css";

const Frame = () => {
  return (
    <div className={styles.loginParent}>
      <LoginFormContainer />
      <div className={styles.home}>
        <div className={styles.body}>
          <div className={styles.exploreButton}>
            <div className={styles.container} />
            <div className={styles.explore}>Explore</div>
          </div>
          <div className={styles.textBox}>
            <div className={styles.container1} />
            <div className={styles.placeholder}>
              <span className={styles.placeholderTxt}>
                <p className={styles.p}>
                  _________________________________________________________
                </p>
                <p className={styles.p}>
                  __________________________________________________________________________________________
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.logInButton}>
            <div className={styles.container2} />
            <div className={styles.logIn}>Log in</div>
          </div>
          <div className={styles.fr}>FR</div>
          <div className={styles.news}>News</div>
          <div className={styles.training}>Training</div>
          <div className={styles.about}>About</div>
          <div className={styles.home1}>{`Home `}</div>
          <div className={styles.search}>
            <div className={styles.container3} />
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
      <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
    </div>
  );
};

export default Frame;
