const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const videosSchema = new mongoose.Schema({
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

    url: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },

}, { timestamps: true });

module.exports = mongoose.model("Videos", videosSchema);