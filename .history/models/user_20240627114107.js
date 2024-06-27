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
});

module.exports = mongoose.model("user", userSchema);
