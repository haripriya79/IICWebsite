const express = require("express");
const router = express.Router();

const {
    updatePasswordById,
    getUserById,
    getUser,
    updateUser,
    updateUserPassword,
    getOverview
} = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

// router.param("userId", getUserById);

// router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
// router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

// router.get(
//     "/orders/user/:userId",
//     isSignedIn,
//     isAuthenticated,
//     userPurchaseList
// );
router.get("/getOverview", isSignedIn, getOverview);
router.param("userId", updatePasswordById);
router.put("/changePassword/:userId", isSignedIn, updateUserPassword);


module.exports = router;