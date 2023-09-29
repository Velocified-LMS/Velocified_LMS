const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  activityName: String,
  activityDescription: String,
  date: Date,
  star: Boolean,
  completed: Boolean
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
