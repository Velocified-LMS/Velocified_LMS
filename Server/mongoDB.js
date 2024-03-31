const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.DATABASE_URL;
// const mongoURI = process.env.MONGODB_URI
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


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://gaorteg4:ksQJnOyu3KFpggMA@velocified.rkm3pbb.mongodb.net/?retryWrites=true&w=majority&appName=Velocified";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
