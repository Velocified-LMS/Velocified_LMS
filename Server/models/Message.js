const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  messageContent: String,
  date: Date,
  path: String
//   read: Boolean,
//   delivered: Boolean
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
