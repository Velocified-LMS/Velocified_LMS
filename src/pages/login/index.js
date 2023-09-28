import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./login.module.css";

const LogIn = () => {
  return (
    <div className={styles.logIn}>
      <div className={styles.emailParent}>
        <TextField
          className={styles.email}
          label="Email / phone or username "
          type="text"
        />
        <TextField
          className={styles.password}
          color="primary"
          label="Enter password"
          variant="outlined"
        />
        <Button
          className={styles.login}
          sx={{ width: 334.0422668457031 }}
          color="primary"
          variant="contained"
        >
          Log in
        </Button>
        <div className={styles.forgetPasswordResetContainer}>
          <span className={styles.forgetPasswordResetContainer1}>
            <span className={styles.forgetPassword}>Forget Password?</span>
            <b>{`  Reset Here `}</b>
          </span>
        </div>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.velocifiedSymbol6Wrapper}>
          <img
            className={styles.velocifiedSymbol6Icon}
            alt=""
            src="/velocifiedsymbol-6@2x.png"
          />
        </div>
        <div className={styles.velocifiedSymbol5Wrapper}>
          <img
            className={styles.velocifiedSymbol5Icon}
            alt=""
            src="/velocifiedsymbol-5@2x.png"
          />
        </div>
      </section>
      <div className={styles.velocifiedSymbol5Parent}>
        <img
          className={styles.velocifiedSymbol5Icon1}
          alt=""
          src="/velocifiedsymbol-51@2x.png"
        />
        <div className={styles.velocified}>VELOCIFIED</div>
      </div>
      <TextField
        className={styles.logInChild}
        color="primary"
        label="Search"
        sx={{ width: 416 }}
        variant="outlined"
      />
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.homeParent}>
            <div className={styles.home}>{`Home `}</div>
            <div className={styles.news}>News</div>
            <div className={styles.about}>About</div>
            <div className={styles.fr}>FR</div>
            <div className={styles.training}>Training</div>
            <a className={styles.news1}>News</a>
          </div>
        </div>
        <Button
          sx={{ width: 129 }}
          color="secondary"
          name="login"
          variant="contained"
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
