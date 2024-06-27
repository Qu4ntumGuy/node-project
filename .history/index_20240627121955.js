const express = require("express");
const app = express();
const { connectToMongo } = require("./db");
const User = require("./models/user");

const port = process.env.PORT || 5000;

connectToMongo();

app.use(express.json());

app.use("/api", require("./routes/user"));

app.listen(port, (req, res) => {
  console.log(`listening at ${port}`);
});
