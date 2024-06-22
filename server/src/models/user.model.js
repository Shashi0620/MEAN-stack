const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: false,
        type: Number
    },
    phoneNumber: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email address is required'
    },
    pincode: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('users', dataSchema)