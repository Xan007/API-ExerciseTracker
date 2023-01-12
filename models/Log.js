import mongoose, { Schema, model } from "mongoose";
import { exerciseInfo } from "./Exercise.js";

const logSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0
    },
    log: [
        exerciseInfo
    ]
})

const Log = model("Log", logSchema)

export default Log