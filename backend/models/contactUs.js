const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },

    subject: {
        type: String,
        trim: true,
        required: true,
        maxlength: 500
    },
    message: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },

}, { timestamps: true });

module.exports = mongoose.model("ContactUs", contactUsSchema);