const chalk = require("chalk");
const Sequelize = require("sequelize");

console.log(chalk.yellow("Opening database connection"));

const db = new Sequelize(
	process.env.DATABASE_URL || `postgres://localhost:5432/lhstudio`,
	{
		logging: false,
	}
);

module.exports = db;
