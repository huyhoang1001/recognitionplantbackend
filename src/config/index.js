const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

const config = {
    env: process.env.MONGOLAB_URI || process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,

    mongoUri: process.env.MONGOLAB_URI ||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/RecognitionPlant',
    tokenLife: '1h',
    jwtSecret: 'your tokenSerect'
}

module.exports = config;