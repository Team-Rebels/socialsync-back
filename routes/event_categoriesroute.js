import { Router } from "express";

export const postCategory = async (req, res,next)  => {
    try {
        
        //add new category to database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        //return response
        res.status(201).json(newCategory);
    } catch (error) {
     next(error)   
    }
}