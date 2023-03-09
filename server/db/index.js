const db = require("./database");
const User = require("./models/User");
const Service = require("./models/Service");
const Appointment = require("./models/Appointment");

User.hasMany(Appointment);
Appointment.belongsTo(User);

Appointment.belongsToMany(Service, { through: "ServiceAppointment" });
Service.belongsToMany(Appointment, { through: "ServiceAppointment" });

module.exports = {
	db,
	User,
	Service,
	Appointment,
};
