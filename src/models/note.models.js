import mongoose, { Schema } from "mongoose";

const projectNoteSchema = new mongoose.Schema(
    {
        project:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: "Task",
            required: true
        },
        content:{
            type: String,
            required: true,
        }
    },
    {
        timestamps:true,
    }
)

const ProjectNote = mongoose.model("ProjectNote", projectNoteSchema)

export default ProjectNote