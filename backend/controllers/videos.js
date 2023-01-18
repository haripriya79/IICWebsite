const Videos = require("../models/videos");
const formidable = require("formidable");

exports.getVideoById = (req, res, next, id) => {
    Videos.findById(id).exec((err, video) => {
        if (err || !video) {
            return res.status(400).json({
                error: "video not found",
            });
        }
        req.video = video;
        req.id = id;
        next();
    });
};
exports.getVideo = (req, res) => {
    res.json(req.video);
}
exports.uploadVideo = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with video",
            });
        }
        //destructure the fields
        const { name, description, url } = fields;
        if (!name || !description || !url) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }

        let video = new Videos(fields);
        video.save((err, vid) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed",
                });
            }


            res.json(video);
        });
    });
};

exports.getVideos = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";

    Videos.find()
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, videos) => {
            if (err) {
                return res.status(400).json({
                    error: "NO team FOUND",
                });
            }
            res.json(videos);
        });
};

// delete controllers
exports.deleteVideo = (req, res) => {
    let video = req.video;
    video.remove((err, deletedVideo) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the video",
            });
        }
        //deleting the video

        res.json({
            message: "Deletion was a success",
            deletedVideo,
        });
    });
};
//update the team video
exports.updateVideo = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, _) => {
        if (err) {
            return res.status(400).json({
                error: "problem with video",
            });
        }


        //save to the DB
        Videos.findByIdAndUpdate({ _id: req.id }, { $set: fields }, { new: true, useFindAndModify: false },
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