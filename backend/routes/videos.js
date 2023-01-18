const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
//const { createTeamMember, getTeam, getTeamMemberById, updateTeamMember, deleteTeamMember } = require("../controllers/team")
const { getVideoById, updateVideo, uploadVideo, getVideos, deleteVideo, getVideo } = require("../controllers/videos")
    //to upload the video
router.post("/addVideo", isSignedIn, uploadVideo);
// to get all the videos
router.get("/getVideos/", getVideos);
//to update the video
router.param("videoId", getVideoById);
router.get("/getVideo/:videoId", getVideo);
router.put("/updateVideo/:videoId", isSignedIn, updateVideo);
// //to delete the team member
router.delete("/deleteVideo/:videoId", isSignedIn, deleteVideo);


module.exports = router;