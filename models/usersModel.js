const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

// -- Mongoose Pre-Save Hook -- //
UserSchema.pre('save', function(next) {
    console.log("New User will be Created", this);
    next();
});

// -- Mongoose Post-Save Hook -- //
UserSchema.post('save', function(doc, next) {
    console.log("New User Created!!");
    next();
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
