const mongoose = require('mongoose')

const universitySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    alpha_two_code: {
        required: false,
        type: String
    },
    country: {
        required: true,
        type: String
    },
    stateProvince: {
        required: false,
        type: String,
        alias: 'state-province'
    },
    web_pages: {
        required: true,
        type: []
    },
    domains: {
        required: true,
        type: []
    },
})

module.exports = mongoose.model('universities', universitySchema)
