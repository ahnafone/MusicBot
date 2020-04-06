//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//get
app.get("/", function(req, res) {
  res.send("home.html");
});

//start server
app.listen(4000, function() {
  console.log("Server started on port 3000");
});