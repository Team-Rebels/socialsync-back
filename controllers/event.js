import { EventModel } from "../models/add_event";




// add event
export const addEvent = async (req, res, next) => {
    try {
        const addData = await EventModel.create(req.body)
        res.status(201).json(addData)
    } catch (error) {
        next(error)
    }
}

//update events 
// export const updateEvent = async (req, res, next) => {
//     try {
//         const updatedData = await EventModel.
//     } catch (error) {
//         next(error)
//     }
// }
