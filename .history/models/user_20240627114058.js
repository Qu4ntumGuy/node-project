const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    default: "",
  },
  age: {
    type: String,
    default: "",
  },
  code: {
    type: String,
    required: true,
    default: "",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  hackerone: {
    username: { type: String, default: "" },
    verified: { type: Boolean, default: false },
  },
  bugcrowd: {
    username: { type: String, default: "" },
    verified: { type: Boolean, default: false },
  },
  intigriti: {
    username: { type: String, default: "" },
    verified: { type: Boolean, default: false },
  },
  yeswehack: {
    username: { type: String, default: "" },
    verified: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model("user", userSchema);
