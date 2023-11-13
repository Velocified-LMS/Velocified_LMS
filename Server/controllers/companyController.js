const Path = require('../models/Path');
const User = require('../models/User');
const Company = require('../models/Company');
const mongoose = require('mongoose');

const updateCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.body.id, req.body.update, {new: true});
        res.json(company)
    } catch (err) {
        console.error('Error updating Company:', err);
        res.status(500).json({ message: 'Error updating company', error: err });
    }
};

const getCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.query.company);
        res.json(company)
    } catch (err) {
        console.error('Error fetching Company:', err);
        res.status(500).json({ message: 'Error fetching Company', error: err });
    }
};

module.exports = {
    updateCompany,
    getCompany
};