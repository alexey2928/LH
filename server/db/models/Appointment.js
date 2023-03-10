const Sequelize = require("sequelize");
const db = require("../database");

const Appointment = db.define("Appointment", {
	name: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
	},
	phoneNumber: {
		type: Sequelize.STRING,
		validate: {
		  is: /^\+?[0-9]{10,12}$/ 
		}
	},
	start_time: {
		type: Sequelize.DATE,
	},
	serviceInfo: {
		type: Sequelize.TEXT,
	},
});

module.exports = Appointment;
