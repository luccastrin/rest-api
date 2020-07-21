const express = require("express");
const app = express();

app.get("/users", (req, res) => {
	return res.json({
		name: "Lucas Trindade",
		email: "luccastrin@hotmail.com",
	});
});

app.listen(3000);
