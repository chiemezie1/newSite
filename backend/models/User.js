const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 20
    },
    fristname: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 20
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 20
    }
});

const userModel = model('User', UserSchema);

model.exports = userModel;