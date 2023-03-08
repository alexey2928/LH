const db = require("./database");
const Users = require("./models/Users");
const Services = require("./models/Services");
const Appointments = require("./models/Appointments");

Users.hasMany(Appointments);
Appointments.belongsTo(Users);

Appointments.belongsToMany(Services, { through: "ServicesAppointments" });
Services.belongsToMany(Appointments, { through: "ServicesAppointments" });

module.exports = {
	db,
	Users,
	Services,
	Appointments,
};
