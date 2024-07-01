import mongoose from "mongoose";
import 'dotenv/config';

//declare connection string
const connectionString = process.env.mongo_url



//create database connection
 export const dbConnection = () => {
    mongoose.connect(connectionString).then (() => {
        console.log('Database is connected');
    });
};