const User = require('../models/User');
const Company = require('../models/Company');
const Path = require('../models/Path');
const bcrypt = require('bcrypt');
const axios = require('axios');

const getUser = async (req, res) => {
    try {
      const user = req.session.user.id;
      const users = await User.find({ email: user });
      res.json(users);
      // res.status(200).json({"message": "User successfull"});
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ error: 'Error getting user' });
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
        console.log(otp);
        /**
         * Implement OTP verification here.
         */
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
    const otp = generateOTP();
    apiUrl = "https://151cif4amj.execute-api.us-east-1.amazonaws.com/prod";
    postData = {
      "mail": email,
      "otp":otp
    }
    const userInfo = await User.findOne({"email":email});
    if(!userInfo) {
      const domain = email.split('@')[1];
      const company = await Company.findOne({"domain": domain});
      if(company) {
        console.log(otp);
        /**
         * Implement OTP verification here.
         */
        postRequest(apiUrl, postData);
        return res.status(201).json({ "message": 'unregistered user' });
      } else {
        return res.status(403).json({ error: 'Login Failed2' });
      }
    }
    if(bcrypt.compareSync(pwd, userInfo._doc.pwd)) {
      req.session.user = {
        id: email
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
    if(req.body.company) {
      user.company = new Company({
        name: req.body.company.name,
        domain: req.body.company.domain
      });
      await user.company.save();
    }
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({"message": "User created successfully"});
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const generateOTP = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return randomNumber.toString().padStart(6, '0');
}

const postRequest = (apiUrl, postData) => {
  axios.post(apiUrl, postData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
}


module.exports = {
  register,
  getUser,
  authorizeLogin
};
