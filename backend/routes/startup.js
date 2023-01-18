const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
//const { createTeamMember, getTeam, getTeamMemberById, updateTeamMember, deleteTeamMember } = require("../controllers/team")
const { getStartupById, getStartups, updateStartup, createStartup, deleteStartup, getStartup } = require("../controllers/startup")
    //to upload the video
router.post("/addStartup", isSignedIn, createStartup);
// to get all the videos
router.get("/getStartups/", getStartups);
//to update the video
router.param("startupId", getStartupById);
router.get("/getStartup/:startupId", getStartup);
router.put("/updateStartup/:startupId", isSignedIn, updateStartup);
// //to delete the team member
router.delete("/deleteStartup/:startupId", isSignedIn, deleteStartup);


module.exports = router;