import express from "express";
const router = express.Router();
import * as urlController from "../controller/urlController.js";

router
	.get("/:shortId", urlController.handleRedirect)
	.post("/", urlController.hangleGenerateNewShortURL);

export default router;
