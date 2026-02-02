import { Router } from "express";
import {
  deleteUser,
  getUserId,
  Login,
  signup,
  updateUser,
} from "./user.service.js";
import { auth } from "../../middleWare/auth.middleware.js";
const router = Router();

router.post("/signup", async (req, res, next) => {
  const result = await signup(req.body);
  return res.status(201).json({ message: "User added successfully", result });
});
router.post("/login", async (req, res, next) => {
  try {
    const { token, user } = await Login(req.body);
    return res.status(200).json({
      message: "Done Login",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    throw error;
  }
});

router.patch("/update", auth, async (req, res, next) => {
  try {
    const userId = req.userId;
    const updates = req.body;

    console.log(userId);

    const result = await updateUser(userId, updates);

    return res.status(201).json({ message: "User updated", result });
  } catch (error) {
    throw error;
  }
});

router.delete("/delete", auth, async (req, res, next) => {
  const userId = req.userId;
  const result = await deleteUser(userId);
  return res.status(201).json({ message: "User delete successfully", result });
});

router.get("/UserId", auth, async (req, res, next) => {
  const userId = req.userId;
  // console.log(userId);

  const result = await getUserId(userId);
  return res.status(201).json({ message: " get User successfully", result });
});
export default router;
