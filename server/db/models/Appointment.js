const Sequelize = require("sequelize");
const db = require("../database");

const Appointment = db.define("Appointment", {
	start_time: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	end_time: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.STRING,
	},
});

module.exports = Appointment;
