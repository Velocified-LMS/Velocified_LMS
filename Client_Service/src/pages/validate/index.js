import styles from "./validate.module.css";
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/router';
import '@/app/globals.css'
import { authorizeLogin, getUserData, validateUser } from "../../services/ApiService";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const redirectToNewPage = (page, router) => {
  router.push('/' + page);
};

const Validate = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLogin = async (e) => {
    seterrorMessage("");
    const data = {
      "email": username,
      "otp": password
    };
    try {
      const response = await validateUser(data);
      if(response.status === 201) {
        redirectToNewPage('login', router);
      }
    } catch (error) {
      if(error.response.status === 401) {
        seterrorMessage("User Validation failed");
      } 
      else {
        seterrorMessage("Invalid OTP");
      }
    }
  };



  return (
    <>
      <div >
        <Navbar authorized={false}/>
      </div >
      <div className={styles.login_container}> 
        <div className={styles.login_box}>
          <p class={styles.errorMessage}> {errorMessage}</p>
        <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        className={styles.usernameField}
        required
        value={username}
        onChange={handleUsernameChange}
        sx={{ width:'70%',
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
        label="OTP"
        type="password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
        sx={{ width:'70%',
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

      </div>
      <div className={styles.login_container1}> 
      </div>
      </div>
    </>
      
  );
};

export default Validate;
      