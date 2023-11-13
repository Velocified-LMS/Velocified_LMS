const mongoose = require('mongoose');
const Path = require('./Path');
const Company = require('./Company');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  language: String,
  pwd: String,
  company: {
    type: Schema.Types.ObjectId,
    ref: Company
  },
  path: String,
  activities: Object,
  coach: [String],
  admin: Boolean,
  otp: String,
  validated: Boolean,
  access: String,
  completion: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
