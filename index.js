// Basic Imports for Backend
import express from "express";
import mongoose from "mongoose";
const app = express();
import { PORT, DB_URL } from "./config.js";
import path from "path";

// Routes
import urlRouter from "./routes/urlRouter.js";
import userRouter from "./routes/userRouter.js";
import staticRouter from "./routes/staticRouter.js";

// Authentication
import cookieParser from "cookie-parser";
import {
	restrictToLoggedInUserOnly,
	checkAuth,
} from "./middlewares/auth.js";

// Setting up server side rendering
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middle Ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/url", restrictToLoggedInUserOnly, urlRouter);
app.use("/user", userRouter);
app.use("/", checkAuth, staticRouter);

mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("DataBase Connected");
		app.listen(PORT, () => {
			console.log("Server Connected");
		});
	})
	.catch((err) => {
		console.log({ message: err.message });
	});
