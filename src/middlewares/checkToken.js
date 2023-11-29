import { verifyToken } from "../utils/jwt.js";

const checkToken = async (req, res, next) => {
  const tokenData = verifyToken(req.cookies.token);
  if (tokenData && tokenData.user) {
    next();
  } else {
    res.status(401).send({ error: "Invalid token" });
  }
};

export { checkToken };