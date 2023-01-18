const Event = require("../models/events");


exports.getEventById = (req, res, next, id) => {
    Event.findById(id).exec((err, event) => {
        if (err || !event) {
            return res.status(400).json({
                error: "startup not found",
            });
        }
        req.event = event;
        req.id = id;
        next();
    });
};
exports.getEvent = (req, res) => {
    res.json(req.event);
}
exports.createEvent = (req, res) => {
    const event = new Event(req.body);
    event.save((err, eve) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                error: "Saving tshirt in DB failed",
            });
        }
        //return res.send(eve);
        res.json({ name: eve.eventName });
    });
};

exports.getEvents = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "eventDate";

    Event.find()
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, event) => {
            if (err) {
                return res.status(400).json({
                    error: "NO team FOUND",
                });
            }
            res.json(event);
        });
};

// delete controllers
exports.deleteEvent = (req, res) => {
    let event = req.event;
    event.remove((err, deletedEvent) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the startup",
            });
        }
        //deleting the startup

        res.json({
            message: "Deletion was a success",
            deletedEvent,
        });
    });
};
//update the team startup
exports.updateEvent = (req, res) => {
    console.log(req.event);

    Event.findByIdAndUpdate({ _id: req.id }, { $set: req.body }, { new: true, useFindAndModify: false },
        (err, mem) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    error: "You are not authorized to update this team"
                });
            }
            res.json({ name: mem.eventName });
        }
    );

};