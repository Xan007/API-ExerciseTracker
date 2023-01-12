import mongoose, { Schema, model } from "mongoose";

export const exerciseInfo = {
    description: {
        type: String
    },
    duration: {
        type: Number
    },
    date: {
        type: String
    }
}

const exerciseSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: String,
        required: true
    },
    ...exerciseInfo
})

const Exercise = model("Exercise", exerciseSchema)

export default Exercise