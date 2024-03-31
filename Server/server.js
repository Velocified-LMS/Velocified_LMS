const express = require("express");
const cors = require("cors");
const session = require("express-session");
const db = require("./mongoDB");
const userRoutes = require("./routes/UserRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const pathRoutes = require("./routes/PathRoutes");
const activityRoutes = require("./routes/ActivityRoutes");
const companyRoutes = require("./routes/CompanyRoutes");

const app = express();
// origin is the URL that is sending requests
// The port should be whatever port your REACT APP is using
// (origin) React sends to node server (port)
const corsOptions = {
  origin: ["http://localhost:" + process.env.LOCALHOST_PORT],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
  credentials: true,
};
app.use(express.json());

app.use(cors(corsOptions));
app.use(
  session({
    user: "hey",
    name: "sid",
    secret: "123",
    resave: false,
    saveUninitialized: false,
    rolling: true, // Enable auto-renewal of the session cookie
    cookie: {
      maxAge: 60 * 60 * 1000,
      // secure: true for HTTPS in prod only
    },
  })
);
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Healthy!" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is listening!" });
});

/* Middleware - Not actual routes */
app.use("/user", userRoutes);
app.use("/message", messageRoutes);
app.use("/path", pathRoutes);
app.use("/activity", activityRoutes);
app.use("/company", companyRoutes);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
