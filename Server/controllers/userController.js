const User = require('../models/User');
const Company = require('../models/Company');
const bcrypt = require('bcrypt');
const axios = require('axios');

const getUser = async (req, res) => {
    try {
      const user = req.session.user.id;
      const users = await User.findOne({ email: user });
      res.json(users);
    } catch (error) {
      console.error('Error getting user:', error);
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

const updateUser = async (req, res) => {
  try {
    const id = req.body.email;
    const response = await User.findOneAndUpdate({ email: id}, req.body);
    res.json(response);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Error updating user' });
  }
};

const authorizeUser = async (req, res) => {
  try {
    const email = req.body.email;
    const userInfo = await User.findOne({"email":email});
    const otp = generateOTP();
    apiUrl = "https://151cif4amj.execute-api.us-east-1.amazonaws.com/prod";
    postData = {
      "otp":otp
    }
    if(!userInfo) {
      const domain = email.split('@')[1];
      const company = await Company.findOne({"domain": domain});
      if(company) {
        postRequest(apiUrl, postData);
        return res.status(201).json({ "message": 'unregistered user' });
      } 
      return res.status(403).json({ error: `User's company is not registered`});
    }
  } catch(error) {
    console.error(`User's company is not registered`, error);
    res.status(403).json({ error: `User's company is not registered` });
  }
}

const authorizeLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const pwd = req.body.pwd;
    const access = req.body.access;

    const userInfo = await User.findOne({"email":email});
    if(bcrypt.compareSync(pwd, userInfo._doc.pwd)) {
      if(access === "coach" && userInfo._doc.access === "user") {
        return res.status(401).json({ error: 'Not Authorized' });
      }
      if(access === "admin" && userInfo._doc.access !== "admin") {
        return res.status(401).json({ error: 'Not Authorized' });
      }
      req.session.user = {
        id: email,
        access: access
      };
      console.log('Login successfull');
      res.status(200).json({"message": "Login successfull"});
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
    user.access = "user";
    user.activities = {};
    const domain = user.email.split('@')[1];
    const company = await Company.findOne({"domain": domain});
    user.company = company._id;
    if(company) {
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
      res.status(201).json({"message": "User validated!"})
    }
  } catch (error) {
    console.error('Error creating user:', error);
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
  getUser,
  getUserByAttribute,
  authorizeLogin,
  validateUser,
  updateUser,
  logout
};
