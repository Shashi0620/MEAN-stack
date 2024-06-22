const universityModel = require('../models/university.model')
const express = require('express');
const axios = require('axios');

exports.createUniversitiesFromUrl = async (request,response) => {
    const countryName = request.query.countryName 
    try {
        const universityData = await axios.get(`http://universities.hipolabs.com/search?country=${countryName}`);
        const savedUniversityData = await universityModel.insertMany(universityData.data)
        response.status(200).json(savedUniversityData)
    } catch(error){
        response.status(400).json({ message: error.message })
    }
}

exports.createUniversity = async (request,response) => {
    const universityData = new universityModel({
        name: request.body.name,
        alpha_two_code: request.body.alpha_two_code,
        country: request.body.country,
        domains:request.body.domains[0],
        stateProvince: request.body.stateProvince,
        web_pages: request.body.web_pages[0]
    })
    try {
        const savedUniversityData = await universityModel.create(universityData)
        response.status(200).json(savedUniversityData)
    } catch(error){
        response.status(400).json({ message: error.message })
    }
}