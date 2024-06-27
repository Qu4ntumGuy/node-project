const express = require("express");
const router = express.Router();
const userAuth = require("../middleware");

const {
  signupUser,
  loginUser,
  otpVerification,
  forgotPassword,
  mainForgotPassword,
  viewProfile,
  resetPassword,
  updateUser,
  addPlatform,
  otpVerificationForPlatform,
  addHOF,
  getHofurls,
  searchUser,
  currentPlatformResults,
} = require("../controller/user-controller");

// Route-1 for creating the user
router.post("/createUser", createUser);

// Route-2 for login up the user
router.get("/listUser", fetchUser, listUser);

// Route-3 for otpVerification
router.put("/updateUser", fetchUser, updateUser);

// Route-4 for resetting password
router.patch("/updateUserData", updateData);

// Route-5 for resetting password after verification
router.post("/listUser/:id", mainForgotPassword);

// Route-6 for veiwing the user profile

// Route-7 for reset password fro login user
router.delete("/deleteUser", fetchUser, deleteUser);

// Route-8 for update name in settings
router.post("/updateUser", fetchUser, updateUser);

// Route-9 for adding the platform
router.post("/addPlatform", fetchUser, addPlatform);

// Route-10 for otpVerification for Platform
router.post(
  "/otpVerificationForPlatform",
  fetchUser,
  otpVerificationForPlatform
);

// Route-11 for adding hall of fames urls
router.post("/addHof", fetchUser, addHOF);

// Route-12 for fetching all hof
router.get("/getHof", fetchUser, getHofurls);

// add search routes for the users...
router.post("/searchUser", searchUser);

// show the current status of all the platforms which have been added
router.get("/currentPlatformResults", fetchUser, currentPlatformResults);

module.exports = router;
