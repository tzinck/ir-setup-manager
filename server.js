var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var morgan = require("morgan");
var config = require("./config");
var routes = require("./routes/router");

var app = express();
app.use(bodyParser.json());
app.use('/', routes);
app.use(morgan("dev"));

var db;

mongodb.MongoClient.connect(config.mongodb_url, function(err, database) {
    if (err) {
        return console.log(err);
    }

    db = database;
    console.log("DB Conn");
});

app.listen(8080, function() {
    console.log("Listening on port 8080");
})