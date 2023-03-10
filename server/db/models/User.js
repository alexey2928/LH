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
	phoneNumber: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
		  is: /^\+?[0-9]{10,12}$/ 
		}
	},
	image: {
		type: Sequelize.STRING,
		defaultValue: "https://cdn-icons-png.flaticon.com/512/1154/1154478.png?w=1480&t=st=1678406349~exp=1678406949~hmac=ae6d0951597828fa0a737afb6f495d5375f99d2cb0051e3dedc1f7753641bf0d",
	},
	role: {
		type: Sequelize.ENUM("admin", "user"),
		defaultValue: "user",
	},
	fullName: {
		type: Sequelize.VIRTUAL,
		get() {
			return `${this.firstName} ${this.lastName}`;
		},
	},
});


const SALT_ROUNDS = 5;

User.prototype.correctPassword = function (candidatePwd) {
	//we need to compare the plain version to an encrypted version of the password
	return bcrypt.compare(candidatePwd, this.password);
  };
  
  User.prototype.generateToken = function () {
	return jwt.sign({ id: this.id }, process.env.JWT);
  };
  
 
  User.authenticate = async function ({ email, password }) {
	const user = await this.findOne({ where: { email } });
	if (!user || !(await user.correctPassword(password))) {
	  const error = Error("Incorrect email/password");
	  error.status = 401;
	  throw error;
	}
	return user.generateToken();
  };
  
  User.findByToken = async function (token) {
	try {
	  const { id } = await jwt.verify(token, process.env.JWT);
	  const user = User.findByPk(id);
	  if (!user) {
		throw "User doesn't Exist";
	  }
	  return user;
	} catch (ex) {
	  const error = Error("bad token");
	  error.status = 401;
	  throw error;
	}
  };
  
  
  const hashPassword = async (user) => {
	//in case the password has been changed, we want to encrypt it with bcrypt
	if (user.changed("password")) {
	  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
	}
  };
  
  User.beforeCreate(hashPassword);
  User.beforeUpdate(hashPassword);
  User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

module.exports = User;
