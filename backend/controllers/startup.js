const Startup = require("../models/startup");
const formidable = require("formidable");

exports.getStartupById = (req, res, next, id) => {
    Startup.findById(id).exec((err, startup) => {
        if (err || !startup) {
            return res.status(400).json({
                error: "startup not found",
            });
        }
        req.startup = startup;
        req.id = id;
        next();
    });
};
exports.getStartup = (req, res) => {

    res.json(req.startup);
}
exports.createStartup = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with startup",
            });
        }
        //destructure the fields
        const { name, description, url, photo } = fields;
        if (!name || !description || !url || !photo) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }
        let startup = new Startup(fields);

        startup.save((err, startup) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed",
                });
            }
            res.json(startup);
        });
    });
};

exports.getStartups = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";

    Startup.find()
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, startups) => {
            if (err) {
                return res.status(400).json({
                    error: "NO team FOUND",
                });
            }
            res.json(startups);
        });
};

// delete controllers
exports.deleteStartup = (req, res) => {
    let startup = req.startup;
    startup.remove((err, deletedStartup) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the startup",
            });
        }
        //deleting the startup

        res.json({
            message: "Deletion was a success",
            deletedStartup,
        });
    });
};
//update the team startup
exports.updateStartup = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with startup",
            });
        }
        //save to the DB
        Startup.findByIdAndUpdate({ _id: req.id }, { $set: fields }, { new: true, useFindAndModify: false },
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