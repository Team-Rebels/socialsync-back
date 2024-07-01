import { Router } from "express";
import { addEvent, deleteEvent, updateEvent } from "../controllers/event";


// create a route
const  eventRouter = Router();



//defining the route
eventRouter.post('/event', addEvent);
eventRouter.patch('/event', updateEvent);
eventRouter.delete('/event', deleteEvent);





export default eventRouter;