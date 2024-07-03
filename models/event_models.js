import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
import { Timestamp } from "mongodb";

//create  Event schema 
const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    categoryId: {
        type: Types.ObjectId,
        ref: 'Category',
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
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    flier: {
        type: String
    },

},
    {
        timestamps: true
    });


eventSchema.plugin(toJSON)

export const EventModel = model('Event', eventSchema)