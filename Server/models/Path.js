const mongoose = require('mongoose');
const Activity = require('./Activity'); 
const Schema = mongoose.Schema;

const pathSchema = new mongoose.Schema({
    pathId: String,
    pathName: String,
    pathOverview: String,
    proficiencyDefinition: String,
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    completed: Number,
    total: Number
});

const Path = mongoose.model('Path',pathSchema);

module.exports = Path;
