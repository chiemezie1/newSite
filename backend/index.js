const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const app = express();

app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use(express.json());

// MongoDB connection string and options
const mongoURI = process.env.MONGO_URI;
const JwtSecret = process.env.JWT_SECRET;

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


  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const userDetails = await User.findOne({ username });
      if (!userDetails) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const hash = userDetails.password;
      const isPasswordMatch = await bcrypt.compare(password, hash);
  
      if (isPasswordMatch) {
        
        jwt.sign({ username, id: userDetails._id }, JwtSecret, { }, function(err, token) {
          if(err) throw err;
          res.cookie('token', token).json('okay');
          // console.log(token);
        });

      } else {
        // Passwords do not match, authentication failed
        res.status(401).json({ error: 'Authentication failed' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  });
  


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
