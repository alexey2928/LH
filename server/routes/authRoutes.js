const router = require("express").Router();
const Users = require("../db/models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = await Users.findOne({
		where: {
			email: email,
		},
	});
	if (!user) {
		return res.status(401).json({ message: "Invalid email or password" });
	}

	bcrypt.compare(password, user.password, (err, result) => {
		if (err) {
			return res.status(500).json({ message: err.message });
		}

		if (!result) {
			return res.status(401).json({ message: "Invalid email or password" });
		}
		// Generate JWT token
		const token = jwt.sign({ id: user.id }, process.env.JWT, {
			expiresIn: "1h",
		});
		res.json({ token, user });
	});
});

const requireToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	if (authHeader) {
		const token = authHeader.split(" ")[1];
		try {
			const decoded = jwt.verify(token, process.env.JWT);
			req.user = decoded;
			next();
		} catch (err) {
			res.status(401).json({ message: "Invalid token" });
		}
	} else {
		res.status(401).json({ message: "Authorization header missing" });
	}
};

const dashboardData = [
	{ id: 1, name: "Item 1" },
	{ id: 2, name: "Item 2" },
	{ id: 3, name: "Item 3" },
];
router.get("/dashboard", requireToken, (req, res) => {
	res.json(dashboardData);
});

module.exports = router;
