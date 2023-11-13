const express = require('express');
const cors = require('cors');
const session = require('express-session');
const db = require('./mongoDB')
const userRoutes = require('./routes/UserRoutes'); 
const messageRoutes = require('./routes/MessageRoutes');
const pathRoutes = require('./routes/PathRoutes');
const activityRoutes = require('./routes/ActivityRoutes');
const companyRoutes = require('./routes/CompanyRoutes');

const app = express();
const corsOptions = {
  origin: ['https://velocified.net', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  credentials: true
};
app.use(express.json());
// app.use(cors()) // Don't use it for testing 

app.use(cors(corsOptions));
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
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Healthy!' });
});
app.use('/user', userRoutes);
app.use('/message', messageRoutes);
app.use('/path', pathRoutes);
app.use('/activity', activityRoutes)
app.use('/company', companyRoutes);

app.listen(3100, () => {
  console.log('Server listening on port 3100');
});
