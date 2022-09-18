import db from "../../../utils/db";
import Mail from "../../../models/Mail";
import multer from "multer";
import addressParser from 'address-rfc2822';

const storage = multer.memoryStorage();

const upload = multer({
	storage,
	limits: { fileSize: 52428800 },
});

export const config = {
	api: { bodyParser: false },
};

export default async function handler(req, res) {
	await new Promise((resolve) => {
		// you may use any other multer function
		const mw = upload.any();

		//use resolve() instead of next()
		mw(req, res, resolve);
	});

	await db();

	const { to: emailList } = req.body;
	// Here emailList is string contains email addresses separated by comma

	for (let email of emailList.split(",")) {

		let [{ address: to }] = addressParser.parse(email);
		to = to.toLowerCase();

		if (to.split("@").pop() === process.env.DOMAIN) {
			await Mail.create({
				...req.body,
				to
			});
		}
	}

	res.status(201).send();
}
