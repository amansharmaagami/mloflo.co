import { Schema, model, models } from "mongoose";

const mailSchema = new Schema(
	{
		_inbox: {
			type: String,
			select: false,
		},
		to: {
			type: String,
			required: true,
		},
		from: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		text: {
			type: String,
		},
		html: {
			type: String,
		},
		messageId: {
			type: String,
		},
		date: {
			type: Date,
		}
	},
	{ timestamps: true }
);

mailSchema.index({ createdAt: 1 }, { expireAfterSeconds: 7200 });

mailSchema.pre("save", async function () {
	if (this.isNew) {
		this._inbox = this.to.split("@").shift();
	}
});

const Mail = models.mail || model("mail", mailSchema);

export default Mail;
