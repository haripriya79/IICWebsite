const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const testimonialsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    designation: {
        type: String,
        trim: true,
        maxlength: 200,
        required: true
    },

    testimonial: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },

}, { timestamps: true });

module.exports = mongoose.model("Testimonials", testimonialsSchema);