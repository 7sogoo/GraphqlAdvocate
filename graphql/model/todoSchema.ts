import mongoose, { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Todo title is required"],
        trim: true
    },
    status: {
        type: String,
        required: [true, "Todo status is required"],
        trim: true,
        enum: ["Todo", "InProgress", "Done"],
        default: "Todo"
    }
})

export const todoModel = mongoose.model('todo', todoSchema) ||  model("todo", todoSchema)