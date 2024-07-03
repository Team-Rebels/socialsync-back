import { Router } from "express";
import { addUsers } from "../controllers/user_controller.js";

//create Router
const userRouter = Router();

// create route 

userRouter.post('/register', addUsers);






export default userRouter;