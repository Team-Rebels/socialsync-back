import { categoriesModel } from "../models/event_categories_models.js";


export const postCategory = async (req, res,next)  => {
    try {
        //add new category to database
        const newCategory = await categoriesModel.create({
            ...req.body,
            image: req.file.filename
        });
        //return response
        res.status(201).json(newCategory);
    } catch (error) {
     next(error)   
    }
}