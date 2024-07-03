import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

// create Categories schema
const event_categoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    }
},
    {
        timestamps: true
    })





event_categoriesSchema.plugin(toJSON)

export const categoriesModel = model('Event_Categorie', event_categoriesSchema)