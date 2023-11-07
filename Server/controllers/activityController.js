const Path = require('../models/Path');
const User = require('../models/User');
const Activity = require('../models/Activity');

const getActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.query.activity);
        res.json(activity)
    } catch (err) {
        console.error('Error fetching Activity:', err);
        res.status(500).json({ message: 'Error fetching Activity', error: err });
    }
};

const getActivitiesByPath = async (req, res) => {
    try {
        const activities = await Activity.find({path: req.query.pathId});
        res.json(activities)
    } catch (err) {
        console.error('Error fetching Activity:', err);
        res.status(500).json({ message: 'Error fetching Activity', error: err });
    }
};

const createActivity = async (req, res) => {
    try {
        const activity = req.body.activity
        console.log(req.body)
        const resposne = await Activity.create(activity)
        res.status(200).json(resposne);
    } catch (err) {
        console.error('Error creating Activity:', err);
        res.status(500).json({ message: 'Error creating Activity', error: err });
    }
};

const updateActivity = async (req, res) => {
    try {
        const resposne = await Activity.finByIdAndUpdate(
            req.body.activity._id,
            { $set: req.body.activity },
            { new: true }
          );
        res.status(200).json(resposne);
    } catch (err) {
        console.error('Error updating activity:', err);
        res.status(500).json({ message: 'Error updating activity', error: err });
    }
}

module.exports = {
    getActivity,
    updateActivity,
    createActivity,
    getActivitiesByPath
};