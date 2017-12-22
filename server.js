var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var dbconfig = require("./config/dbconfig");
var routes = require("./routes/router");

var app = express();
app.use(bodyParser.json());
app.use('/api', routes);
app.use(morgan("dev"));

mongoose.connect(dbconfig.mongodb_url, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection error"));

app.listen(8080, function() {
    console.log("Listening on port 8080");
})