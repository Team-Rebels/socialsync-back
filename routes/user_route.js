import { Router } from "express";
import { addUsers } from "../controllers/user_cont.js";

//create Router
const userRouter = Router();

// create route 

userRouter.post('/register', addUsers);


export default userRouter;