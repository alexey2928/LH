const db = require("./database");
const User = require("./models/User");
const Service = require("./models/Service");
const Appointment = require("./models/Appointment");

User.hasMany(Appointment);
Appointment.belongsTo(User);

Service.hasMany(Appointment);
Appointment.belongsTo(Service);

module.exports = {
	db,
	User,
	Service,
	Appointment,
};
