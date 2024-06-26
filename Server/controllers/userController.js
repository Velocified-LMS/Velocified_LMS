const User = require('../models/User');
const Company = require('../models/Company');
const bcrypt = require('bcrypt');
const axios = require('axios');
const Path = require('../models/Path');

const getUser = async (req, res) => {
  /* This is the function that is handling the /user/info endpoint */
  /* A JSON object is returned */
    try {
      const user = req.session.user;
      const returnedUser = await User.findOne({ "email": user.id }); // here, id is an email! Check authorizeLogin
      console.log(returnedUser);
      res.json(returnedUser);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Error getting user' });
    }
};

const getUserByAttribute = async (req, res) => {
  try {
    const queryParams = req.query;
    let filter = {};
    for (let key in queryParams) {
        filter[key] = queryParams[key];
    }
    const user = await User.find(filter);
    res.json(user);
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Error getting user' });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await User.create(user);
    res.status(201).json(response);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Error updating user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.body.email;
    const response = await User.findOneAndUpdate({ "email": id}, req.body, {"new": true});
    res.json(response);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Error updating user' });
  }
};


const authorizeLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const pwd = req.body.pwd;
    // const access = req.body.access;

    const userInfo = await User.findOne({"email":email});
    console.log(userInfo);
    if(bcrypt.compareSync(pwd, userInfo._doc.pwd) && userInfo._doc.validated) {
      // if(access === "coach" && userInfo._doc.access === "user") {
      //   return res.status(401).json({ error: 'Not Authorized' });
      // }
      // if(access === "admin" && userInfo._doc.access !== "admin" && userInfo._doc.access !== "owner") {
      //   return res.status(401).json({ error: 'Not Authorized' });
      // }
      // if(access === "owner" && userInfo._doc.access !== "owner") {
      //   return res.status(401).json({ error: 'Not Authorized' });
      // }
      req.session.user = {
        id: email,
        access: userInfo._doc.access
      };
      console.log('Login successful');
      res.status(200).json({message: "Login successful", access: userInfo._doc.access});
    } else {
      res.status(403).json({ error: 'Login Failed' });
    }
  } catch(error) {
    console.error('Login failed');
    res.status(403).json({ error: 'Login Failed' });
  }
};

const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.pwd, salt);
    const userInfo = await User.findOne({"email": req.body.email});
    if(userInfo) {
      return res.status(409).json({"message": "user already registered"});
    }
    let user = {};
    if(req.body.username) {
      user.username = req.body.username;
    }
    if(req.body.email) {
      user.email = req.body.email;
    }
    if(req.body.pwd) {
      user.pwd = hashedPassword;
    }
    if(req.body.path) {
      user.path = req.body.path;
    }

    
    const path = await Path.findOne({"pathId": user.path});
    if(!path) {
      return res.status(404).json({message:"path not found"});
    }
    user.access = "user";
    user.activities = {};
    const domain = user.email.split('@')[1];
    const company = await Company.findOne({"domain": domain});
    if(company) {
      user.company = company._id;
      if(path.company.toString() !== company._id.toString()) {
        return res.status(403).json({"message": "Path doesn't belong to the company"});
      }
      user.otp = generateOTP();
      user.validated = false;
      sendOTP(user.email, user.otp);
      const newUser = new User(user);
      await newUser.save();
      res.status(201).json({"message": "New user created!"});
    } else {
      res.status(401).json({"message": "User's company is not registered"});
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const reset = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.pwd, salt);
    const userInfo = await User.findOne({"email": req.body.email});
    if(!userInfo) {
      return res.status(404).json({"message": "user doesn't exist"});
    }
    let user = {};
    if(req.body.email) {
      user.email = req.body.email;
    }
    if(req.body.pwd) {
      user.pwd = hashedPassword;
    }
    user.activities = {};
    user.otp = generateOTP();
    user.validated = false;
    sendOTP(user.email, user.otp);
    const response = await User.findOneAndUpdate({ email: req.body.email }, user);
    res.status(200).json({"message": "user password updated!", "response": response});
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const validateUser = async (req, res) => {
  try {
    let user = {};
    user.email = req.body.email;
    user.otp = req.body.otp;
    const userInfo = await User.findOne({"email": user.email});
    if(userInfo.otp === user.otp) {
      req.session.user = {
        id: user.email,
        access: "user"
      };
      const response = await User.findOneAndUpdate({"email": user.email}, { otp: "######", validated: true}, { new: true });
      return res.status(201).json({"message": "User validated!"})
    }
    return res.status(401).json({"message": "user validation failed"})
  } catch (error) {
    console.error('Error validating user:', error);
    res.status(500).json({ error: 'Error validating user' });
  }
};

const access = (req, res) => {
  try {
    const currentAccessLevel = req.session.user.access;
    const requiredAccessLevel = req.query.access;
    const accessLevel = {
      "user": 1,
      "coach": 2,
      "admin": 3,
      "owner": 4
    }
    if(accessLevel[currentAccessLevel] >= accessLevel[requiredAccessLevel]) {
      res.status(201).json({"message": "Access to page granted"});
    } else {
      res.status(401).json({"message": "Access Denied"});
    }
  } catch (error) {
    console.error('Error while validating access:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Could not log out.");
    }
    res.clearCookie('sid', { path: '/' });
});
};

const generateOTP = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return randomNumber.toString().padStart(6, '0');
}

const sendOTP = (email, otp) => {
  apiUrl = "https://5vsum3v05h.execute-api.us-east-1.amazonaws.com/prod/auth";
  postData = {
    "email": email,
    "otp":otp
  };
  postRequest(apiUrl, postData);
};

const postRequest = (apiUrl, postData) => {
  axios.post(apiUrl, postData)
  .then(response => {
    // console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
}


module.exports = {
  register,
  createUser,
  reset,
  getUser,
  getUserByAttribute,
  authorizeLogin,
  validateUser,
  updateUser,
  logout,
  access
};
