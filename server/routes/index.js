const router = require("express").Router();

router.use("/users", require("./usersRoutes"));
router.use("/services", require("./servicesRoutes"));
router.use("/auth", require("./authRoutes"));
router.use("/booking", require("./bookingRoutes"))
// router.use("/appointments", require("./appointmentsRoutes"));

router.use((req, res, next) => {
	const err = new Error("API route not found!");
	err.status = 404;
	next(err);
});

module.exports = router;
