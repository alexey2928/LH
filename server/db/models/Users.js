const Sequelize = require("sequelize");
const db = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = db.define("User", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			notNull: { msg: "first name is required" },
		},
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			notNull: { msg: "last name is required" },
		},
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
			isEmail: true,
			notNull: { msg: "email is required" },
		},
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: { msg: "password is required" },
		},
	},

	image: {
		type: Sequelize.STRING,
		defaultValue: "./public/images/defaultUserImage.png",
	},
	fullName: {
		type: Sequelize.VIRTUAL,
		get() {
			return `${this.firstName} ${this.lastName}`;
		},
	},
});

const SALT_ROUNDS = 10;

User.beforeCreate(async (user) => {
	user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
});

User.authenticate = async ({ email, password }) => {
	const user = await User.findOne({
		where: {
			email: email,
		},
	});
	if (user && (await bcrypt.compare(password, user.password))) {
		return jwt.sign({ id: user.id }, process.env.JWT);
	}
	const error = Error("bad credentials");
	error.status = 401;
	throw error;
};

User.byToken = async (token) => {
	try {
		const payload = jwt.verify(token, process.env.JWT);
		const user = await User.findByPk(payload.id);
		console.log(user);
		if (user) {
			return user;
		}
		const error = Error("bad credentials");
		error.status = 401;
		throw error;
	} catch (ex) {
		const error = Error("bad credentials");
		error.status = 401;
		throw error;
	}
};



module.exports = User;
