import { Schema, model, models } from "mongoose";

const logSchema = new Schema(
	{
		to: {
			type: String,
			required: true,
		},
		from: {
			type: String,
		},
		type: {
			type: String,
			required: true,
			enum: ['view', 'mail'],
			default: 'view',
		},
	},
	{ timestamps: true }
);

const Log = models.log || model("log", logSchema);

export default Log;
