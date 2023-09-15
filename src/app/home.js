import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.logInBox}>
        <button className={styles.forgetPasswordResetContainer}>
          <span className={styles.forgetPasswordResetContainer1}>
            <span className={styles.forgetPassword}>Forget Password?</span>
            <b className={styles.b}>{`  `}</b>
            <b className={styles.resetHere}>Reset Here.</b>
          </span>
        </button>
        <button className={styles.logInButton}>
          <div className={styles.container} />
          <div className={styles.logIn}>Log in</div>
        </button>
        <input
          className={styles.enterPasswordButton}
          name="password"
          value="Enter Password"
          type="text"
        />
        <input
          className={styles.emailphoneusernameButton}
          name="username"
          placeholder="Email/Phone/Username"
          type="text"
        />
      </div>
      <div className={styles.header}>
        <button className={styles.logInButton1}>
          <div className={styles.container1} />
          <div className={styles.logIn1}>Log in</div>
        </button>
        <button className={styles.fr}>FR</button>
        <button className={styles.news}>News</button>
        <button className={styles.training}>Training</button>
        <button className={styles.about}>About</button>
        <button className={styles.home}>{`Home `}</button>
        <input className={styles.search} name="search" type="text" />
        <div className={styles.velocified}>VELOCIFIED</div>
      </div>
    </div>
  );
};

export default Login;
