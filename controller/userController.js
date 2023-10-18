// import { v4 as uuidv4 } from "uuid";
import User from "../models/userModel.js";
import * as UserService from "../service/auth.js";

export const handleUserSignUp = async (req, res) => {
	// Get Values from input
	const { name, email, password } = req.body;

	// Add New User
	await User.create({
		name: name,
		email: email,
		password: password,
	});
	// Redirect to their respective URLs HomePage
	return res.redirect("/");
};

export const handleUserLogin = async (req, res) => {
	// Get Values from input
	const { email, password } = req.body;

	// Check if User Exist or Not
	const userEmail = await User.findOne({ email });
	const user = await User.findOne({ email, password });
	if (!userEmail) {
		// Rendering to User doesnot exist
		res.render("signup", {
			error: "You need to SignUp First",
		});
	} else if (!user) {
		// Rendering to Login if Incorrect Password
		res.render("login", {
			error: "Incorrect Password",
		});
	} else {
		// Generating Token for each user
		const token = UserService.setUser(user);
		res.cookie("uid", token);
		res.redirect("/");
	}
};

// Using Hash Map
// const sessionId = uuidv4();
// UserService.setUser(sessionId, user);
// res.cookie("uid", sessionId);
