import express, { Router } from "express";
const router = express.Router();
import URL from "../models/urlModel.js";

router
	// For Home Page
	.get("/", async (req, res) => {
		if (!req.user) {
			return res.redirect("/login");
		}
		const allUrls = await URL.find({ createdBy: req.user._id });
		res.render("index", {
			urls: allUrls,
		});
	})
	// For Sign Up
	.get("/signup", async (req, res) => {
		res.render("signup");
	})
	// For Login
	.get("/login", async (req, res) => {
		res.render("login");
	});

export default router;
