import * as UserService from "../service/auth.js";

export async function restrictToLoggedInUserOnly(req, res, next) {
	// Getting userUid from cookies
	const userUid = req.cookies?.uid;

	// If userUid doesnot exist Redirect To SignUp
	if (!userUid) {
		return res.redirect("/signup");
	}

	// Get Token of the User of UserUid Exist
	const user = UserService.getUser(userUid);

	// Check if user has correct Password or not
	if (!user) {
		return res.redirect("/login");
	}

	req.user = user;
	next();
}

export async function checkAuth(req, res, next) {
	const userUid = req.cookies?.uid;

	const user = UserService.getUser(userUid);

	req.user = user;
	next();
}
