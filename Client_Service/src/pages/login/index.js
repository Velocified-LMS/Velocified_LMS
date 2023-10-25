import styles from "./login.module.css";
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/router';
import '@/app/globals.css'
import { authorizeLogin, getUserData } from "../../services/ApiService";

const Login = () => {
  const router = useRouter();
  const redirectToNewPage = (page) => {
    router.push('/' + page);
  };
  const handleLogin = (e) => {
    const data = {
      "email": "sai1@123.com",
      "pwd": "password1"
    };
    authorizeLogin(data).then((res) => {
      console.log(res);
      redirectToNewPage('dashboard');
    }).catch(error => {
      console.error(error);
    });;
  };

  const handleReset = (e) => {
    getUserData().then((res) => {
      console.log(res);
    }).catch(error => {
      console.error(error);
    });;
  };

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
            <b className={styles.resetHere} onClick={handleReset}>Reset Here.</b>
          </span>
        </button>
        <button className={styles.logInButton} onClick={handleLogin}>
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
      </div>
      
    </div>
  );
};

export default Login;