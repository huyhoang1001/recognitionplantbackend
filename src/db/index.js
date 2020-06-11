const connection = require('./connection');
const User = require('../models/user.model');
const Post = require('../models/post.model');
const Plant = require('../models/plant.model');

connection.once('open', () => {
    console.info('MongoDb Connection Established!');
});

module.exports = {
    User,
    Post,
    Plant
};
