import express from "express";
import { login, register } from "../controllers/authController.js";
import { resetPassword } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/reset-password", resetPassword);

export default router;
