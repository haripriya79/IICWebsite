const mongoose = require("mongoose");
//const mongooseDummy = require("mongoose-dummy");
const { ObjectId } = mongoose.Schema;
const eventDetailsSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    description: {
        type: String,

    },
});

const activitiesSchema = new mongoose.Schema({
    name: {
        type: String,


    },
    description: {
        type: String,

    },
    timings: {
        type: String,
    },
    location: {
        type: String,
    },
    photo: {
        type: String,
    }
});

const eventsSchema = new mongoose.Schema({
    eventName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100,

    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventVenue: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true,
    },
    //registration details
    registrationDetails: {
        fee: {
            type: Number,
            required: true,
        },
        closesOn: {
            type: Date,
        },
        link: {
            type: String,
            required: true,
            maxlength: 200,
        },
    },
    eventDetails: [eventDetailsSchema],
    activities: [activitiesSchema],
    contactDetails: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            requires: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    image: String,
    facultyCoOrdinatorName: {
        type: String,
        required: true,
    },

}, { timestamps: true });

module.exports = mongoose.model("Events", eventsSchema);
// let randomObject = mongooseDummy(model, {
//     returnDate: true,
// });
// console.log(JSON.stringify(randomObject));