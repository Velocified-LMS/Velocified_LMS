import styles from "./register.module.css";
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/router';
import '@/app/globals.css'
import { authorizeLogin, getUserData, registerUser, resetUser } from "../../services/ApiService";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const redirectToNewPage = (page, router) => {
  router.push('/' + page);
};

const Forget = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [path, setPath] = useState("");
  const [pwdMatchError, setPwdError] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRetytpePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };



  const handleReset = async () => {
    try {
      if (password !== retypePassword) {
        setPwdError(true);
        return;
      }
      const data = {
        "email": email,
        "pwd": password,
        "reset": true
      };
      const response = await resetUser(data);
      redirectToNewPage('validate', router);
    } catch (error) {

      if(error.response.status === 409) {
        setUserExists(true);
      }
      console.error(error);
    }
  };

  return (
    <>
      <div >
        <Navbar authorized={false}/>
      </div >
      <div className={styles.login_container}> 
        <div className={styles.login_box}>
          {pwdMatchError && <p  className={styles.errorMessage}>Password and Retyped password doesn't match</p>}
          {userExists && <p className={styles.errorMessage}>User already exists so please login or try forget password</p>}
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        className={styles.usernameField}
        required
        value={email}
        onChange={handleEmailChange}
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
        label="Password"
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
      <TextField
        label="Retype Password"
        type="password"
        variant="outlined"
        value={retypePassword}
        onChange={handleRetytpePasswordChange}
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
        onClick={handleReset}
        variant="contained"
        color="primary"
        type="submit"
        className={styles.logInButton}
      >
        Reset Password
      </Button>  
        <br></br>
      </div>
     
      </div>
    </>
      
  );
};

export default Forget;
      