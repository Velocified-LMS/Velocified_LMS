const mongoose = require('mongoose');
const Activity = require('./Activity');
const Company = require('./Company');
const Schema = mongoose.Schema;

const pathSchema = new mongoose.Schema({
    pathId: {
        type: String,
        immutable: true
    },
    pathName: String,
    pathOverview: String,
    proficiencyDefinition: String,
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    company: {
        type: Schema.Types.ObjectId,
        ref: Company
    },
    completed: Number,
    total: Number,
    seats: Number
});

const Path = mongoose.model('Path',pathSchema);

module.exports = Path;
