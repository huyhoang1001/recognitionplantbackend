const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const plantSchema = new Schema({
    name: { type: String, require: true },

    nameVN: { type: String },

    nameScience: { type: String },
    
    familiar: { type: String },
    
    location: { type: String },

    characteristics: { type: String },

    meaning: { type: String },

    images: [{ type: String }],

    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plant', plantSchema);