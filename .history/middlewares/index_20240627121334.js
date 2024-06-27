const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "../config.env" });

const userAuth = async (req, res, next) => {
  const token = req.header("Authorization");

  if (token) {
    try {
      currentToken = token.split(" ")[1];
      const data = jwt.verify(currentToken, process.env.JWT_SECRET);
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ message: "please authenticate using a valid token" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized User" });
  }
};

module.exports = userAuth;
