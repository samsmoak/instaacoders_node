const express = require("express");
const app = express();

app.get("/:number", (req, res) => {
	const number = parseInt(req.params.number);

	let output = "";
	if (number % 5 === 0) {
		output += "L";
	}
	if (number % 7 === 0) {
		output += "R";
	}
	if (output === "") {
		output = number.toString();
	}

	res.json({ output });
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
