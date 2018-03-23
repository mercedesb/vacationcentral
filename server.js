
// Server.js - Node/Express server.

// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const sequelize= require("sequelize");
const routes = require("./routes");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));ß
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("client/build"));
//Add routes both
app.use(routes);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});