const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://velocified:velocified@cluster0.rn0uvpg.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose.connection;
