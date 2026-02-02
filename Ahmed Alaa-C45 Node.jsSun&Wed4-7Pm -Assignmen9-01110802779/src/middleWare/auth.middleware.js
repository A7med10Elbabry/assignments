import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.service.js";

export const auth = async (req, res, next) => {
  const authHeader = await req.headers.authorization;

  if (!authHeader) {
    throw new Error("no token provider", { cause: { status: 401 } });
  }

  const token = await authHeader.split(" ")[1];

  try {
    const checkToken = await jwt.verify(token, JWT_SECRET);

    console.log("TOKEN RECEIVED:", token);
    console.log("DECODED TOKEN:", checkToken);

    req.userId = await checkToken.id;
    next();
  } catch (error) {
    throw new Error(error.message, { cause: { status: 401 } });
  }
};
