const express = require("express");
const app = express();

app.get("/*", (req, res) => {
	res.status(301).redirect("https://v3.talkium.in" + req.path)
})

app.listen(80);