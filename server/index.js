const fs = require("fs");
const express = require("express");
const PORT = 5000;
const app = express();
const cors = require("cors");

// Node FS
let rawdata = fs.readFileSync("./update.json");
let update = JSON.parse(rawdata);

// EXPRESS
app.use(cors());
app.listen(PORT, () => console.log("Listening on port:", PORT));
// app.use(logger);

// function logger(req, res, next) {
//   console.log(`[${Date.now()}], ${req.method}, ${req.url}`);
//   console.log("hey");
//   next();
// }

// basic get
app.get("/update", (req, res) => {
  res.send(update);
});

app.get("/version", (req, res) => {
  res.send({ version: 2 });
});

// get with params
app.get("/greet/:name", (req, res) => {
  res.json({ greeting: ` Hello ${req.params.name}` });
});

console.log(update);
