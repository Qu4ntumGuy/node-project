const mongoose = require("mongoose");
const dotenv = require("dotenv");

// path to .env file
dotenv.config({ path: path.join(__dirname, "config.env") });

const mongoURL = process.env.DATABASE_URL;
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, { dbName: "project" });
    mongoose.set("debug", true);
    console.log("Connected to mongo successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToMongo };
