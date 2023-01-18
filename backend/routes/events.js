const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
//const { createTeamMember, getTeam, getTeamMemberById, updateTeamMember, deleteTeamMember } = require("../controllers/team")
const { getEventById, createEvent, updateEvent, deleteEvent, getEvents, getEvent } = require("../controllers/events")
    //to upload the video
router.post("/addEvent", isSignedIn, createEvent);
// to get all the videos
router.get("/getEvents/", getEvents);
//to update the video
router.param("eventId", getEventById);
router.get("/getEvent/:eventId", getEvent);
router.put("/updateEvent/:eventId", isSignedIn, updateEvent);
//to delete the team member
router.delete("/deleteEvent/:eventId", isSignedIn, deleteEvent);



module.exports = router;