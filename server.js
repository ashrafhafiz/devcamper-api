// Load .env configuration
require("dotenv").config({ path: "./config/.env" });
//
// Display all the .env content
// console.log(require("dotenv").config({ path: "./config/.env" }).parsed);

// Load Express server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:${PORT}`);
});

//Run app, then load http://localhost:5000 in a browser to see the output.
