import styles from "./login.module.css";
import Navbar from "@/app/components/navbar";
import '@/app/globals.css'


const Login = () => {
  return (
    <div >
      <Navbar />
      <div >
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.logInBox}>
        <button className={styles.forgetPasswordResetContainer}>
          <span className={styles.forgetPasswordResetContainer1}>
            <span className={styles.forgetPassword}>Forgot Password?</span>
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
          placeholder="Enter Password"
          type="password"
        />
        <input
          className={styles.emailphoneusernameButton}
          name="username"
          placeholder="Email/Phone/Username"
          type="text"
        />
      </div>
      </div>
      
    </div>
  );
};

export default Login;