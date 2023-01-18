const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
//const { createTeamMember, getTeam, getTeamMemberById, updateTeamMember, deleteTeamMember } = require("../controllers/team")
const { uploadImage, getImages, getImageById, updateImage, deleteImage, getImageType, getImage, getAllImages } = require("../controllers/images")
    //to upload the team members
router.post("/uploadImage", isSignedIn, uploadImage);
// to get all the team members
router.get("/getAllImages", getAllImages);
router.param("imageType", getImageType);
router.get("/getImages/:imageType", getImages);
//to update the team members
router.param("imageId", getImageById);
router.get("/getImage/:imageId", getImage);
router.put("/updateImage/:imageId", isSignedIn, updateImage);
// //to delete the team member
router.delete("/deleteImage/:imageId", isSignedIn, deleteImage);


module.exports = router;