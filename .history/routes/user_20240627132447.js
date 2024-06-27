const express = require("express");
const router = express.Router();
const userAuth = require("../middleware");

const {
  createUser,
  listUser,
  updateUser,
  updateData,
  listUserData,
  deleteUser,
} = require("../controller/user-controller");

// Route-1 for creating the user
router.post("/createUser", createUser);

// Route-2 for listing up the users
router.get("/listUser", userAuth, listUser);

// Route-3 for updating the user
router.put("/updateUser", userAuth, updateUser);

// Route-4 for updating partial data
router.patch("/updateUserData", userAuth, updateData);

// Route-5 for fetching the user data
router.get("/listUser/:id", userAuth, listUserData);

// Route-6 for deleting the user
router.delete("/deleteUser", userAuth, deleteUser);

module.exports = router;
