const router = require("express").Router();

const User = require("../db/models/User");
const Appointment = require("../db/models/Appointment")
const Service = require("../db/models/Service")

// api/users
router.get("/", async (req, res, next) => {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (error) {
		next(error);
	}
});
// api/users/:id
router.get('/:id', async (req, res, next) => {
	try {
	  const user = await User.findByPk(req.params.id, {
		include: [{
			model:Appointment,
			include:[{
				model: Service
			}]
		}],
	  })
	  res.json(user)
	} catch (error) {
	  next(error)
	}
  })

// api/users
router.post("/", async (req, res, next) => {
	try {
		const { firstName, lastName, email,phoneNumber, password } = req.body;
		const user = await User.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
			phoneNumber : phoneNumber,
			password: password,
		});
		res.status(201).json(user);
	} catch (error) {
		next(error);
	}
});


// /api/users/:id
router.put('/:id', async (req, res, next) => {
	try {
	  const user = await User.findByPk(req.params.id)
	  res.send(await user.update(req.body))
	} catch (error) {
	  next()
	}
  })
  
  // /api/users/:id
  router.delete('/:id', async (req, res, next) => {
	try {
	  const usertoDestroy = await User.findByPk(req.params.id)
	  await usertoDestroy.destroy()
	  res.send(usertoDestroy)
	} catch (error) {
	  next(error)
	}
  })


module.exports = router;
