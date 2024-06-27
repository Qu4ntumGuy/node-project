const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { MongoClient, ConnectionPoolClosedEvent } = require("mongodb");
const { stderr } = require("process");
const { config } = require("dotenv");
dotenv.config({ path: __dirname + "../config.env" });

const uri =
  "mongodb://atlas-sql-620e371614268a1ccae43583-vniyj.a.query.mongodb.net/database-mern?ssl=true&authSource=admin";

const dbName = "node-project";
const collectionName = "user-data";

let db;
let collection;

// Connect to MongoDB Atlas
MongoClient.connect(uri)
  .then((client) => {
    db = client.db(dbName);
    collection = db.collection(collectionName);
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error occurred while connecting to MongoDB Atlas:", error);
  });

// Endpoint for retrieving the collection
router.get("/getInfo", fetchUser, async (req, res) => {
  console.log(req.user.id);
  if (!collection) {
    return res.status(500).json({ error: "Not connected to MongoDB Atlas" });
  }

  await collection
    .find({ user_id: req.user.id })
    .limit(10)
    .toArray()
    .then((documents) => {
      res.json({ documents });
    })
    .catch((error) => {
      console.error(
        "Error occurred while retrieving documents from collection:",
        error
      );
      res
        .status(500)
        .json({ error: "Failed to retrieve documents from collection" });
    });
});

const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const listUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const listUserData = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateData = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
  listUser,
  updateUser,
  updateData,
  listUserData,
  deleteUser,
};
