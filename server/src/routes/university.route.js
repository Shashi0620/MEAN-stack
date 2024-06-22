const express = require('express');
const universityRouter = express.Router();
const universityController = require('../controller/university.controller')
/** 
 * Post Method 
 */
universityRouter.post('/post', universityController.createUniversitiesFromUrl)
universityRouter.post('/post/createUniversity', universityController.createUniversity)

/**
 * Get all Method 
 */

module.exports = universityRouter;