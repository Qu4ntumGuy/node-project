const express = require("express");
const app = express();
const { connectToMongo } = require("./db");
const User = require("./models/user");

const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(`listening at ${port}`);
});
