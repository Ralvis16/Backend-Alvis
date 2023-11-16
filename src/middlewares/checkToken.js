import { verifyToken } from "../utils/jwt.js";

const checkToken = async (req, res, next) => {
  if (req.cookies.token) {
    const result = verifyToken(req.cookies.token);
    if (result && result.user) {
      next();
    } else {
      res.status(401).send({ error: "Invalid token" });
    }
  } else {
    res.status(401).send({ error: "Token not provided" });
  }
};

export { checkToken };