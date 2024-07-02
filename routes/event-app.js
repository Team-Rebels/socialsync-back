import { Router } from "express";
import { addEvent, deleteEvent, getEvent, updateEvent } from "../controllers/event.js";


// create a route
const eventRouter = Router();

//DEFINE ROUTES
//post route
eventRouter.post('/event', addEvent);
// route to update Event
eventRouter.patch('/event/:id', updateEvent);
//route to delete Event
eventRouter.delete('/event/:id', deleteEvent);
// Route to Get All Event
eventRouter.get('/event', getEvent);



export default eventRouter;