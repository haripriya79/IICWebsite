const Testimonials = require("../models/testimonial");
const formidable = require("formidable");

exports.getTestimonialsById = (req, res, next, id) => {
    Testimonials.findById(id).exec((err, testimonial) => {
        if (err || !testimonial) {
            return res.status(400).json({
                error: "testimonials not found",
            });
        }
        req.testimonial = testimonial;
        req.id = id;
        next();
    });
};
exports.createTestimonials = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with testimonials",
            });
        }
        //destructure the fields
        const { name, designation, testimonial } = fields;
        if (!name || !designation || !testimonial) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }


        let testimonials = new Testimonials({
            name: name,
            designation: designation,
            testimonial: testimonial
        });

        testimonials.save((err, testimonial) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed",
                });
            }

            //return res.send("Successfully uploaded");
            res.json(testimonial);
        });
    });
};
exports.getTestimonial = (req, res) => {
    res.json(req.testimonial);
}

exports.getTestimonials = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";

    Testimonials.find()
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, testimonials) => {
            if (err) {
                return res.status(400).json({
                    error: "NO team FOUND",
                });
            }
            res.json(testimonials);
        });
};

// delete controllers
exports.deleteTestimonials = (req, res) => {
    let testimonial = req.testimonial;
    testimonial.remove((err, deletedTestimonials) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the testimonials",
            });
        }
        //deleting the testimonials

        res.json({
            message: "Deletion was a success",
            deletedTestimonials,
        });
    });
};
//update the team testimonials
exports.updateTestimonials = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with testimonials",
            });
        }
        //save to the DB
        Testimonials.findByIdAndUpdate({ _id: req.id }, { $set: fields }, { new: true, useFindAndModify: false },
            (err, mem) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        error: "You are not authorized to update this team"
                    });
                }
                res.json(mem);
            }
        );
    });
};