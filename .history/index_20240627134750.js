const express = require("express");
const app = express();
const { connectToMongo } = require("./db");
const User = require("./models/user");

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/worko", require("./routes/user"));

connectToMongo();

app.listen(port, (req, res) => {
  console.log(`listening at ${port}`);
});
