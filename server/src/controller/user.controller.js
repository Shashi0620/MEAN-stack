const userModel = require('../models/user.model')

exports.createUser = async (request, response) => {
    const userData = new userModel({
        name: request.body.name,
        age: request.body.age
    })
    try {
        const dataToSave = await userData.save();
        response.status(200).json(dataToSave)
    } catch (error) {
        response.status(400).json({ message: error.message })
    }
}

exports.getUserById = async (request,response) => {
    try {
        const userData = await Model.findById(request.params.id);
        response.json(userData)
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
}

exports.getAllUsers = async (request,response) => {
    try {
        const data = await Model.find();
        response.json(data)
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
}

exports.updateUserById = async (request,response) => {
    try {
        const id = request.params.id;
        const updatedData = request.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        response.send(result)
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
}

exports.deleteUserById = async (request,response) => {
    try {
        const id = request.params.id;
        const data = await Model.findByIdAndDelete(id)
        response.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        response.status(400).json({ message: error.message })
    }
}