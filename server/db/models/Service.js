const Sequelize = require("sequelize");
const db = require("../database");

const Service = db.define("Service", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.TEXT,
	},
	price: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
	duration: {
		type: Sequelize.INTEGER,
	},
});

module.exports = Service;
