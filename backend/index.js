const express = require('express');
const  mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    
})


app.post('/register', (req, res) => {
    const { username, fristname, lastname, email, password } = req.body;
    res.json({
        requestData: {
            username,
            fristname,
            lastname,
            email,
            password
        }
    });
})

app.listen(4000, () => {
    console.log('listening on port 4000');
})

//mongosh "mongodb+srv://cluster10.y7mchtw.mongodb.net/" --apiVersion 1 --username absolute
//emezie80