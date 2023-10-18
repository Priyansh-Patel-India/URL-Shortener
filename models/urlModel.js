import { Schema, model } from "mongoose";
import mongoose from "mongoose";

// Create urlSchema
const urlSchema = new Schema(
	{
		shortId: {
			type: String,
			required: true,
			unique: true,
		},
		redirectURL: {
			type: String,
			required: true,
		},
		visitHistory: [{ timestamp: { type: Number } }],
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
	},
	{ timestamps: true }
);

// Create Model for URL
const URL = model("URL", urlSchema);
export default URL;
