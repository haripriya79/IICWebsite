const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
//const { createTeamMember, getTeam, getTeamMemberById, updateTeamMember, deleteTeamMember } = require("../controllers/team")
const { createContact, getContactUs } = require("../controllers/contactUs")
    //to upload the video
router.post("/addContact", createContact);
// to get all the videos
router.get("/getContactUs/", isSignedIn, getContactUs);



module.exports = router;