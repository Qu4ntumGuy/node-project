const userAuth = () => {
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