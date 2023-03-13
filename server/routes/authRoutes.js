const router = require("express").Router();
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// POST api/auth
router.post("/login", async (req, res, next) => {
	try {
	  res.send({ token: await User.authenticate(req.body)} );
	} catch (err) {
	  next(err);
	}
  });
  // POST api/auth
  router.post("/register", async (req, res, next) => {
	try {
	  const { firstName, lastName, email, phoneNumber, password } = req.body;
	  const user = await User.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		phoneNumber : phoneNumber,
		password: password,
	});
	  res.send({ token: await user.generateToken() });
	} catch (err) {
	  if (err.name === "SequelizeUniqueConstraintError") {
		res.status(401).send("User already exists");
	  } else {
		next(err);
	  }
	}
  });
  // GET api/auth
  router.get("/me", async (req, res, next) => {
	try {
	  res.send(await User.findByToken(req.headers.authorization));
	} catch (ex) {
	  next(ex);
	}
  });


module.exports = router;
