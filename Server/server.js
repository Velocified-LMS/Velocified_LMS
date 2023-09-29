const express = require('express');
const cors = require('cors');
const db = require('./mongoDB')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); 

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};
app.use(bodyParser.json());
app.use('/api', userRoutes);
// app.use(cors(corsOptions));
app.use(cors());

app.get('/users', (req, res) => {
  res.send('Hello from Express.js!');
});

app.listen(3100, () => {
  console.log('Server listening on port 3100');
});
