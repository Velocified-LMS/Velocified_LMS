import styles from "./login.module.css";
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/router';
import '@/app/globals.css'
import { authorizeLogin, getUserData } from "../../services/ApiService";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Select, MenuItem, InputLabel } from "@mui/material";
import React, { useState } from 'react';

const redirectToNewPage = (page, router) => {
  router.push('/' + page);
};

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState("user");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLogin = (e) => {
    const data = {
      "email": username,
      "pwd": password,
      "access": access
    };
    authorizeLogin(data).then((res) => {
      let redirect = "";
      switch (access) {
        case "user": redirect = "dashboard"; break;
        case "admin": redirect = "manager"; break;
        case "coach": redirect = "coach"; break;
        case "owner": redirect = "admin"; break;
        default: redirect = "dashboard";
      }
      redirectToNewPage(redirect, router);
    }).catch(error => {
      console.error(error);
    });;
  };

  const handleRegister = () => {
    redirectToNewPage("register", router);
  }

  const handleChange = (event) => {
    setAccess(event.target.value);
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
        <Navbar authorized={false}/>
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
      <br></br>
      <InputLabel id='access-label'>Select Access level</InputLabel>
      <Select
        value={access}
        labelid="access-label"
        onChange={handleChange}
        displayEmpty
        placeholder="Manage Path"
        fullWidth
        variant="outlined"
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
      >
        {/* <MenuItem value="" key={0} disabled>Select Access Level</MenuItem> */}
        <MenuItem value={"user"} key={1} >User</MenuItem>
        <MenuItem value={"coach"} key={2}>Coach</MenuItem>
        <MenuItem value={"admin"} key={3}>Admin</MenuItem>
        <MenuItem value={"owner"} key={4}>Owner</MenuItem>
      </Select>
      <br></br>
      <br></br>
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
        <Button
        onClick={handleRegister}
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

export default Login;
      