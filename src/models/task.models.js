import mongoose, { Schema } from "mongoose";
import {AvailableTaskStatuses, TaskStatusEnum} from "../utils/constants.js";
import { urlencoded } from "express";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        assignedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: AvailableTaskStatuses,
            default: TaskStatusEnum.TODO,
        },
        attachments: {
            type: [
            {
                url: String,
                mimetype: String,
                size: Number,
            },
        ],  
          default: [],
        },
    },
    {
        timestamps:true,
    }
)

const Task = mongoose.model("Task", taskSchema)

export default Task