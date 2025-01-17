import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }

  token = token.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded;
    req.token = token;
    next();
  } catch (err) {
    console.log("Error while verifying token", err.message);
    return res.status(401).json({ message: "UnAuthorized" });
  }
};

export default verifyToken;
