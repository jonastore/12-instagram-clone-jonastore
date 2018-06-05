var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.use(bodyParser.urlencoded( { extended: false } ));
router.use(bodyParser.json());

var User = require('../models/User');
var TokenVerify = require('../middleware/TokenVerify');

router.post('/login', function(req, res) {
    User.findOne( { email: req.body.email }, function(error, user) {
        if (error) return res.status(500).send('An error occured while trying process login.');

        if (!user) return res.status(404).send('No registered user found with that email.');

        // Compare passwords
        var isValidPassword = bcrypt.compareSync(req.body.password, user.password);

        if (!isValidPassword) return res.status(401).send({
            authenticated: false,
            token: null
        });

        var token = jwt.sign( { id: user._id }, config.secret, {
            expiresIn: 86400 // valid for 24 hours
        });

        return res.status(200).send({
            authenticated: true,
            token: token,
            user: user
        });
    })
});

router.post('/register', function(req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function(error, user) {
        // Inside the callback now, we have either a) successfully created the user or b) something went horribly wrong
        if (error) {
            return res.status(500).send("An error occured while trying to add information to the database " + error);
        } else {
            // create a JWT token
            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // valid for 24 hours
            });

            return res.status(200).send({ authenticated: true, token: token });
        }
    });
});

// Apply our TokenVerify middleware
router.get('/me', TokenVerify, function(req, res) {
    // req.userId comes from the TokenVerify middleware function
    User.findById(req.userId, { password: 0 }, function(error, user) {
        if (error) {
            res.status(500).send('An error occured while trying to find the user.');
        }

        if (!user) {
            res.status(404).status('User not found');
        }

        res.status(200).send({
            authenticated: true,
            user: user
        });
    });
})

module.exports = router;