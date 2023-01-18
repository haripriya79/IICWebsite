const Images = require("../models/images");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");

exports.getImageType = (req, res, next, id) => {
    console.log(Images.schema.path('imageType').enumValues.includes(id), id);
    if (Images.schema.path('imageType').enumValues.includes(id)) {
        req.imageType = id;
        next();
    } else {
        res.status(400).json({
            error: "Not Found",
        });
    }

};
exports.getImageById = (req, res, next, id) => {
    Images.findById(id).exec((err, image) => {
        if (err || !image) {
            res.status(400).json({
                error: "image not found",
            });
        }
        req.image = image;
        req.id = id;
        next();
    });
};
exports.getImage = (req, res) => {
    res.json(req.image);
};

exports.uploadImage = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, file) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                error: "problem with image",
            });
        }
        let image = Images(fields);
        image.save((err, img) => {
            if (err) {
                res.status(400).json({
                    error: "Saving Image in DB failed",
                });
            }

            res.json(img);
            //res.json(image);
        });
    });
};
exports.getAllImages = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "imageType";

    Images.find()
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, images) => {
            if (err) {
                res.status(400).json({
                    error: "No Images FOUND",
                });
            }
            res.json(images);
        });
};

exports.getImages = (req, res) => {
    //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";
    console.log(req.imageType);
    Images.find({ imageType: req.imageType })
        .sort([
            [sortBy, "asc"]
        ])
        .exec((err, images) => {
            if (err) {
                res.status(400).json({
                    error: "No Images FOUND",
                });
            }
            res.json(images);
        });
};

// delete controllers
exports.deleteImage = (req, res) => {
    let image = req.image;
    image.remove((err, deletedImage) => {
        if (err) {
            res.status(400).json({
                error: "Failed to delete the image",
            });
        }
        //deleting the photo
        res.json({
            message: "Deletion was a success",
            deletedImage,
        });
    });
};
//update the team image
exports.updateImage = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image",
            });
        }
        //updation code
        let image = req.image;
        image = _.extend(image, fields);
        //save to the DB
        Images.findByIdAndUpdate({ _id: req.id }, { $set: image }, { new: true, useFindAndModify: false },
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