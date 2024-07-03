import { Router } from "express";
import { addEvents, deleteEvent, getEventbyId, getEvents, updateEvent } from "../controllers/event_Controller.js";
import { remoteUploads } from "../middlewares/uploads.js";


// create a route
const eventRouter = Router();

//DEFINE ROUTES
//post route
eventRouter.post('/events', remoteUploads.single('flier'), addEvents);
// route to update Event
eventRouter.patch('/events/:id', updateEvent);
//route to delete Event
eventRouter.delete('/events/:id', deleteEvent);
// Route to Get All Event
eventRouter.get('/events', getEvents);
//get an event by ID
eventRouter.get('/events/:id',getEventbyId)



export default eventRouter;