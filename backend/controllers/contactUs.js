const ContactUs = require("../models/contactUs");
const formidable = require("formidable");

exports.createContact = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with video",
            });
        }
        //destructure the fields
        const { name, email, subject, message } = fields;
        if (!name || !email || !message || !subject) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }


        let contact = new ContactUs({
            name: name,
            email: email,
            subject: subject,
            message: message

        });

        contact.save((err, vid) => {
            if (err) {
                res.status(400).json({
                    error: "Saving contact in DB failed",
                });
            }

            res.json(vid);
        });
    });
};

exports.getContactUs = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";

    ContactUs.find()
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, contactUs) => {
            if (err) {
                return res.status(400).json({
                    error: "NO team FOUND",
                });
            }
            res.json(contactUs);
        });
};