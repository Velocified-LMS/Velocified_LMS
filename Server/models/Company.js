const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  domain: String,
  seats: Number
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
