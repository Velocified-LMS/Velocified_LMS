const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

const authorizeLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const pwd = req.body.pwd;
    const userInfo = await User.find({"email":email});
    keys = Object.keys(userInfo[0]);
    if(userInfo[0]._doc.pwd === pwd) {
      res.status(200).json({"message": "Login successfull"});
    } else {
      res.status(403).json({ error: 'Login Failed2' });
    }
  } catch(error) {
    console.error('Login failed');
    res.status(403).json({ error: 'Login Failed' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  authorizeLogin
};
