const { db } = require("./server/db");
const { green, red } = require("chalk");

const User = require("./server/db/models/Users");
const Service = require("./server/db/models/Services");
const Appointment = require("./server/db/models/Appointments");

const users = [
	{
		firstName: "John",
		lastName: "Smith",
		email: "jsmith@gmail.com",
		password: "jsmith",
	},
	{
		firstName: "Amanda",
		lastName: "Anton",
		email: "anton@gmail.com",
		password: "aanton",
	},
	{
		firstName: "Alex",
		lastName: "K",
		email: "alexk@gmail.com",
		password: "ak",
	},
	{
		firstName: "Sophia",
		lastName: "Jane",
		email: "sjane@gmail.com",
		password: "sjane",
	},
];
const services = [
	{
		name: "Lash Extension",
		price: 199.0,
		duration: 120,
	},
	{
		name: "Lash Lift",
		price: 85.0,
		duration: 60,
	},
	{
		name: "Lash Tinting",
		price: 25.0,
		duration: 45,
	},
	{
		name: "Express Make-up",
		price: 90.0,
		duration: 45,
	},
	{
		name: "Evening Make-up",
		price: 150.0,
		duration: 60,
	},
	{
		name: "Wedding Make-up",
		price: 200.0,
		duration: 90,
	},
	{
		name: "Brow Lamination",
		price: 120.0,
		duration: 45,
	},
	{
		name: "Brow Tinting",
		price: 45.0,
		duration: 30,
	},
	{
		name: "Brow Shaping",
		price: 20.0,
		duration: 20,
	},
];

// const appointments = [
// 	{

// 	},
// 	{

// 	},
// 	{

// 	},
// 	{

// 	},
// ];

const seed = async () => {
	try {
		await db.sync({ force: true });

		await Promise.all(
			users.map((user) => {
				return User.create(user);
			})
		);

		await Promise.all(
			services.map((service) => {
				return Service.create(service);
			})
		);
		// await Promise.all(
		// 	appointments.map((appointment) => {
		// 		return Appointment.create(appointment);
		// 	})
		// );

		console.log(green("Seeding success!"));
		db.close();
	} catch (err) {
		console.error(red("Oh noes! Something went wrong!"));
		console.error(err);
		db.close();
	}
};

seed();
