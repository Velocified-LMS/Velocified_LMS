const express = require('express');
const cors = require('cors');
const session = require('express-session');
const db = require('./mongoDB')
const userRoutes = require('./routes/UserRoutes'); 
const messageRoutes = require('./routes/MessageRoutes');

const app = express();
const whitelist = ['http://localhost:3000/dashboard', 'http://localhost:3000/login'];
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  credentials: true
};
app.use(express.json());
app.use(cors())
// app.use(cors(corsOptions));
app.use(session({
  name: 'sid',
  secret: '123',
  resave: false,
  saveUninitialized: false,
  rolling: true, // Enable auto-renewal of the session cookie
  cookie: {
    maxAge: 60 * 60 * 1000,
    // secure: true for HTTPS in prod only
  },
}));

app.use('/user', userRoutes);
app.use('/message', messageRoutes);

app.listen(3100, () => {
  console.log('Server listening on port 3100');
});
