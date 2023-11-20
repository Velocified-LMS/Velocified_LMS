const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = `mongodb://velocified:velocified@docdb-2023-11-20-05-39-09.cawmuccrafqd.ca-central-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&retryWrites=false`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // user: "velocified",
    // pass: process.env.MONGO_PWD,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose.connection;
