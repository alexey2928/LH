const router = require("express").Router();

const Services = require("../db/models/Service");

// api/users
router.get("/", async (req, res, next) => {
	try {
		const services = await Services.findAll();
		res.json(services);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
