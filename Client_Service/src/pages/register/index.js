import styles from "./register.module.css";
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
  const [error, setError] = useState("");

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
        setError("Password and Retyped password doesn't match");
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
        setError("User already exists so please login or try forgot password");
      } else if(error.response.status === 404) {
        setError("Path not found");
      } else if(error.response.status === 403) {
        setError("Unauthorized Path");
      } else if(error.response.status === 401) {
        setError("Company not registered");
      }
      console.error(error);
    }
  };

  const handleReset = (e) => {
    redirectToNewPage("forget", router);
  };

  return (
    <>
      <div >
        <Navbar authorized={false}/>
      </div >
      <div className={styles.login_container}> 
        <div className={styles.login_box}>
          {error !== "" && <p className={styles.errorMessage}>{error}</p>}
        <TextField
        label="Username"
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

      <TextField
        label="Path"
        variant="outlined"
        value={path}
        onChange={handlePathChange}
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
      