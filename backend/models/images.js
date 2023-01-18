const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const imagesSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 200
    },
    imageType: {
        type: String,
        maxlength: 32,
        enum: ["Gallery", "Articles", "Bulletin", "Investors", "Partners", "Mentors"],
        required: true
    },
    photo: {
        type: String,
        trim: true,
        required: true,
    },

}, { timestamps: true });

module.exports = mongoose.model("Images", imagesSchema);