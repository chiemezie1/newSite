const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { username, fristname, lastname, email, password }= req.body;
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