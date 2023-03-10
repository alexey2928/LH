const { db } = require("./server/db");
const { green, red } = require("chalk");

const User = require("./server/db/models/User");
const Service = require("./server/db/models/Service");
const Appointment = require("./server/db/models/Appointment");

const users = [
	{
		firstName: "John",
		lastName: "Smith",
		email: "jsmith@gmail.com",
		password: "jsmith",
		phoneNumber: "7322601010"
	},
	{
		firstName: "Amanda",
		lastName: "Anton",
		email: "anton@gmail.com",
		password: "aanton",
		phoneNumber: "7002601010"
	},
	{
		firstName: "Alex",
		lastName: "K",
		email: "alexk@gmail.com",
		password: "ak",
		phoneNumber: "8002601010"
	},
	{
		firstName: "Sophia",
		lastName: "Jane",
		email: "sjane@gmail.com",
		password: "sjane",
		phoneNumber: "7322602020"
	},
];
const services = [
	{
		name: "Lash Extension",
		price: 199.0,
		duration: 120,
		image:"https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
	},
	// {
	// 	name: "Lash Lift",
	// 	price: 85.0,
	// 	duration: 60,
	// 	image: "https://thumbs.dreamstime.com/z/cosmetologist-bending-lashes-needle-curlers-lift-eyelashes-laminaton-procedure-beauty-salon-woman-closeup-face-179543683.jpg",
	// },
	{
		name: "Lash Tinting",
		price: 25.0,
		duration: 45,
		image: "https://images.unsplash.com/photo-1613057388812-029549dc3d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
	},
	{
		name: "Express Make-up",
		price: 90.0,
		duration: 45,
		image:"https://images.unsplash.com/photo-1595550912256-b24059bb08e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
	},
	{
		name: "Evening Make-up",
		price: 150.0,
		duration: 60,
		image:"https://images.unsplash.com/photo-1616683693445-77022fe0b528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
	},
	{
		name: "Wedding Make-up",
		price: 200.0,
		duration: 90,
		image:"https://images.unsplash.com/photo-1646335940347-819e906aee46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
	},
	{
		name: "Brow Lamination",
		price: 120.0,
		duration: 45,
		image:"https://images.unsplash.com/photo-1618322802459-0d570e4548c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80",
	},
	{
		name: "Brow Tinting",
		price: 45.0,
		duration: 30,
		image:"https://images.unsplash.com/photo-1534143826428-81fc61582afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=941&q=80",
	},
	{
		name: "Brow Shaping",
		price: 20.0,
		duration: 20,
		image:"https://images.unsplash.com/photo-1633276115947-8d35f394a309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
	},
];

const appointments = [
 	{
		start_time: "2023-05-10 09:00:00",
		UserId: 2,
		ServiceId: 1
 	},
 	{
		start_time: "2023-05-10 11:00:00",
		UserId: 2,
		ServiceId: 3
 	},
// 	{

// 	},
// 	{

// 	},
 ];

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
		await Promise.all(
			appointments.map((appointment) => {
				return Appointment.create(appointment);
			})
		);

		console.log(green("Seeding success!"));
		db.close();
	} catch (err) {
		console.error(red("Oh noes! Something went wrong!"));
		console.error(err);
		db.close();
	}
};

seed();
