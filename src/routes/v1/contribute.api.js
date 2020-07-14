const express = require('express');
const { controllerContribute } = require('../../controllers');
const authMiddleware = require('../../middlewares/auth.middleware');

const contribute_api_route = express.Router();

contribute_api_route.route('/create').post(authMiddleware.checkAuthor, controllerContribute.create);

module.exports = contribute_api_route;