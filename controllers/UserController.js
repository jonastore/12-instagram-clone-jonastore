var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded( { extended: false } ));
router.use(bodyParser.json());

var User = require('../models/User');

router.get('/', function(req, res) {
    User.find({}, function(error, users) {
        if (error) {
            return res.status(500).send("An error occured while trying to get the users from the database");
        } else {
            res.status(200).send(users);
        }
    })
});

router.get('/:id', function(req, res) {
    User.findById(req.params.id, function(error, user) {
        if (error) {
            return res.status(500).send("An error occured while trying to find the user from the database");
        } else {
            res.status(200).send(user);
        }
    })
});

router.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(error, user) {
        if (error) {
            return res.status(500).send("An error occured while trying to delete the user from the database");
        } else {
            res.status(200).send("User " + user.name + " was successfully deleted.");
        }
    })
});

router.put('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(error, user) {
        if (error) {
            return res.status(500).send("An error occured while trying to update the user in the database");
        } else {
            res.status(200).send(user);
        }
    })
});


module.exports = router;