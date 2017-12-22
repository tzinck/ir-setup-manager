var router = require("express").Router();
var cars = require("../config/cars");
var tracks = require("../config/tracks");

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected'});
});

router.get('/cars', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({cars}));
});

router.get('/tracks', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({tracks}));
});

module.exports = router;