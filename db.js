const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// path to .env file
dotenv.config({ path: path.join(__dirname, "config.env") });

const mongoURL = process.env.DATABASE_URL;

const connectToMongo = () => {
  const mongoURI =
    process.env.MONGO_URI ||
    "mongodb://dbDevAdmin:DBdevADmIN1331@54.86.48.18:27017";
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB", err));
};

module.exports = { connectToMongo };
