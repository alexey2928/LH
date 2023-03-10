const router = require("express").Router();

const User = require("../db/models/User");
const Appointment = require("../db/models/Appointment")
const Service = require("../db/models/Service")

// api/booking
router.get("/", async (req, res, next) => {
	try {
		const apps = await Appointment.findAll({ include: Service });
		res.json(apps);
	} catch (error) {
		next(error);
	}
});

// api/booking
router.get('/:id', async (req, res, next) => {
	try {
	  const app = await Appointment.findOne({
		where: {
            UserId: req.params.id,
        },
        include: [{
            model:Service
        }]
	  })
	  res.json(app)
	} catch (error) {
	  next(error)
	}
  })

// api/booking
router.post('/', async (req, res, next) => {
	try {
	  const {UserId, ServiceId, name, email, phoneNumber, start_time} = req.body	
	  console.log(req.body)	
	  const app = await Appointment.create({
		UserId : UserId,
		ServiceId : ServiceId,
		name : name,
		email : email,
		phoneNumber : phoneNumber,
		start_time : start_time,
	  })
	  res.json(app)
	} catch (error) {
	  next(error)
	}
  })




module.exports = router;