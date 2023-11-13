import styles from "./login.module.css";
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/router';
import '@/app/globals.css'
import { authorizeLogin, getUserData, registerUser } from "../../services/ApiService";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const redirectToNewPage = (page, router) => {
  router.push('/' + page);
};

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [path, setPath] = useState("");
  const [pwdMatchError, setPwdError] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRetytpePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };

  const handlePathChange = (event) => {
    setPath(event.target.value);
  }


  const handleRegistration = async () => {
    try {
      if (password !== retypePassword) {
        setPwdError(true);
        return;
      }
      const data = {
        "username": username,
        "email": email,
        "pwd": password,
        "path": path
      };
      const response = await registerUser(data);
      redirectToNewPage('validate', router);
    } catch (error) {
      if(error.response.status === 409) {
        setUserExists(true);
      }
      console.error(error);
    }
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
          {pwdMatchError && <p>Password and Retyped password doesn't match</p>}
          {userExists && <p>User already exists so please login or try forget password</p>}
        <TextField
        label="Username"
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
        label="Email"
        variant="outlined"
        margin="normal"
        className={styles.usernameField}
        required
        value={email}
        onChange={handleEmailChange}
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
      <TextField
        label="Retype Password"
        type="password"
        variant="outlined"
        value={retypePassword}
        onChange={handleRetytpePasswordChange}
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

      <TextField
        label="Path"
        variant="outlined"
        value={path}
        onChange={handlePathChange}
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
        onClick={handleRegistration}
        variant="contained"
        color="primary"
        type="submit"
        className={styles.logInButton}
      >
        Register
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

export default Register;
      