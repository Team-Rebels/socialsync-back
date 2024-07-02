import { Router } from "express";
import { addEvent, deleteEvent, getEvent, updateEvent } from "../controllers/event.js";


// create a route
const  eventRouter = Router();



//defining the route
eventRouter.post('/event', addEvent);
eventRouter.patch('/event', updateEvent);
eventRouter.delete('/event', deleteEvent);

// get route
eventRouter.get('/event', getEvent);



export default eventRouter;