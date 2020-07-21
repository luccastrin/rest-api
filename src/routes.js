const express = require("express");

const routes = express.Router();

routes.post("/users/", (request, response) => {
	const body = request.body;

	console.log(body);

	return response.json({
		name: "Fernando Trindade",
		email: "luccastrin@hotmail.com",
	});
});

module.exports = routes;
