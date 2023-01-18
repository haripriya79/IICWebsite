const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { ObjectId } = mongoose.Schema;

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    designation: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    role: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 200
    },
    photo: {
        type: String,
        required: true
    }


}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);