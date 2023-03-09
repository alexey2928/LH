const router = require("express").Router();

const Users = require("../db/models/User");

// const requireToken = async (req, res, next) => {
// 	try {
// 		const token = req.headers.authorization;
// 		const user = await Users.byToken(token);
// 		req.user = user;
// 		next();
// 	} catch (error) {
// 		next(error);
// 	}
// };

// api/users
router.get("/", async (req, res, next) => {
	try {
		const users = await Users.findAll();
		res.json(users);
	} catch (error) {
		next(error);
	}
});
// api/users
router.post("/", async (req, res, next) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		const user = await Users.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
		});
		res.status(201).json(user);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
