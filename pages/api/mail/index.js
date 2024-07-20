import db from "../../../utils/db";
import Mail from "../../../models/Mail";
import Log from "../../../models/Log";
import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: { fileSize: 52428800 },
});

export const config = {
    api: { bodyParser: true },
};

export default async function handler(req, res) {
    await new Promise((resolve) => {
        // you may use any other multer function
        const mw = upload.any();

        //use resolve() instead of next()
        mw(req, res, resolve);
    });

    await db();

    const { to, cc, html, subject, text, messageId, date } = req.body;

    const emails = [];

    if (to?.value) {
        emails.push(...to.value);
    }

    if (cc?.value) {
        emails.push(...cc.value);
    }

    // Here emailList is string contains email addresses separated by comma

    for (let { address } of emails) {

        let to = address?.toLowerCase();

        if (to.split("@").pop() === process.env.DOMAIN) {
            await Mail.create({
                to,
                html,
                subject,
                text,
                date,
                messageId,
            });

            /**
             * Logging every email for reports which inbox are used most
             * and which are the most email are coming from
             */
            Log.create({
                to,
                from: req.body.from?.text,
                type: "mail",
            });
        }
    }

    res.status(201).send();
}
