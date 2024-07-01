import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import eventRouter from "./routes/art.js";
 
//create Expree App
const app = express();


//connecting to Datasebase
dbConnection();

//apply middlewares
app.use(express.json());



//defining routes
app.use(eventRouter);

// App to listen 
const port=process.env.PORT || 7070

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})