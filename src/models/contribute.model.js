const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contributeSchema = new Schema({
    nameVN: { type: String },

    familiar: { type: String },
    
    location: { type: String },

    characteristics: { type: String },

    meaning: { type: String },

    comment: { type: String },

    postContributed: { type: mongoose.Schema.ObjectId, ref: 'Post' },

    contributedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },

    created: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Contribute', contributeSchema);