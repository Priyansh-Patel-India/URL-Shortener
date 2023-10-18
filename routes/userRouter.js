import express from "express";
const router = express.Router();
import * as userController from "../controller/userController.js";

router.post("/", userController.handleUserSignUp)
router.post("/login", userController.handleUserLogin);

export default router;
