const Path = require('../models/Path');
const User = require('../models/User');
const Company = require('../models/Company');
const mongoose = require('mongoose');

const getPath = async (req, res) => {
    try {
        const path = await Path.findOne({pathId: req.query.pathId})
        res.json(path)
    } catch (err) {
        console.error('Error fetching Path:', err);
        res.status(500).json({ message: 'Error fetching Path', error: err });
    }
};
 
const getPathsByCompany = async (req, res) => {
    try {
        const paths = await Path.find({company: req.query.companyId})
        res.json(paths)
    } catch (err) {
        console.error('Error fetching Path:', err);
        res.status(500).json({ message: 'Error fetching Path', error: err });
    }
};

const createPath = async (req, res) => {
    try {
        const path = req.body;
        path.pathId = await generateHexcode();
        const resposne = await Path.create(path)
        res.status(200).json(resposne);
    } catch (err) {
        console.error('Error creating Path:', err);
        res.status(500).json({ message: 'Error creating Path', error: err });
    }
};

const updatePath = async (req, res) => {
    try {
        let path = req.body;
        path._id = new mongoose.Types.ObjectId(path._id);
        const resposne = await Path.findByIdAndUpdate(
            path._id,
            { $set: path },
            { new: true }
          );
        res.status(200).json(resposne);
    } catch (err) {
        console.error('Error updating Path:', err);
        res.status(500).json({ message: 'Error updating Path', error: err });
    }
}

generateHexcode = async () => {
    let path, hexCode;
    do {
        const randomNum = Math.floor(Math.random() * 65536);
        hexCode = randomNum.toString(16).padStart(4, '0');
        path = await Path.findOne({ id: hexCode });
    } while (path);
    return hexCode;
}

module.exports = {
    getPath,
    createPath,
    updatePath,
    getPathsByCompany
};