const User = require('../models/User');
const Company = require('../models/Company');
const Message = require('../models/Message');
const bcrypt = require('bcrypt');
const axios = require('axios');

const getMessage = async (req, res) => {
    const email = req.session.user.id;
    const user = await User.find({ email: email });
    const messages = await Message.find({ path: user.company });
    res.status(200).json(messages);
}

const sendMessage = async (req, res) => {
    const { message } = req.body;
    const email = req.session.user.id;
    const user = await User.findOne({ email: email });
    const response = await Message.create({ 
        content: message,
        path: user.company,
        date: new Date(),
        sender: {
            name: user.username,
            id: user.email
        }
    });
    res.status(200).json(response);
}

module.exports = {
    getMessage,
    sendMessage
};