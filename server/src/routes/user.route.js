const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

/** 
 * Post Method 
 */
router.post('/post', userController.createUser)

/**
 * Get all Method 
 */
router.get('/getAll', userController.getAllUsers)

/**
 * Get by ID Method 
 */
router.get('/getOne/:id', userController.getUserById)

/**
 * Update by ID Method 
 */
router.patch('/update/:id', userController.updateUserById)

/**
 * Delete by ID Method 
 */
router.delete('/delete/:id', userController.deleteUserById)

module.exports = router;