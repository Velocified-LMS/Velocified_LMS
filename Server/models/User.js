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
  path: {
    type: Schema.Types.ObjectId,
    ref: 'Path'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
