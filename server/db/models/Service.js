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
	image: {
		type: Sequelize.STRING,
		defaultValue: "https://images.unsplash.com/photo-1581389042184-bfc74c8af48e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
	}
});

module.exports = Service;
