const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
//const { createTeamMember, getTeam, getTeamMemberById, updateTeamMember, deleteTeamMember } = require("../controllers/team")
const { getTestimonialsById, getTestimonials, updateTestimonials, createTestimonials, deleteTestimonials, getTestimonial } = require("../controllers/testimonial")
    //to upload the video
router.post("/addTestimonial", isSignedIn, createTestimonials);
// to get all the videos
router.get("/getTestimonials/", getTestimonials);
//to update the video
router.param("testimonialId", getTestimonialsById);
router.get("/getTestimonial/:testimonialId", getTestimonial);
router.put("/updateTestimonial/:testimonialId", isSignedIn, updateTestimonials);
// //to delete the team member
router.delete("/deleteTestimonial/:testimonialId", isSignedIn, deleteTestimonials);


module.exports = router;