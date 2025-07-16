import express from "express";
import { verifyToken, AuthRequest } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/profile", verifyToken, async (req: AuthRequest, res) => {
  const userId = req.userId;

  res.json({ message: "Protected profile info", userId });
});

export default router;
