import { EventModel } from "../models/event_models.js";




// add event
export const addEvents = async (req, res, next) => {
    try {
        const addData = await EventModel.create({
           ...req.body,
         flier: req.file.filename})
        res.status(201).json(addData)
    } catch (error) {
        next(error)
    }
}

//update events 
export const updateEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const updatedData = await EventModel.findByIdAndUpdate(
            { _id: eventId },
            req.body,
            { new: true })
            
        res.status(200).json(updatedData)
    } catch (error) {
        next(error)
    }
}
// get  All event
export const getEvents = async (req, res, next) => {
    try {
        // Get all  event
        const allEvent = await EventModel.find();
        //return response
        res.status(200).json(allEvent);
    } catch (error) {
        next(error);
    }
}

//Get an event by ID 
export const getEventbyId = async (req, res, next) => {

    try {
        //get a event by ID
        const getevent = await EventModel.findById(req.params.id)
        // return a response
        res.status(200).json(getevent)
    } catch (error) {
        next(error)
    }

} 

//delete event
export const deleteEvent = async (req, res, next) => {
    try {
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEvent);
    } catch (error) {
        next(error)
    }
}
