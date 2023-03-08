const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(morgan);
app.use(cors());
app.use("/api", require("./routes"));

app.use("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((req, res, next) => {
	const error = new Error("This Page Not Found");
	error.status = 404;
	next(error);
});

app.use((err, req, res, next) => {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
