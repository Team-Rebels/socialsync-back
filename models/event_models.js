import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

//create  Event schema 
const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    flier: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});


eventSchema.plugin(toJSON)

export const EventModel = model('Events', eventSchema)