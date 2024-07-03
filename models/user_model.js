import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

//create  user schema 
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['organizer', 'attendee'],
        default: 'attendee'
      },

},
{
  timestamps: true
})

userSchema.plugin(toJSON)

export const userModel = model('user', userSchema)