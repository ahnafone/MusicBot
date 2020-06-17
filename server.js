//jshint esversion:6

const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const youtubedl = require('youtube-dl');
const downloader = require("./public/downloader.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//get
app.get("/search", function(req, res) {
  res.json({id: "Hellow World"});
});

app.post("/play", function(req, res) {
  var dir = "-o '" + __dirname + "/downloads'";
  var options = ["-x", "--audio-format mp3", "--audio-quality 0", dir];
  var err = downloader.download(req.body.link, options);
  if(err == 0) {
    res.sendFile(__dirname + "/downloads/song.mp3", function(err) {
      if(!err)
        console.log("File sent.");
    });
  } else {
    res.send("Song not found!");
  }
});

//start server
app.listen(4000, function() {
  console.log("Server started on port 4000");
});
