const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


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
mongoose.connect(mongoURI, options)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/register', (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;
  // In a production environment, avoid sending the password in the response
  res.json({
    requestData: {
      username,
      firstname,
      lastname,
      email,
      password,
    }
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
