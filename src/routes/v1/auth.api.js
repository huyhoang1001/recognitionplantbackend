// Libs
const express = require('express');
const { controllerAuth } = require('../../controllers');

const auth_api_route = express.Router();

auth_api_route.route('/google').post(controllerAuth.loginGoogle);
auth_api_route.route('/facebook').post(controllerAuth.loginFacebook);

module.exports = auth_api_route;