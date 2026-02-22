// model for Note
import mongoose from "mongoose";
import { type } from "node:os";
import { title } from "node:process";
//step 1 - create a scheme
//step 2 - model based off that schema

//creating schema
const noteSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }, // createdAt, updatedAt
);

//creating model
const Note = mongoose.model("Note", noteSchema);

export default Note;
