const router = require("express").Router();
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// POST /auth
router.post("/login", async (req, res, next) => {
	console.log("REQ BODY", req.body)
	const token = await User.authenticate(req.body)
	console.log("TOKEN", token)
	try {
	  //res.send({ token: await User.authenticate(req.body)} );
	  
	} catch (err) {
	  next(err);
	}
  });
  
  router.post("/signup", async (req, res, next) => {
	try {
	  const user = await User.create(req.body);
	  res.send({ token: await user.generateToken() });
	} catch (err) {
	  if (err.name === "SequelizeUniqueConstraintError") {
		res.status(401).send("User already exists");
	  } else {
		next(err);
	  }
	}
  });
  
  router.get("/me", async (req, res, next) => {
	try {
	  res.send(await User.findByToken(req.headers.authorization));
	} catch (ex) {
	  next(ex);
	}
  });


module.exports = router;
