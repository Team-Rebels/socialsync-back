import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import eventRouter from "./routes/event-route.js";
 import userRouter from "./routes/user_route.js";
//create Expree App
const app = express();


//connecting to Datasebase
dbConnection();

//apply middlewares
app.use(express.json());
app.use(express.static('uploads'))


//defining routes
app.use(eventRouter);
app.use(userRouter)

// App to listen 
const port=process.env.PORT || 7070

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})