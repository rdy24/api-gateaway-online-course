const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
	try {
		const userId = req.user.data.id;
		console.log(userId);

		const review = await api.post("/api/reviews", {
			user_id: userId,
			...req.body,
		});
		return res.json(review.data);
	} catch (error) {
		if (error.code === "ECONNREFUSED") {
			return res
				.status(500)
				.json({ status: "error", message: "service unavailable" });
		}

		// const { data } = error.response;
		return res.json(error.response);
	}
};
