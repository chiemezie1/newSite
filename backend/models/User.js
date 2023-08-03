const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
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