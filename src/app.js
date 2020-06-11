const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRouter = require('./routes/v1.api');

const mongoose = require('mongoose');
const config = require('./config');
//connect mongo
const mongoUri = config.mongoUri;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

//config app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config our app  to handle CORS requests
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET', 'POST', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-With, content-type, Authorization');
    next();
});

app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
}))

app.use('/api', apiRouter);

module.exports = app;