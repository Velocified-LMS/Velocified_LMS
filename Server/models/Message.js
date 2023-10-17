const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User'); 

const messageSchema = new mongoose.Schema({
  content: String,
  sender: {
    name: String,
    id: String
  },
  date: Date,
  path: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
