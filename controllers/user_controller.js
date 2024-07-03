import { userModel } from "../models/user_model.js";

// add Users

export const addUsers = async(req, res, next) => {
    try {
        const newUser = await userModel.create (req.body)
        res.status(201).json(newUser)
    } catch (error) {
       next(error) 
    }
}