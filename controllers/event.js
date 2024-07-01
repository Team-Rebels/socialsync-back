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
export const updateEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const updatedData = await EventModel.findByIdAndUpdate({_id:eventId}, req.body,{new:true})
        console.log(updatedData);
        res.status(200).json(updatedData)
    
    }catch (error) {
        next(error)
    }
}

//delete event
export const deleteEvent = async (req, res, next) => {
    const deletedData = await EventModel.findByIdAndDelete(req.params.id);
    res.status(200).json(` Note deleted` );
}
