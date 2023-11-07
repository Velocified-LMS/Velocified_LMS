import styles from "./login.module.css";
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/router';
import '@/app/globals.css'
import { authorizeLogin, getUserData } from "../../services/ApiService";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const redirectToNewPage = (page, router) => {
  router.push('/' + page);
};

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLogin = (e) => {
    const data = {
      "email": username,
      "pwd": password
    };
    authorizeLogin(data).then((res) => {
      console.log(res);
      redirectToNewPage('dashboard', router);
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
    <>
      <div >
        <Navbar />
      </div >
      <div className={styles.login_container}> 
        <div className={styles.login_box}>
        <TextField
        label="Email/Phone or Username"
        variant="outlined"
        margin="normal"
        className={styles.usernameField}
        required
        value={username}
        onChange={handleUsernameChange}
        sx={{ width:'25vw',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#6E28EE', // Set the border color to green on hover
            },
            '&:focus fieldset': {
              borderColor: '#6E28EE', // Set the border color to green on click (focus)
            },
          },
        }}
      />
          <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
        sx={{ width:'25vw',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#6E28EE', // Set the border color to green on hover
            },
            '&:focus fieldset': {
              borderColor: '#6E28EE', // Set the border color to green on click (focus)
            },
          },
        }}
        required
      />

      <Button
        onClick={handleLogin}
        variant="contained"
        color="primary"
        type="submit"
        className={styles.logInButton}
      >
        Log In
      </Button>  
        <br></br>
      <span className={styles.forgetPasswordResetContainer1}>
            <span className={styles.forgetPassword}>Forgot Password?</span>
            <b className={styles.b}>{`  `}</b>
            <b className={styles.resetHere} onClick={handleReset}>Reset Here.</b>
      </span> 
      </div>
     
      </div>
    </>
      
  );
};

export default Login;

{/* <div className={styles.logInBox}>
        
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
      <button className={styles.forgetPasswordResetContainer}>
          <span className={styles.forgetPasswordResetContainer1}>
            <span className={styles.forgetPassword}>Forgot Password?</span>
            <b className={styles.b}>{`  `}</b>
            <b className={styles.resetHere} onClick={handleReset}>Reset Here.</b>
          </span>
        </button> 
        </div>
        */}
      