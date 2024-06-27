const express = require("express");
const app = express();
const PORT = 8000;
const { connectToMongo } = require("./db");
const User = require("./models/user");
