const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User.js");
const bcrypt = require('bcrypt');
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

// MongoDB connection string and options
const mongoURI = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose
  .connect(mongoURI, options)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));



  const saltRounds = 10;
  
  app.post("/register", async (req, res) => {
    const { username, firstname, lastname, email, password } = req.body;
    try {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) {
          // Handle the error if bcrypt.hash encounters an issue
          console.error('Error while hashing password:', err);
          return res.status(500).json({ error: 'An error occurred during registration' });
        }
  
        // If no error, proceed with creating the user
        const userDoc = await User.create({
          username,
          firstname,
          lastname,
          email,
          password: hash, 
        });
        res.json(userDoc);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
