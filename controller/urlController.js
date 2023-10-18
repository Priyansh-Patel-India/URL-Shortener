import URL from "../models/urlModel.js";
import { nanoid } from "nanoid";

export const hangleGenerateNewShortURL = async (req, res) => {
	const body = req.body;
	// Handle Error if no URL is sent
	if (!body.url) {
		res.status(400).json({ error: "URL is Required" });
	}
	// Generate 8 character shortId using "nanoid"
	const shortId = nanoid(8);
	// Create URL in DataBase
	URL.create({
		shortId: shortId,
		redirectURL: body.url,
		visitHistory: [],
		createdBy: req.user._id,
	});
	// After Creation Redirect to Index
	res.redirect("/");
};

export const handleRedirect = async (req, res) => {
	// Get shortId when clicked
	const shortId = req.params.shortId;
	// Find ShortId Update by Adding a new visitHistory
	const entry = await URL.findOneAndUpdate(
		{
			shortId,
		},
		{
			$push: {
				visitHistory: {
					timestamp: Date.now(),
				},
			},
		}
	);
	// Redirect to Clicked URL
	res.redirect(entry.redirectURL);
};
