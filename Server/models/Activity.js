const mongoose = require('mongoose');
const Path = require('./Path');
const Schema = mongoose.Schema;

const activitySchema = new mongoose.Schema({
  activityName: String,
  activityDescription: String,
  date: Date,
  day: Number,
  star: Boolean,
  completed: Boolean,
  path: {
    type: Schema.Types.ObjectId,
    ref: 'Path'
  },
  update: String
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
