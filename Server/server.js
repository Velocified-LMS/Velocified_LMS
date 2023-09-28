const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  };
  
app.use(cors(corsOptions));

app.get('/users', (req, res) => {
    console.log("yo");
  res.send('Hello from Express.js!');
});

app.listen(3100, () => {
  console.log('Server listening on port 3100');
});
