import express from "express";
import 'dotenv/config'
import cors from "cors"
import { dbConnection } from "./config/db.js";
import expressOasGenerator from "express-oas-generator";
import eventRouter from "./routes/event-route.js";
 import userRouter from "./routes/user_route.js";
 import mongoose from "mongoose";



 //create Expree App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs:true,
    tags:[ 'Events','Event_Categories', 'Users'],
    mongooseModels:mongoose.modelNames(),
});


//connecting to Datasebase
dbConnection();

//apply middlewares
app.use(cors())
app.use(express.json());
app.use(express.static('uploads'))


//defining routes
app.use(eventRouter);
app.use(userRouter)
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));


// App to listen 
const port=process.env.PORT || 7070

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})