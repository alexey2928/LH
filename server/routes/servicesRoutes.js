const router = require("express").Router();

const Services = require("../db/models/Service");

// api/services
router.get("/", async (req, res, next) => {
	try {
		const services = await Services.findAll();
		res.json(services);
	} catch (error) {
		next(error);
	}
});

// api/services/:id
router.get('/:serviceId', async (req, res, next) => {
	try {
		const serviceId = req.params.id
		const service = await Services.findOne({
			where: {
				id: serviceId,
			},
		})
		res.json(service)
	} catch (error) {
	  next(error)
	}
  })

module.exports = router;
