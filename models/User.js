var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Beskriv hur en user ska se ut
var UserSchema = new mongoose.Schema({
    name: {type: String, maxlength: [100, 'Are you insane? We can\'t handle that...']},
    email: String,
    password: {type: String, minlength: [8, 'Paswwords must contain at least 8 characters']}
});

UserSchema.pre('save', function(next) {
    var user = this;
    var roundsOfSalt = 5;

    // Fail-safe here if password is not changed
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(roundsOfSalt, function(error, salt) {
        if (error) return next(error);
        
        bcrypt.hash(user.password, salt, function(error, hash) {
            if (error) return next(error);

            user.password = hash;
            next();
        });
    })
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');