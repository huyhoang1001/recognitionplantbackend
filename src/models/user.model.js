const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
    google: {
        googleId: { type: String }
    },

    facebook: {
        facebookId: { type: String }
    },

    email: { type: String, trim: true, lowercase: true },

    fullName: { type: String, trim: true },

    birthday: { type: Date },

    gender: { type: String },

    address: { type: String },

    avatar: { type: String },

    created: { type: Date, default: Date.now },

    updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);