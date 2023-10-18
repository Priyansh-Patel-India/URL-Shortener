import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

// Setting Token for User
export const setUser = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			email: user.email,
		},
		SECRET_KEY
	);
};

// Getting Token from User
export const getUser = (token) => {
	if (!token) return null;
	return jwt.verify(token, SECRET_KEY);
};
